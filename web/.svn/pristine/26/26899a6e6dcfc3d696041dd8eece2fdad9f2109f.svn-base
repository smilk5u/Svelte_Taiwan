<script>
    // @ts-nocheck
    import { onMount } from "svelte";
    import { fetchBoardData } from "$lib/api/board";
    import { selectedMenuSubSeq } from "$lib/stores/menu";
    import { env } from "$env/dynamic/public";

    const IMG_HOST = env.PUBLIC_IMG_HOST;

    let data = [];
    let list = [];
    let subSeq = 0;

    let navigatepageNums = [];
    let pageSize = 6;
    let pageNum = 0;

    selectedMenuSubSeq.subscribe((value) => {
        subSeq = value;
    });

    $: if (subSeq) {
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
</script>
<!-- 메인 컨텐츠 -->
<div class="at-body">
    <div class="at-container">
      <div class="box-wrap">
        {#each list as row, i}
        <div class="box-list">
          <a href="/attractions/view/{row.seq}" class="item_elm" title="{row.subject} 바로가기">
            <div class="img_wrap">
              <img
                src={IMG_HOST + row.filepath}
                alt={row.subject}
              />
            </div>
            <button type="button" class="link">
              <span>MORE VIEW +</span>
            </button>
          </a>
          <h2>{row.subject}</h2>
          <div class="list-details">
            {row.content}
          </div>
        </div>
        {/each}
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
    <!-- Footer 네비게이션 -->
    <div id="footerGnb">
      <div class="img_box">
        <ul>
          <li>
            <a href="/event/all">
              <div class="thumb_img">
                <img src="/img/common/bottom_navi_img1.jpg" alt="이벤트 " />
              </div>
              <div class="txt_elm">
                <strong>이벤트</strong>
                <p>대만을 120% 즐길 수 있는 <br /> 다양한 이벤트</p>
              </div>
              <div class="over_txt">
                <img
                  src="/img/common/botton_navi_over_img1.jpg"
                  alt="당첨 도전하기"
                />
                <span>당첨 도전하기</span>
              </div>
            </a>
          </li>
          <li>
            <a href="/introduction/tourism_board">
              <div class="thumb_img">
                <img
                  src="/img/common/bottom_navi_img2.jpg"
                  alt="대만 관광청 소개"
                />
              </div>
              <div class="txt_elm">
                <strong>대만 관광청 소개</strong>
                <p>대만 관광청에 대한 <br /> 모든 것</p>
              </div>
              <div class="over_txt">
                <img
                  src="/img/common/botton_navi_over_img2.jpg"
                  alt="관광청의 A to Z"
                />
                <span>관광청의 A to Z</span>
              </div>
            </a>
          </li>
          <li>
            <a href="/themeTour/recreation">
              <div class="thumb_img">
                <img src="/img/common/bottom_navi_img3.jpg" alt="테마 여행" />
              </div>
              <div class="txt_elm">
                <strong>테마 여행</strong>
                <p>당신이 즐길 수 있는 <br /> 대만의 모든 테마 여행</p>
              </div>
              <div class="over_txt">
                <img
                  src="/img/common/botton_navi_over_img3.jpg"
                  alt="나와 맞는 여행찾기"
                />
                <span>나와 맞는 여행찾기</span>
              </div>
            </a>
          </li>
          <li>
            <a href="/attractions/all">
              <div class="thumb_img">
                <img src="/img/common/bottom_navi_img4.jpg" alt="대만 명소" />
              </div>
              <div class="txt_elm">
                <strong>대만 명소</strong>
                <p>지금 대만에서 가장 핫한 <br /> 지역별 다양한 명소</p>
              </div>
              <div class="over_txt">
                <img
                  src="/img/common/botton_navi_over_img4.jpg"
                  alt="여긴 꼭 가야해!"
                />
                <span>여긴 꼭 가야해!</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <!-- //Footer 네비게이션 -->
  </div>
  
  <!-- 메인 컨텐츠 -->
  
  <style lang="scss">
    @import "/src/styles/variables.scss";
    .at-body {
      .at-container {
        margin: 0 auto;
      }
    }
    .box-wrap {
      &:after {
        content: "";
        display: block;
        clear: both;
      }
      .box-list {
        width: 47.857142%;
        padding: 0 0 8%;
        float: left;
        &:nth-of-type(even) {
          margin: 0 0 0 4.285714%;
        }
        .item_elm {
          position: relative;
        }
        .img_wrap {
          img {
            width: 100%;
          }
        }
        .link {
          position: absolute;
          display: block;
          right: 0;
          bottom: 0;
          background-color: #ff7200;
          span {
            padding: 10px 25px;
            font-size: 12px;
            display: block;
            color: #fff;
          }
        }
        h2 {
          padding: 20px 0 10px;
          display: block;
          font-size: 25px;
          line-height: 1;
          font-weight: 600;
          text-align: left;
        }
        .list-details {
          margin-top: 10px;
          color: #666;
          font-size: 16px;
          font-weight: $light;
          overflow: hidden;
          text-overflow: ellipsis;
          word-wrap: break-word;
          line-height: 1.5em;
          height: 3em;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
        }
      }
    }
  
    @include mobile {
      .box-wrap {
        .box-list {
          .link {
            span {
              padding: vw(10) vw(25);
              font-size: vw(15);
            }
          }
          h2 {
            padding: vw(15) 0 vw(10);
            font-size: vw(25);
          }
          .list-details {
            font-size: vw(18);
          }
        }
      }
    }
  </style>
  