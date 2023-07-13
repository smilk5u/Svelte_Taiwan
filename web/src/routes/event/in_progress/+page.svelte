<div class="page">
  <h1>이벤트</h1>
  <h2>다양한 이벤트를 확인하여 참여해보세요!</h2>
</div>

<div class="at-container sub-container">
  <div class="at-content">
    <section class="board-list">
      <ul class="tab tabs">
        <li>
          <a href="/event/all"> 전체보기 </a>
        </li>
        <li class="active">
          <a href="/event/in_progress"> 진행중 이벤트 </a>
        </li>
        <li>
          <a href="/event/end"> 종료된 이벤트 </a>
        </li>
      </ul>
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
            <div class="list-row">
              <div class="list-item">
                <div class="imgframe">
                  <div class="img-wrap">
                    <div class="img-item">
                      <a
                        href="https://www.taiwantour.or.kr/bbs/board.php?bo_table=m07_01&amp;wr_id=41"
                      >
                        <img
                          src="https://www.taiwantour.or.kr/data/file/m07_01/thumb-2887714919_DdzbIF1Z_f855f482bfd7ff99d7589a83090a3b1deac8d613_420x280.jpg"
                          alt=""
                        />
                      </a>
                    </div>
                  </div>
                </div>
                <div class="list-content" style="position:relative;">
                  <div class="list-subject">
                    <a
                      href="https://www.taiwantour.or.kr/bbs/board.php?bo_table=m07_01&amp;wr_id=41"
                    >
                      소원 댓글 이벤트
                    </a>
                  </div>
                  <div class="list-txt hidden">
                    #경품이벤트 산타오숑이에게 소원을 말해보숑~✨ 오숑이가 소원
                    대신 아주 푸짐한 경품을 선물로 줄게✨ ✔이벤트 기간
                    2021.12.20~2022.01.21 ✔이벤트 참여 방법 대만관광청 공식
                    페이지를 팔로우하고 이벤트 게시물에 댓글 남기기 ✔이벤트 경품
                    1)갤럭시 버즈 프로(15만원 상당)1개 *1명 2)신세계 상품권
                    1만원권 *10명 3)스타벅스 카페아메리카노 Tall 1잔*15명
                    ✔당첨자 발표 2022.01.25(월)
                    인스타그램참여링크:대만족대만여행(@taiwantour_kr)•Instagram페이스북참여링크:대만족대만여행-게시물|
                    Facebook 많은 참여 부탁해~~~~❤❤❤ #이벤트
                    #이벤트경품#빙고이벤트#명소소개#크리스마스 #크리스마스이벤트
                    #화이트크리스마스 #소원 #소원이벤트
                    #추천이벤트#이벤트추천#태그이벤트#이벤트상품#백화점상품권
                    #갤럭시버즈 #갤럭시버즈프로 #팔로워이벤트#
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

<style lang="scss">
  @import "/src/styles/variables.scss";
  .hidden {
    display: none !important;
    visibility: hidden !important;
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
      margin: 0 0 100px 5%;
      &:nth-of-type(3n + 1) {
        margin: 0 0 100px;
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
        .imgframe a {
          width: 100%;
          height: 100%;
          display: block;
        }
      }
    }
  }
</style>
