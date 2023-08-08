<script>
  // @ts-nocheck

  import { onMount } from "svelte";
  import { fetchBoardData } from "$lib/api/board";
  import { selectedMenuSubSeq, selectedCetegorySeq } from "$lib/stores/menu";
  import { env } from "$env/dynamic/public";
  import FooterNav from "../../Footer_Nav.svelte";

  const IMG_HOST = env.PUBLIC_IMG_HOST;
  const BACKEND_HOST = env.PUBLIC_BACKEND_HOST;

  let data = [];
  let list = [];
  let subSeq = 0;
  let category = 99; // categorySeq 값

  let navigatepageNums = [];
  let pageSize = 8;
  let pageNum = 0;

  selectedMenuSubSeq.subscribe((value) => {
    subSeq = value;
  });
  selectedCetegorySeq.subscribe((value) => {
    category = value;
  });

  $: if (subSeq) {
    page_(1);
  }
  $: if (category) {
    page_(1);
  }

  onMount(async () => {
    page_(1);
  });

  async function page_(idx) {
    pageNum = idx;
    let pageval = { pageSize, pageNum };
    data = await fetchBoardData(pageval);
    list = data.list;
    navigatepageNums = data.navigatepageNums;

    window.scrollTo({ top: 0, behavior: "smooth" });
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

<!-- 메인 컨텐츠 -->
<div class="at-body">
  <div class="at-container">
    <ul class="page_list">
      {#each list as row, i}
        <li>
          <div class="lt">
            <img src={getReturnValue(row.filepath)} alt={row.subject} />
          </div>
          <div class="rt">
            <h3>{row.subject}</h3>
            <!-- {row.content} -->
            <!-- <p>{@html row.contentHtml.replace(/<[^>]*>?/g, "")}</p> -->
            <!-- {console.log(row.contentHtml.replace(/<[^
              >]*>?/g, ""))} -->
            <p>{@html row.contentHtml}</p>
          </div>
        </li>
      {/each}
    </ul>
  </div>
  {#if list.length > 0}
    <nav class="noselect">
      <ul class="pagination justify-content-center">
        <li class="page-item {data.hasPreviousPage ? '' : 'disabled'}">
          <a
            class="page-link"
            on:click={() => page_(data.prePage)}
            aria-label="Previous"
          >
            <span aria-hidden="true">이전</span>
          </a>
        </li>
        {#each navigatepageNums as pn}
          <li class="page-item {pn == data.pageNum ? 'active' : ''}">
            <a class="page-link" on:click={() => page_(pn)}>{pn}</a>
          </li>
        {/each}
        <li class="page-item {data.hasNextPage ? '' : 'disabled'}">
          <a
            class="page-link"
            on:click={() => page_(data.nextPage)}
            aria-label="Next"
          >
            <span aria-hidden="true">다음</span>
          </a>
        </li>
      </ul>
    </nav>
  {/if}
  <FooterNav/>
</div>

<!-- //메인 컨텐츠 -->