<script>
// @ts-nocheck

  import { onMount, onDestroy } from "svelte";
  import { fetchData, fetchDataFile } from "$lib/api/fetch";
  import { goto } from "$app/navigation";
  import { selectedImage } from "$lib/stores/store";
  import ImageModal from "../../../components/ImageModal.svelte";
  import { user } from "$lib/stores/user";
  import { page } from "$app/stores";
  import { writable } from "svelte/store";
  import { env } from "$env/dynamic/public";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faImage } from "@fortawesome/free-solid-svg-icons";
  import CKEditor from "../../../components/CKEditor.svelte";

  const seq = $page.params.seq;
  const IMG_HOST = env.PUBLIC_IMG_HOST;
  const BACKEND_HOST = env.PUBLIC_BACKEND_HOST;

  let editor = false;

  let mainMenu = [];
  let subMenu = [];
  let category = [];

  const userInfo = $user;
  let uploadFile;
  let downloadFile;

  // initialData를 writable 스토어로 생성
  const initialData = writable({
    subject: "",
    content: "",
    contentHtml: "",
    filepath: "",
    download: "",
    regDate: "",
    param1: "",
    param2: "",
    param3: "",
    mainSeq: 0,
    subSeq: 0,
    categorySeq: 0,
    seq: 0,
    category:0,
  }); // 기본값으로 초기화

  function handleParam3Change(event) {
    $initialData.param3 = event.detail; // 이벤트로부터 전달받은 param3 값을 부모 컴포넌트 변수에 업데이트
  }

  onMount(async () => {
    const response = await fetchData("/api/boardDetail?seq=" + seq, "");
    initialData.set(response);
    const mainMenuList = await fetchData(
      "/api/mainMenuList?val=sub&combo=1",
      ""
    );
    const subMenuList = await fetchData(
      `/api/subMenuList?mainSeq=${response.mainSeq}&combo=1`,
      ""
    );
    const categoryList = await fetchData(
      `/api/categoryList?mainSeq=${response.mainSeq}&subSeq=${response.subSeq}&combo=1`,
      ""
    );

    mainMenu = mainMenuList;
    subMenu = subMenuList;
    category = categoryList;
  });

  async function handleSelect(event) {
    let selectedOption = event.target.value;
    await setSubMenu(selectedOption);
  }

  let selectedOptionSub = "";
  async function handleSelectSub(event) {
    var mainMenuSelect = document.getElementById("mainMenu");
    var mainSeq = mainMenuSelect.value;

    selectedOptionSub = event.target.value;
    await setCategory(mainSeq, selectedOptionSub);
  }

  async function setSubMenu(mainSeq) {
    subMenu = await fetchData(`/api/subMenuList?mainSeq=${mainSeq}&combo=1`);
    if (subMenu.length > 0) {
      delayForceChangeEvent("subMenu");
    }
  }

  async function setCategory(mainSeq, subSeq) {
    category = await fetchData(
      `/api/categoryList?mainSeq=${mainSeq}&subSeq=${subSeq}&combo=1`
    );
    delayForceChangeEvent("category");
  }

  async function forceChangeEvent(str) {
    const selectbox = document.getElementById(str);
    selectbox.dispatchEvent(new Event("change"));
  }

  function delayForceChangeEvent(str) {
    setTimeout(() => forceChangeEvent(str), 100);
  }

  async function submitForm(event) {
    event.preventDefault();

    const form = document.querySelector('form[name="frm"]');
    const formData = new FormData(form);

    if (uploadFile) {
      console.log(uploadFile);
      formData.append("file", uploadFile[0]);
    }
    if (downloadFile) {
      formData.append("downloadFile", downloadFile[0]);
    }

    formData.append("param3", $initialData.param3);
    formData.append("writer", userInfo.userId);

    var data = await fetchDataFile("/api/saveBoard", formData);

    if (data > 0) {
      alert("수정되었습니다");
      goto("/admin/post", { replaceState: false });
    }
  }

  let selectedImagePath = "";
  let isModalOpen = false; // 이미지 모달이 열려있는지 여부를 저장하는 변수

  function openModal(filepath) {
    selectedImagePath = filepath;
    selectedImage.set(filepath);
    isModalOpen = true;
  }

  function closeModal() {
    selectedImagePath = "";
    selectedImage.set("");
    isModalOpen = false;
  }

  $: {
    if (selectedOptionSub) {
      //프로대만족, 월간매거진은 ckeditor로
      if (selectedOptionSub == 47) {
        editor = true;
      } else {
        editor = false;
      }
    }
  }

  // filepath에 '/uploads/' 문자열이 포함되어 있는지 확인하는 함수
  /**
     * @param {string | string[]} filepath
     */
     function getReturnValue(filepath) {
    if (filepath.includes('/uploads/')) {
      return `${BACKEND_HOST}${filepath}`;
    } else {
      return `${IMG_HOST}${filepath}`;
    }
  }

</script>

<div class="page_title">
  <h2>게시물 수정</h2>
