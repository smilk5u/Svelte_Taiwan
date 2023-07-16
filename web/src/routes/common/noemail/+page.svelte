<!-- 서브페이지 공통 -->
<div class="sub_visual">
  <div class="sub_cate">
    <div class="ct_cate">
      <a href="/themeTour/recreation" title="테마여행 바로가기">
        <strong>이메일 수집 거부</strong>
      </a>
    </div>
  </div>
</div>
<!-- //서브페이지 공통 -->

<!-- 메인 컨텐츠 -->
<div class="at-body">
  <div class="at-container">
    <div class="txt_wrap">
      <p>
        본 사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의
        기술적 장치를 이용하여 무단으로 수집 되는 것을 거부합니다.
      </p>
      <p>
        이를 위반시 <b>「정보통신망 이용촉진 및 정보보호 등에 관한 법률」</b>에
        의해 형사처벌됨을 유념하시기 바랍니다.
      </p>
    </div>
  </div>
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
  .at-container {
    display: flex;
    align-items: center;
    justify-content: center;
    .txt_wrap {
      padding: 100px 0 50px;
      text-align: center;
      p {
        font-size: 17px;
        font-family: $NotoSansKR;
        line-height: 30px;
        color: rgba(0, 0, 0, 0.9);
        b {
          font-size: 17px;
          font-family: $NotoSansKR;
          color: rgba(0, 0, 0, 1);
        }
      }
    }
    @include mobile {
      /* height: vw(200); */
      .txt_wrap {
        padding: vw(180) 0 vw(80);
        p {
          font-size: vw(25);
          line-height: vw(38);
          b {
            font-size: vw(25);
          }
        }
      }
    }
  }
</style>
