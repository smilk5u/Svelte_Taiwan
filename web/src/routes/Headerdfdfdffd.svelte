<script>
  import { onMount } from "svelte";

  /* Gnb Open : 메뉴 열기 */
  const GnbOpen = () => {
    // document.querySelector("header")?.classList.add("open_menu");
    gsap.to(".back", 0.2, {
      "max-width": "100%",
      height: "600px",
      "border-radius": "0 0 0 0",
      ease: Power2.easeOut,
    });
    document.querySelectorAll(".gnb_menu").forEach((element) => {
      // element.style.display = "block";
    });
    gsap.to("header", 0.2, {
      // "max-width": "100%",             
      height: "600px", 
      // "border-radius": "0 0 0 0",
      ease: Power2.easeOut,
    });
    document.querySelectorAll(".gnb_menu").forEach((element) => {
      // element.style.display = "block";
    });
  };

  /* Gnb Close : 메뉴 닫기 */
  const GnbClose = () => {
    // document.querySelector("header")?.classList.remove("open_menu");
    /* 검색창이 열리지 않았을 때 조건문 */
    if (!document.querySelector("header")?.classList.contains("search_open")) {
      gsap.to(".back", 0.2, {
        "max-width": "1800px",
        height: "100px",
        "border-radius": "0 0 30px 30px",
        ease: Power2.easeOut,
      });
      gsap.to("header", 0.2, {
        // "max-width": "1800px",
        height: "auto",
        // "border-radius": "0 0 30px 30px",
        ease: Power2.easeOut,
      });
      document.querySelectorAll(".gnb_menu").forEach((element) => {
        // element.style.display = "none";
      });
    }
  };

  /* 검색 열기 */
  const serachOpen = () => {
    document.querySelector("header")?.classList.add("search_open");
    gsap.to(".back", 0.2, {
      "max-width": "100%",
      height: "500px",
      "border-radius": "0 0 0 0",
      ease: Power2.easeOut,
    });
    gsap.to("header", 0.2, {
      // "max-width": "100%",
      height: "500px",
      ease: Power2.easeOut,
    });       
  };
  /* 검색 닫기 */
  const serachClose = () => {
    document.querySelector("header")?.classList.remove("search_open");
    gsap.to(".back", 0.2, {
      "max-width": "1800px",
      height: "100px",    
      "border-radius": "0 0 30px 30px",
      ease: Power2.easeOut,
    });  
    gsap.to("header", 0.2, {
      height: "auto",
      ease: Power2.easeOut,
    });  
  };

  onMount(() => {
    const gnbList = document.querySelectorAll("#gnb > li");
    /* 메뉴 버튼 */
    gnbList.forEach((item) => {
      item.addEventListener("mouseenter", GnbOpen);
      let itemChildren = item.children[0];
      itemChildren.addEventListener("focus", GnbOpen);
    });

    /* 메뉴서브링크 클릭시 포커스 오픈 */
    document.querySelectorAll(".a_link").forEach((item) => {
      item.addEventListener("focus", () => {
        GnbOpen();
        document.querySelector("header")?.classList.remove("search_open");
        gsap.to("headeer", 0.2, {
          height: "600px",
        });
      });
    });

    /* 검색버튼 포커스 시 닫기 */
    document.querySelector(".search_btn").addEventListener("focus", GnbClose);

    /* header 마우스 리브시 이벤트 */
    document
      .querySelector(".header_contain")
      .addEventListener("mouseleave", GnbClose);

    /* 검색 열기 */
    document.querySelector(".search_btn").addEventListener("click", serachOpen);

    /* 검색 닫기 */
    document
      .querySelector(".close_search_btn")
      .addEventListener("click", serachClose);
  });
</script>

