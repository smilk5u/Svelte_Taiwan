<script>
  // @ts-nocheck

  import { onMount } from "svelte";
  import { fetchBoardData } from "$lib/api/board";
  import { selectedCetegorySeq } from "$lib/stores/menu";
  import { env } from "$env/dynamic/public";

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
  }

  async function downloadFile(fileUrl) {
    try {
      const response = await fetch(fileUrl);
      const blob = await response.blob();
      const url = URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.download = "file"; // 다운로드될 파일의 이름
      link.click();
      URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  }
</script>

<!-- 메인 컨텐츠 -->
<div class="at-container list-wrap">
  {#each list as row, i}
    <div class="list-row">
      <div class="list-item">
        <div class="img-tack">
          <a
            href="/"
            title={row.subject}
            on:click={() => downloadFile(IMG_HOST + row.filepath)}
          >
            <img src="/img/info/ico_download.png" alt="여행 가이드 1" />
            <span>다운로드</span>
          </a>
        </div>
        <div class="img-item">
          <img
            src={IMG_HOST + row.filepath}
            alt={row.subject}
            style="height:100%;"
          />
        </div>
        <strong>{row.subject}</strong>
      </div>
    </div>
  {/each}
</div>
<!-- <div class="at-container list-wrap">
    {#each list as row, i}
        <div class="list-row">
            <div class="list-item">
                <div class="imgframe">
                    <div class="img-wrap">
                        <div class="img-tack">
                            <a
                                href="/"
                                on:click={() =>
                                    downloadFile(IMG_HOST + row.filepath)}
                            >
                                <img
                                    src="/img/info/ico_download.png"
                                    alt="여행 가이드 1"
                                />
                                <span>다운로드</span>
                            </a>
                        </div>
                        <div class="img-item">
                            <img
                                src={IMG_HOST + row.filepath}
                                alt=""
                                style="height:100%;"
                            />
                        </div>
                    </div>
                </div>
                <h2>{row.subject}</h2>
            </div>
        </div>
    {/each}
</div> -->

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

<!-- //메인 컨텐츠 -->

<style lang="scss">
  @import "/src/styles/variables.scss";
  .list-wrap {
    display: flex;
    flex-wrap: wrap;
    align-content: space-between;
    gap: 4.166666%;
  }
  .list-row {
    position: relative;
    width: 30.55555%;
    margin:0 0 50px;
    .list-item {
      border-radius: 0;
      box-shadow: none;
      .img-tack {
        position: absolute;
        background: #ff7200;
        z-index: 2;
        left: 0px;
        top: 0px;
        width: 60px;
        height: 60px;
        text-align: center;
        color: #fff;
        border-radius: 5px;
        a span {
          display: block;
          color: #fff;
          font-size: 14px;
        }
      }
      .img-item {
        overflow: hidden;
        padding: 0 0 100%;
        height: 0;
        overflow: hidden;
        position: relative;
        img {
          position: absolute;
          left: 50%;
          transform: translate(-50%, 0);
        }
      }
      strong {
        display: block;
        font-weight: $medium;
        font-size: 20px;
        background-color: #eee;
        padding: 20px;
        display: block;
          text-overflow: ellipsis;
          white-space: nowrap;
          word-wrap: normal;
          overflow: hidden;
      }
    }
  }
  @include mobile {
    .list-wrap {
      gap: 4.36046%;
   }
   .list-row {      
      width: 47.81976%;
      .list-item {
        .img-tack {
          width: vw(70);
          height: vw(70);
          border-radius: vw(5);
          a span {
            font-size: vw(10);
          }
        }
        .img-item {
          padding: 0 0 120%;
        }
        strong {
          font-size: vw(23);
          padding: vw(20);          
        }
      }
    }
  }
</style>
