<!-- 서브페이지 공통 -->
<div class="sub_visual event">
  <div class="sub_cate">
    <div class="lt_cate">
      <a href="/introduction/tourism_board" class="on">
        <img src="/img/sub_lt_btn.png" />
        관광청 소개
      </a>
    </div>
    <div class="ct_cate">
      <a class="on">
        <strong>이벤트</strong>
        <p>대만을 120% 즐길 수 있는 다양한 이벤트를 확인하고 참여해보세요!</p>
      </a>
    </div>
    <div class="rt_cate">
      <a href="/event/all" class="on">
        <img src="/img/sub_rt_btn.png" />
        이벤트
      </a>
    </div>
  </div>
</div>
<div class="sub_menu">
  <ul>
    <li>
      <a href="/event/all">전체</a>
    </li>
    <li class="on">
      <a href="/event/in_progress">진행중</a>
    </li>
    <li>
      <a href="/event/end">종료</a>
    </li>
  </ul>
</div>
<!-- //서브페이지 공통 -->

<!-- 메인 컨텐츠 -->
<div class="at-container sub-container">
  <div class="page">
    <h2>대만족 이벤트를 소개합니다</h2>
  </div>
  <div class="at-content">
    <section class="board-list">
      <div class="list-wrap">
        <form name="fboardlist" id="fboardlist" method="post" class="form">
          <div class="list-container">
            <div class="list-row">
              <div class="list-item">
                <div class="imgframe">
                  <a href="/">
                    <img
                      src="https://www.taiwantour.or.kr/data/file/m07_01/thumb-2890328391_jZeu0lDC_678aa0fa8eeeb7d244922faa935a3202f7bad97b_420x280.png"
                      alt=""
                    />
                  </a>
                </div>
                <div class="list-content" style="position:relative;">
                  <div class="list-subject">
                    <a
                      href="https://www.taiwantour.or.kr/bbs/board.php?bo_table=m07_01&amp;wr_id=44"
                      class="ellipsis"
                    >
                      서울 속 작은 타이완 이벤트
                    </a>
                  </div>
                  <div class="list-txt hidden">
                    오숑을 사랑하는 여러분~오숑이 또 서울에 찾아가숑❗️서울 속
                    작은 타이완 Little Taiwan in Seoul* 일시: 6월 17일(토)
                    PM1:00~5:30* 장소: 서울 합정 L.A.D(라드)(서울 마포구
                    잔다리로3안길 23, 합정역 3번출구 450m)무료 입장이숑!* 행사
                    내용:모두가 즐길 수 있는 피크닉 테마로 마련했고작은 밴드
                    공연과 멋진 칵테일쇼도 준비했숑그리고 맛있는 타이완 푸드
                    절대 놓칠 수 없겠지?트랜디한 DIY체험과 VR 자전거 체험관광지,
                    호텔 숙박 등 다양한 여행 정보도 얻어가숑어때, 너무 너무
                    궁금하고 놀러 오고 싶숑?행사 정보 추후 더 공개할테니 계속
                    나를 주목해보숑!
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  </div>
</div>

<!-- //메인 컨텐츠 -->

<style lang="scss">
  @import "/src/styles/variables.scss";
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

  @include mobile {
    .list-container {
      .list-row {
        width: 46.74479166666667%;
        margin: 0 0 5vw 6.510416666666667%;
        &:nth-of-type(3n + 1) {
          margin: 0 0 5vw 6.510416666666667%;
        }
        &:nth-of-type(2n + 1) {
          margin: 0 0 5vw;
        }
      }
    }
  }
</style>
