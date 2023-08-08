<script>
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { fetchData } from "$lib/api/fetch";
  import { writable } from "svelte/store";
  import { env } from "$env/dynamic/public";
  import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
  import { faImage } from "@fortawesome/free-solid-svg-icons";
  const seq = $page.params.seq;
  const IMG_HOST = env.PUBLIC_IMG_HOST;
  const BACKEND_HOST = env.PUBLIC_BACKEND_HOST;

  // initialData를 writable 스토어로 생성
  const initialData = writable({
    subject: "",
    regDate: "",
    filepath: "",
    download: "",
    content: "",
    subSeq: 0,
    seq: 0,
    param1: "",
    param2: "",
    param3: "",
    category: 0,
    mainSeq: 0,
  }); // 기본값으로 초기화

  onMount(async () => {
    const data = await fetchData("/api/boardDetail?seq=" + seq, "");
    initialData.set(data);
  });

  /**
   * @param {any} seq
   */
  function handleClick(seq) {
    goto(`/admin/post_modify/${seq}`, { replaceState: false });
  }

  /**
   * @param {string} text
   */
  function replaceNewlinesWithBR(text) {
    return text.replace(/(?:\r\n|\r|\n)/g, "<br>");
  }

  async function downloadFile(fileUrl, nm) {
    try {
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = nm; // 다운로드될 파일의 이름
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
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
  <h2>게시물상세</h2>
</div>

<div class="part">
  <div class="post_detail">
    <h6>{$initialData.subject}</h6>
    <ul class="post_info">
      <li>작성일</li>
      <li class="post_date">{$initialData.regDate}</li>
    </ul>
    <ul class="post_info">
      <li>대표이미지</li>
      <li class="">
        {#if $initialData.filepath}
            <img
              src={getReturnValue($initialData.filepath)}    
              alt="이미지입니다"
            />
        {/if}
      </li>
    </ul>
    <ul class="post_info">
      <li>대표글</li>
      <li class="">
        {@html replaceNewlinesWithBR($initialData.content)}
      </li>
    </ul>
    <!-- 프로대만족/월간매거진 메뉴에서만 -->
    {#if $initialData.subSeq == 47 || ($initialData.mainSeq == 7 && $initialData.category == 22)}
      <ul class="post_info">
        <li>상세글</li>
        <li class="">
          {@html $initialData.param3 ? $initialData.param3 : ""}
        </li>
      </ul>
    {/if}
    <!-- 대만정보 >> 관광자료 메뉴에서만 -->
    {#if $initialData.subSeq == 6}
      <ul class="post_info">
        <li>다운로드용 첨부파일</li>
        <li class="">
          {#if $initialData.download}
            <a
              on:click={() =>
                downloadFile(
                  BACKEND_HOST +
                    "/home/downloadFile?bo_table=" +
                    $initialData.param1 +
                    "&wr_id=" +
                    $initialData.param2 +
                    "&no=" +
                    $initialData.param3,
                  $initialData.download
                )}
              style="cursor: pointer;"
            >
              <FontAwesomeIcon icon={faImage} /></a
            >
          {/if}
        </li>
      </ul>
    {/if}
    <!-- 대만정보 >> 관련링크 메뉴에서만 -->
    {#if $initialData.subSeq == 17}
      <ul class="post_info">
        <li>홈페이지</li>
        <li class="post_date">{$initialData.param1}</li>
      </ul>
      <ul class="post_info">
        <li>전화번호</li>
        <li class="post_date">{$initialData.param2}</li>
      </ul>
    {/if}
  </div>
  <div class="etc_buttons">
    <button on:click={() => handleClick($initialData.seq)}>수정</button>
    <button><a href="/admin/post">목록</a></button>
  </div>
</div>

<style lang="scss">
  .post_detail {
    max-width: 1200px;
    border-bottom: 1px solid #cacaca;
    h6 {
      padding: 0 0 20px;
      font-size: 21px;
    }
  }
  .post_info {
    display: flex;
    border-top: 1px solid #cacaca;
    border-bottom: 1px solid #cacaca;
  }
  .post_info li {
    width: 20%;
    // height: 40px;
    padding: 10px;
    line-height: 40px;
    background: #f4f4f4;
  }
  .post_info li + li {
    width: 80%;
    background: #fff;
  }
  .post_text {
    // min-height: 400px;
    // padding: 3rem 10px;
  }
</style>
