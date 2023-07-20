
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
        <div class="sub_box">
          <div class="" />
          <div class="detail">
            <div class="lt_detail">
              <div class="view-img">
                <a
                  href={IMG_HOST + view.filepath}
                  target="_blank"
                  class="view_image"
                  ><img
                    itemprop="image"
                    src={IMG_HOST + view.filepath}
                    alt=""
                    class="img-tag"
                  /></a
                >
              </div>
            </div>
            <div class="rt_detail">
              <h1>{view.subject}</h1>
              <div itemprop="description" class="view-content">
                {@html view.contentHtml}
              </div>
            </div>
          </div>
        </div>
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
  </style>
  