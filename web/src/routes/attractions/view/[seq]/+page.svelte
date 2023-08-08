<script>
  import { onMount } from "svelte";
  import { page } from '$app/stores';
  import { fetchData } from "$lib/api/fetch";
  import { env } from "$env/dynamic/public";
  import FooterNav from "../../../Footer_Nav.svelte";

  const seq = $page.params.seq;
  const IMG_HOST = env.PUBLIC_IMG_HOST;
  const BACKEND_HOST = env.PUBLIC_BACKEND_HOST;

  /**
     * @type {any}
     */
  let view =[];

    onMount(async () => {
      const data = await fetchData("/home/boardDetail?seq="+seq,'');
      view = data;
    });

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
 <!-- 메인 컨텐츠 -->
<div class="at-body sub-container">
  <div class="at-container">
    <div class="view-wrap">
      <div class="sub_box">
        <div class="detail">
          <div class="lt_detail">
            <div class="view-img">
              {#if view.seq > 2040}
              <a
                href={BACKEND_HOST + view.filepath}
                target="_blank"
                class="view_image"
                ><img
                  itemprop="image"
                  src={BACKEND_HOST + view.filepath}
                  alt={view.subject}
                  class="img-tag"
                /></a
              >
              {:else}
              <a
                href={IMG_HOST + view.filepath}
                target="_blank"
                class="view_image"
                ><img
                  itemprop="image"
                  src={IMG_HOST + view.filepath}
                  alt={view.subject}
                  class="img-tag"
                /></a
              >
              {/if}
              
            </div>
          </div>
          <div class="rt_detail">
            <h1>{view.subject}</h1>
            <div itemprop="description" class="view-content">
              {view.content}
            </div>
          </div>
        </div>
        {@html view.param3 ? view.param3 : ''}
      </div>                                           
    </div>
    <div class="to_btn_wrap">
      <button type="button">다음</button>
      <button type="button">이전</button>
      <button type="button">목록</button>
    </div>
  </div>
  <FooterNav/>
</div>
<!-- //메인 컨텐츠 -->

<style lang="scss">
  @import "/src/styles/variables.scss";
  .at-container {
    margin: 0 auto 100px;
    @include mobile {
      margin: 0 auto 10vw;
    }
  }
</style>
