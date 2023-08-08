<script>
// @ts-nocheck

  import { load } from "./+page.js";
  import { onMount } from "svelte";
  import { fetchData, fetchDataFile } from "$lib/api/fetch";

  import { goto } from "$app/navigation";
  import CKEditor from "../../components/CKEditor.svelte";
  import { user } from "$lib/stores/user";

  let content = "";
  let download = false;
  let param3="";
  let uploadFile;
  let downloadFile;

  let mainMenu = [];
  let subMenu = [];
  let category = [];
  let editor = false;

  const userInfo = $user;

  onMount(async () => {
    const { props } = await load();
    mainMenu = props.mainMenu;
    subMenu = props.subMenu;
    category = props.category;
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
    const response = await fetchData(`/api/subMenuList?mainSeq=${mainSeq}&combo=1`);
    subMenu = response;
    if (subMenu.length > 0) {
      delayForceChangeEvent("subMenu");
    }
  }

  async function setCategory(mainSeq, subSeq) {
    const response = await fetchData(
      `/api/categoryList?mainSeq=${mainSeq}&subSeq=${subSeq}`
    );
    category = response;
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
      formData.append("file", uploadFile[0]);
    }
    if (downloadFile) {
      formData.append("downloadFile", downloadFile[0]);
    }
     formData.append("param3", param3);
    formData.append("writer", userInfo.userId);

    var data = await fetchDataFile("/api/saveBoard", formData);

    if (data > 0) {
      alert("등록되었습니다");
      goto("/admin/post", { replaceState: false });
    }
  }

  $: {
    if(selectedOptionSub){
       //프로대만족, 월간매거진은 ckeditor로
      if ((selectedOptionSub == 47) || (selectedOptionSub == 38)) {
        editor = true;
      }else{
        editor = false;
      }

      if(selectedOptionSub == 6){
        download = true;
      }else{
        download = false;
      }
    }
  } 
  
  
</script>

<div class="page_title">
  <h2>게시물 등록</h2>
</div>
<div class="part">
  <form name="frm" id="frm">
    <table class="add_table">
      <caption> 게시물 등록 </caption>
      <colgroup>
        <col width="250px" />
        <col width="*%" />
      </colgroup>
      <tbody>
        <tr>
          <th>제목</th>
          <td>
            <input type="text" name="subject" />
          </td>
        </tr>
        <tr>
          <th>분류</th>
          <td>
            <div class="container">
              <div class="box">
                <select name="mainSeq" id="mainMenu" on:change={handleSelect}>
                  {#each mainMenu as item, index}
                    <option value={item.seq}>{item.name}</option>
                  {/each}
                </select>
              </div>
              <div class="box">
                <select name="subSeq" id="subMenu" on:change={handleSelectSub}>
                  {#each subMenu as item, index}
                    <option value={item.seq}>{item.title}</option>
                  {/each}
                </select>
              </div>
              <div class="box">
                <select name="category" id="category">
                  {#if category}
                    {#each category as item, index}
                      <option value={item.seq}>{item.name}</option>
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
              <textarea name="content" />
          </td>
        </tr>
        {#if editor}
        <tr>
          <th>상세글</th>
          <td>
              <CKEditor bind:param3 />
          </td>
        </tr>
        {/if}
        <tr>
          <th>대표이미지</th>
          <td class="upload_file">
            <div class="flex_td">
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
            </div>
          </td>
        </tr>
        <!-- 대만정보 >> 관광자료 메뉴에서만 -->
        {#if download}
        <tr>
          <th>다운로드용 첨부파일</th>
          <td class="upload_file">
            <div class="flex_td">
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
            </div>
          </td>
        </tr>
        {/if}
      </tbody>
    </table>
  </form>
  <ul class="etc_buttons register_list">
    <li><button type="button" on:click={submitForm}>등록</button></li>
    <li><button><a href="/admin/post">목록</a></button></li>
  </ul>
</div>

<style lang="scss">
  table textarea,
  table select {
    width: 100%;
  }
  table textarea {
    min-height: 400px;
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
</style>
