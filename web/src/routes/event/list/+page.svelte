<script>
  // @ts-nocheck
  import { onMount } from "svelte";
  import { fetchBoardData } from "$lib/api/board";
  import { selectedCetegorySeq } from "$lib/stores/menu";
  import { env } from "$env/dynamic/public";
  import FooterNav from "../../Footer_Nav.svelte";

  const IMG_HOST = env.PUBLIC_IMG_HOST;

  let data = [];
  let list = [];
  let category = 99; // categorySeq 값

  let navigatepageNums = [];
  let pageSize = 9;
  let pageNum = 0;

  selectedCetegorySeq.subscribe((value) => {
    category = value;
  });

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
</script>

<!-- 메인 컨텐츠 -->
<div class="at-body">
  <div class="at-container">
    <div class="at-content">
      <section class="board-list">
        <div class="list-wrap">
          <form method="post" class="form">
            <div class="list-container">
              {#each list as row, i}
                <div
                  class="list-row {row.category === 19 ? 'close_event' : ''}"
                >
                  <div class="list-item">
                    <a
                      href={"/event/view/" + row.seq}
                      class="ellipsis"
                      title="{row.subject} 바로가기"
                    >
                      <div class="imgframe">
                        <img src={IMG_HOST + row.filepath} alt={row.subject} />
                      </div>
                      <div class="list-content">
                        <p class="list-subject">{row.subject}</p>
                        <div class="list-txt hidden">
                          {row.content}
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              {/each}
            </div>
          </form>
        </div>
      </section>
    </div>
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
  <FooterNav />
</div>

<!-- //메인 컨텐츠 -->

<style lang="scss">
  @import "/src/styles/variables.scss";
  .at-body {
    .at-container {
      margin: 0 auto;
    }
  }

  .list-container {
    &:after {
      content: "";
      display: block;
      clear: both;
    }
    .list-row {
      float: left;
      width: 30%;
      margin: 0 0 5% 5%;
      &:nth-of-type(3n + 1) {
        margin: 0 0 5%;
      }
      .imgframe {
        a {
          width: 100%;
          height: 100%;
          display: block;
        }
        img {
          width: 100%;
          display: block;
        }
      }
      &.close_event {
        .list-item {
          position: relative;
          &:after {
            width: 100%;
            height: 100%;
            content: "";
            display: block;
            position: absolute;
            top: 0;
            left: 0;
            background-color: rgba(0, 0, 0, 0.6);
          }
        }
      }
    }
  }

  @include desktop {
    .list-container {
      .list-row {
        width: 46.74479166666667%;
        margin: 0 0 5vw 6.510416%;
        &:nth-of-type(3n + 1) {
          margin: 0 0 5vw 6.51041%;
        }
        &:nth-of-type(2n + 1) {
          margin: 0 0 5vw;
        }
      }
    }
  }

  @include mobile {
    .list-container {
      .list-row {
        width: 100%;
        margin: 0 0 5vw;
        &:nth-of-type(3n + 1) {
          margin: 0 0 5vw;
        }
        &:nth-of-type(2n + 1) {
          margin: 0 0 5vw;
        }
      }
    }
  }
</style>