<!-- pc header -->
<header>
  <div class="back"></div>
  <div class="header_contain">
    <div class="gnb_wrap">
      <h1 id="logo">
        <a href="/main" title="대만관광청 메인 바로가기">
          <img src="/img/layout/logo.png" alt="대만관광청 로고" />
        </a>
      </h1>
      <ul id="gnb">
        <li>
          <button type="button">대만 정보</button>
          <ul class="gnb_menu">
            <li>
              <a class="a_link" href="/info/immigration_precautions"
                >출입국 주의사항</a
              >
            </li>
            <li><a class="a_link" href="/info/introduction">대만소개</a></li>
            <li><a class="a_link" href="/info/festival">문화/역사</a></li>
            <li><a class="a_link" href="/info/weather">대만의 날씨</a></li>
            <li><a class="a_link" href="/info/tourist_info">관광자료</a></li>
            <li><a class="a_link" href="/info/iPASS">대만 교통수단</a></li>
            <li>
              <a
                class="a_link"
                href="https://www.freepam.co.kr/shop/index.php"
                target="_blank">가이드북</a
              >
            </li>
            <li><a class="a_link" href="/info/related_links">관련 링크</a></li>
            <li><a class="a_link" href="/info/working_holiday">워홀</a></li>
            <li>
              <a
                class="a_link"
                href="https://issuu.com/nihaotaiwan2015"
                target="_blank">계간지</a
              >
            </li>
          </ul>
          <div class="minju" />
        </li>
        <li>
          <button type="button">이벤트</button>
          <ul class="gnb_menu">
            <li><a class="a_link" href="/event/all">전체</a></li>
            <li><a class="a_link" href="/event/in_progress">진행중</a></li>
            <li><a class="a_link" href="/event/end">종료</a></li>
          </ul>
        </li>
        <li>
          <button type="button">테마여행</button>
          <ul class="gnb_menu">
            <li><a class="a_link" href="/themeTour/recreation">휴양</a></li>
            <li><a class="a_link" href="/themeTour/activity">액티비티</a></li>
            <li><a class="a_link" href="/themeTour/diners">식객</a></li>
            <li><a class="a_link" href="/themeTour/picture">사진</a></li>
            <li><a class="a_link" href="/themeTour/history">역사</a></li>
            <li><a class="a_link" href="/themeTour/shopping">쇼핑</a></li>
            <li><a class="a_link" href="/themeTour/love">러브</a></li>
            <li><a class="a_link" href="/themeTour/nature">자연</a></li>
            <li><a class="a_link" href="/themeTour/culture">문화</a></li>
            <li><a class="a_link" href="/themeTour/night_market">야시장</a></li>
          </ul>
        </li>
        <li>
          <button type="button">대만 명소</button>
          <ul class="gnb_menu">
            <li><a class="a_link" href="/attractions/all">전체</a></li>
            <li><a class="a_link" href="/attractions/northern">북부</a></li>
            <li><a class="a_link" href="/attractions/midwest">중서부</a></li>
            <li><a class="a_link" href="/attractions/eastern">동부</a></li>
            <li><a class="a_link" href="/attractions/south">남부</a></li>
            <li><a class="a_link" href="/attractions/island">섬</a></li>
          </ul>
        </li>
        <li>
          <button type="button">대만 골프</button>
          <ul class="gnb_menu">
            <li><a class="a_link" href="/golf">대만 골프</a></li>
          </ul>
        </li>
        <li>
          <button type="button">프로대만족</button>
          <ul class="gnb_menu">
            <li><a class="a_link" href="/satisfact/all">프로대만족 전체</a></li>
            <li>
              <a class="a_link" href="/satisfact/magazine">월간 매거진</a>
            </li>
            <li>
              <a class="a_link" href="/satisfact/satisfact">프로대만족</a>
            </li>
            <li>
              <a class="a_link" href="/satisfact/travel_tips">여행 Tips</a>
            </li>
          </ul>
        </li>
        <li>
          <button type="button">관광청 소개</button>
          <ul class="gnb_menu">
            <li>
              <a class="a_link" href="/introduction/tourism_board"
                >관광청 소개</a
              >
            </li>
            <li>
              <a class="a_link" href="/introduction/director_general"
                >국장소개</a
              >
            </li>
            <li><a class="a_link" href="/introduction/notice">공지사항</a></li>
            <li>
              <a class="a_link" href="/introduction/press_release">보도자료</a>
            </li>
            <li>
              <a class="a_link" href="/introduction/korean_office"
                >찾아오시는 길</a
              >
            </li>
          </ul>
        </li>
      </ul>
      <div class="search_btn_wrap">
        <button type="button" class="search_btn">검색</button>
        <button type="button" class="close_search_btn">닫기</button>
      </div>
    </div>
  </div>
  <div class="search_contain">
    <div class="search_wrap">
      <form>
        <div class="input_wrap">
          <input type="text" placeholder="검색어를 입력해주세요" />
          <a href="/" class="sch_btn_gray">검색</a>
        </div>
      </form>
      <div class="hash_tag">
        <p>자주 찾는 정보</p>
        <ul>
          <li><a href="/"># 추천음식</a></li>
          <li><a href="/"># 자연경관</a></li>
          <li><a href="/"># 현지 일상</a></li>
          <li><a href="/"># 역사탐방</a></li>
          <li><a href="/"># 액티비티</a></li>
          <li><a href="/"># 대만 핫플</a></li>
          <li><a href="/"># 대만 야시장</a></li>
          <li><a href="/" class="here"># 대만 포토존</a></li>
          <li><a href="/"># 대만교통</a></li>
        </ul>
      </div>
    </div>
  </div>
  <div class="dimmed" />
</header>

<!-- //mobile panel -->