</div>
<div class="part">
  <form name="frm" id="frm">
    <table class="add_table">
      <caption>게시물 수정</caption>
      <colgroup>
        <col width="250px" />
        <col width="*%" />
      </colgroup>
      <tbody>
        <tr>
          <th>제목</th>
          <td>
            <input type="hidden" name="seq" bind:value={$initialData.seq} />
            <input
              type="text"
              name="subject"
              bind:value={$initialData.subject}
            />
          </td>
        </tr>
        <tr>
          <th>분류</th>
          <td>
            <div class="container">
              <div class="box">
                <select name="mainSeq" id="mainMenu" on:change={handleSelect}>
                  {#each mainMenu as item}
                    <option
                      value={item.seq}
                      selected={item.seq == $initialData.mainSeq}
                      >{item.name}</option
                    >
                  {/each}
                </select>
              </div>
              <div class="box">
                <select name="subSeq" id="subMenu" on:change={handleSelectSub}>
                  {#each subMenu as item}
                    <option
                      value={item.seq}
                      selected={item.seq == $initialData.subSeq}
                      >{item.title}</option
                    >
                  {/each}
                </select>
              </div>
              <div class="box">
                <select name="category" id="category">
                  {#if category}
                    {#each category as item}
                      <option
                        value={item.seq}
                        selected={item.seq == $initialData.categorySeq}
                        >{item.name}</option
                      >
                    {/each}
                  {/if}
                </select>
              </div>
            </div>
          </td>
        </tr>
        <tr>
          <th>대표글</th>
          <td>
              <textarea name="content">{$initialData.content}</textarea>
          </td>
        </tr>
       
         <!-- 프로대만족/월간매거진 메뉴에서만 -->
         {#if ($initialData.subSeq == 47) || ($initialData.mainSeq == 7 && $initialData.category ==22)}
        <tr>
          <th>상세글</th>
          <td>
              <!-- <CKEditor bind:param3={$initialData.param3}  on:change={handleEditorChange}/> -->
              <CKEditor bind:param3={$initialData.param3} on:param3change={handleParam3Change} />

          </td>
        </tr>
        {/if}
        <tr>
          <th>대표이미지</th>
          <td class="btn_td">
            {#if $initialData.filepath}
              <input
                type="button"
                on:click={() => openModal($initialData.filepath)}
                value="보기"
                style="width:50px;"
              />

              <input
                type="button"
                on:click={(event) => ($initialData.filepath = "")}
                value="삭제"
                style="width:50px;"
              />
              <input
                type="hidden"
                name="filepath"
                bind:value={$initialData.filepath}
              />
            {:else}
              <input
                bind:files={uploadFile}
                id="file"
                name="file"
                type="file"
              />
              <input
                type="button"
                on:click={(event) =>
                  (document.getElementById("file").value = "")}
                value="삭제"
                style="width:50px;"
              />
            {/if}
          </td>
        </tr>
        <!-- 대만정보 >> 관광자료 메뉴에서 다운로드 파일 사용 -->
        {#if $initialData.subSeq == 6}
          <tr>
            <th>다운로드용 첨부파일</th>
            <td>
              <div class="file_wrap">
                {#if $initialData.download}
                  <a href={IMG_HOST + $initialData.download} download>
                    <FontAwesomeIcon icon={faImage} /></a
                  >
                  <input
                    type="button"
                    on:click={(event) => ($initialData.download = null)}
                    value="삭제"
                    style="width:50px;"
                  />
                {:else}
                  <input
                    bind:files={downloadFile}
                    id="downloadFile"
                    name="downloadFile"
                    type="file"
                  />
                  <input
                    type="button"
                    on:click={(event) =>
                      (document.getElementById("downloadFile").value = "")}
                    value="삭제"
                    style="width:50px;"
                  />
                {/if}
              </div>
            </td>
          </tr>
        {/if}
        <!-- 대만정보 >> 관련링크 메뉴에서만 -->
        {#if $initialData.subSeq == 17}
          <tr>
            <th>홈페이지</th>
            <td>
              <input
                type="text"
                name="param1"
                bind:value={$initialData.param1}
              />
            </td>
          </tr>
          <tr>
            <th>전화번호</th>
            <td>
              <input
                type="text"
                name="param2"
                bind:value={$initialData.param2}
              />
            </td>
          </tr>
        {/if}
      </tbody>
    </table>
  </form>
  <div class="etc_buttons">
    <button type="button" on:click={submitForm}>수정</button>
    <button><a href="/admin/post">목록</a></button>
  </div>
</div>

{#if selectedImagePath}
  <ImageModal
  imagePath={getReturnValue(selectedImagePath)} 
  on:close={closeModal}
/>
{/if}

<style lang="scss">
  table textarea,
  table select {
    width: 100%;
  }
  table textarea {
    min-height: 250px;
  }
  table .flex_td button {
    min-height: 2.5rem !important;
    margin: 0 0 0 5px;
  }
  table .upload_file {
    position: relative;
  }
  @media (max-width: 480px) {
    table .flex_td {
      width: 100%;
      flex-wrap: wrap;
    }
    table .flex_td button {
      width: calc(50% - 5px);
      margin: 5px 0 0;
      &:last-child {
        margin: 5px 0 0 5px;
      }
    }
  }
  .container {
    display: flex; /* Flex 컨테이너로 설정 */
    justify-content: space-between; /* 요소 사이를 균등한 간격으로 정렬 */
  }
  .box {
    width: 32%;
  }
  .editor {
    overflow: auto;
    height: 500px;
  }
</style>
