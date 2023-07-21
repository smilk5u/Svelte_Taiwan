<script>
    import { onMount } from "svelte";
    import { page } from '$app/stores';
    import { fetchData } from "$lib/api/fetch";
    import { env } from "$env/dynamic/public";
  
    const seq = $page.params.seq;
    const IMG_HOST = env.PUBLIC_IMG_HOST;
  
    /**
       * @type {any}
       */
    let view =[];
  
      onMount(async () => {
        const data = await fetchData("/home/boardDetail?seq="+seq,'');
        view = data;
      });
      
</script>
<!-- 메인 컨텐츠 -->
<div class="at-body">
    <div class="at-container">
      <div class="view-wrap">
        <div class="magazine_view">
          <div class="main">
            <div class="image">
              <img src={IMG_HOST + view.filepath} alt="" />
            </div>
            <div class="content">
              <h3>{view.subject}</h3>
              {@html view.contentHtml}
            </div>
          </div>
          <div class="list">
            {@html view.param3}
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- 메인 컨텐츠 -->
  
  <style lang="scss">
    @import "/src/styles/variables.scss";
  
    .list-wrap .list-container {
      overflow: hidden;
      margin-right: -15px;
      margin-bottom: 0px;
    }
    .list-wrap .list-row {
      float: left;
      width: 100%;
    }
    .list-wrap .list-item {
      margin-right: 15px;
      margin-bottom: 30px;
    }
  </style>
  