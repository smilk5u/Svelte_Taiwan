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

  // initialData를 writable 스토어로 생성
  const initialData = writable({
    subject: "",
    regDate: "",
    filepath: "",
    download: "",
    content: "",
    seq: 0,
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
          {#if $initialData.seq > 777}
            <img src={`${$initialData.filepath}`} alt="이미지입니다" />
          {:else}
            <img src={IMG_HOST + $initialData.filepath} alt="이미지입니다" />
          {/if}
        {/if}
      </li>
    </ul>
    <div class="post_text">
      {@html $initialData.content}
    </div>
    <ul class="post_info">
      <li>다운로드용 첨부파일</li>
      <li class="">
        {#if $initialData.download}
          {#if $initialData.seq > 777}
            <a href={$initialData.download} download>
              <FontAwesomeIcon icon={faImage} /></a
            >
          {:else}
            <a href={IMG_HOST + $initialData.download} download>
              <FontAwesomeIcon icon={faImage} /></a
            >
          {/if}
        {/if}
      </li>
    </ul>
  </div>
  <div class="etc_buttons">
    <button on:click={() => handleClick($initialData.seq)}>수정</button>
    <button><a href="/admin/post">목록</a></button>
  </div>
</div>

<style lang="scss">
  .post_detail {
    max-width: 900px;
    border-bottom: 1px solid #cacaca;
    h6 {
      padding: 20px 10px;
      font-size: 1.1rem;
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
