
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
<div class="at-body">
    <div class="at-container">
      <div class="view-wrap">
        <div class="sub_box">
          <div class="" />
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
                    alt=""
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
                    alt=""
                    class="img-tag"
                  /></a
                >
                {/if}
                
              </div>
            </div>
            <div class="rt_detail">
              <h1>{view.subject}</h1>
              <div itemprop="description" class="view-content">
                {@html view.contentHtml}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <FooterNav/>  
  </div>
  <!-- //메인 컨텐츠 -->
  <style lang="scss">
    @import "/src/styles/variables.scss";
  </style>
  