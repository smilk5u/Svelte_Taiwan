<script>
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import { fetchData } from "$lib/api/fetch";
  import { env } from "$env/dynamic/public";

  const seq = $page.params.seq;
  const IMG_HOST = env.PUBLIC_IMG_HOST;

  /**
   * @type {any}
   */
   let view = {
    content: "", // content를 빈 문자열로 초기화합니다.
    param3:""
  };

  onMount(async () => {
    const data = await fetchData("/home/boardDetail?seq=" + seq, "");
    view = data;
  });

  /**
     * @param {string} text
     */
  function replaceNewlinesWithBR(text) {
    return text.replace(/(?:\r\n|\r|\n)/g, '<br>');
  }
  
</script>

<!-- 메인 컨텐츠 -->
<div class="at-container">
  <div class="view-wrap">
    <div class="magazine_view">
      <div class="main">
        <div class="image">
          <img src={IMG_HOST + view.filepath} alt={view.subject} />
        </div>
        <div class="content">
          <h3>{view.subject}</h3>
          <p>
            {@html replaceNewlinesWithBR(view.content)}
          </p>
        </div>
      </div>
      <div class="list">
          {@html view.param3 ? view.param3 : ''}
      </div>
    </div>
  </div>  
  <div class="to_btn_wrap">
    <button type="button">다음</button>
    <button type="button">이전</button>
    <button type="button">목록</button>
  </div>
</div>
<!-- 메인 컨텐츠 -->
