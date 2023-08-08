<script>
  import { onMount } from "svelte";
  import { page } from '$app/stores';
  import { fetchData } from "$lib/api/fetch";
  import {getReturnValue} from "$lib/common";
  const seq = $page.params.seq;

  /**
     * @type {any}
     */
  let view =[];

    onMount(async () => {
      const data = await fetchData("/home/boardDetail?seq="+seq,'');
      view = data;
    });
    
</script>
<div class="at-container">
  <div class="at-content">
    <div class="sub_box">
      <div class="detail">
        <div class="rt_detail">
          <strong>{view.subject} </strong>
          {#if view.filepath}
          <div class="view-img">
            <a
              href={getReturnValue(view.filepath)}
              target="_blank"
              ><img
                src={getReturnValue(view.filepath)}
                alt={view.subject}
              /></a
            >
          </div>
          {/if}
          <div class="txt_wrap">
            {@html view.contentHtml}
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="to_btn_wrap">
    <button type="button">다음</button>
    <button type="button">이전</button>
    <button type="button">목록</button>
  </div>
</div>

<style lang="scss">
  @import "/src/styles/variables.scss";
  .sub_box {
    margin-top: 0;
  }
</style>