<style lang="scss">
  @import "/src/styles/variables.scss";
  :global(header.open_menu) {
    .header_contain {
      // height: 450px;
    }
  }

  :global(header.search_open) {
    .search_btn {
      display: none;
    }
    .close_search_btn {
      display: block;
    }
    .search_contain {
      display: block;
    }
  }

  header {
    width: 100%;
    position: fixed;
    z-index: 10;
    overflow: hidden;
    // height: 157px;
    background-color: blue;
  }
  .back {
    width: 100%;
    max-width: 1800px;
    // margin: 0 auto;
    position: absolute;
    top:0; left:50%;
    background-color: red;
    height: 100px;
    z-index: -1;
    transform:translate(-50%,0);
    border-radius: 0 0 30px 30px;
    background-color: red;
  }
  .header_contain {
    max-width: 1800px;
    margin: 0 auto;
    // background-color: #fff;    
    // height: 600px;    
  }
  .gnb_wrap {
    max-width: 1600px;
    position: relative;
    margin: 0 auto;
    padding: 0 30px;    
    & > * {
      float: left;
    }
    &:after {
      content: "";
      display: block;
      clear: both;
    }
  }
  #gnb {
    width: 100%;
    max-width: fit-content;
    margin: 0 0 0 50px;
    padding: 18px 0;
    &:after {
      content: "";
      display: block;
      clear: both;
    }
    & > li {
      position: relative;
      float: left;
      // padding:0 10px;
      > button {
        // padding: 10px;
        display: block;
        padding: 20px 30px;
        display: inline-block;
        font-size: 16px;
        font-family: $NotoSansKR;
        position: relative;
        &:after {
          width: 0%;
          height: 2px;
          content: "";
          display: block;
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translate(-50%, 0);
          background-color: #ff7a00;
          transition: all 0.2s;
        }
        &.active {
          &:after {
            width: 100%;
          }
        }
        &:hover,
        &:focus {
          &:after {
            width: 100%;
          }
        }
      }
    }
  }
  #logo {
    position: relative;
    margin: 30px 0 0;
    z-index: 3;
  }
  .search_btn_wrap {
    width: 40px;
    height: 40px;
    margin: 30px 0 0;
    position: relative;
    z-index: 3;
    float: right;
    & > * {
      width: 100%;
      height: 100%;
      display: block;
      position: absolute;
      text-indent: -999em;
    }
  }
  .search_btn {
    background: url("/img/layout/icon_search.png") no-repeat center / contain;
  }
  .close_search_btn {
    display: none;
    background: url(/img/layout/icon_close.png) no-repeat center / contain;
  }
  .gnb_menu {
    width: 100%;
    position: absolute;
    top: 82px;
    left: 0;
    // display: none;
    text-align: center;
    li {
      width: 100%;
      margin: 15px 0;
    }
    a {
      // width: 100%;
      height: 100%;
      padding: 2px 0;
      display: inline-block;
      line-height: 24px;
      color: #717579;
      font-size: 15px;
      font-weight: $light;
      font-family: $NotoSansKR;
    }
  }
  .search_contain {
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 50%;
    z-index: 2;
    transform: translate(-50%, 0);
    background-color: #fff;
    background-color: blue;
    display: none;
    .search_wrap {
      width: 880px;
      margin: 100px auto;
    }
    .input_wrap {
      margin: 0 auto;
      position: relative;
      background: #fff;
      input {
        width: 100%;
        min-height: 68px;
        line-height: 68px;
        padding: 0 40px 0 0;
        font-size: 26px;
        border: none;
        border-bottom: 1px solid #000;
        border-radius: 0;
        &:placeholder {
          font-size: 26px;
          color: #212529;
          opacity: 0.2;
        }
      }
    }

    .sch_btn_gray {
      width: 40px;
      height: 40px;
      position: absolute;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      background: url("/img/icon_search_gray.png") no-repeat center / contain;
      text-indent: -999em;
    }

    .close_btn {
      width: 40px;
      height: 40px;
      display: block;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 0px;
      background: url(/img/icon_close.png) no-repeat center / contain;
      text-indent: -999em;
      display: none;
    }
    .hash_tag {
      margin: 32px 0 0;
      p {
        margin: 0 0 20px 0;
        font-size: 18px;
        font-weight: 500;
        text-align: left;
      }
      ul {
        max-width: 500px;
        display: flex;
        flex-wrap: wrap;
      }
      li {
        margin: 0 6px 8px 0;
        padding: 8px 12px 8px 12px;
        border-radius: 8px;
        background: #f5f5f5;
        a {
          widows: 100%;
          height: 100%;
          display: block;
        }
      }
    }
  }
  .dimmed {
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    display: none;
    opacity: 0;
  }
</style>
