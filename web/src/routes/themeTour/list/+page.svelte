<script>
  // @ts-nocheck

  import { onMount } from "svelte";
  import { fetchBoardData } from "$lib/api/board";
  import { selectedMenuSubSeq, selectedCetegorySeq } from "$lib/stores/menu";
  import { env } from "$env/dynamic/public";

  const IMG_HOST = env.PUBLIC_IMG_HOST;

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
    console.log(11);
    page_(1);
  }
  $: if (category) {
    console.log(22);
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
    <div class="list-wrap">
      <ul class="page_list page_list_container">
        {#each list as row, i}
          <li>
            <div class="lt">
              <img src={IMG_HOST + row.filepath} alt={row.subject} />
            </div>
            <div class="rt">
              <h3>{row.subject}</h3>
              <!-- {row.content} -->

              <p>{@html row.contentHtml.replace(/<[^>]*>?/g, "")}</p>
              <!-- {console.log(row.contentHtml.replace(/<[^>]*>?/g, ""))} -->
            </div>
          </li>
        {/each}
      </ul>
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
          <a href="/event/all" title="이벤트 바로가기">
            <div class="thumb_img">
              <img src="/img/common/bottom_navi_img1.jpg" alt="이벤트" />
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
          <a
            href="/introduction/tourism_board"
            title="대만 관광청 소개 바로가기"
          >
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
          <a href="/themeTour/recreation" title="테마 여행 바로가기">
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
          <a href="/attractions/all" title="대만명소 바로가기">
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

<!-- //메인 컨텐츠 -->

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
  .page_list_container li .lt img {
    max-height: 477px;
    width: 100%;
  }
  .page_list_container li .rt span {
    display: inline-block;
  }
  @media (min-width: 1025px) {
    .page_list li .rt {
      padding: 50px 30px;
    }
  }
</style>
