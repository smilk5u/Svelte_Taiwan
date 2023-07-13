<script>
  import { onMount } from "svelte";

  onMount(async () => {
    //헤더 메뉴
    const gnbWrap = document.querySelector(".gnb_wrap");
    if (!gnbWrap) return;

    const subMenus = document.querySelectorAll(".sub_menu");
    if (!subMenus) return;

    const subBg = document.querySelector(".sub_bg");
    if (!subBg) return;

    const headerWrap = document.querySelector(".header_wrap");
    if (!headerWrap) return;

    const sch_btn = document.querySelector(".sch_btn");
    if (!sch_btn) return;

    const sch_btnSecond = document.querySelector(".sch_btn.second");
    if (!sch_btnSecond) return;

    const logo = document.querySelector("header .logo");
    if (!logo) return;

    gnbWrap.addEventListener("mouseenter", function () {
      subMenus.forEach(function (subMenu) {
        subMenu.classList.add("list_show");
      });
      gnbWrap.classList.add("menu_active");
      subBg.classList.add("menu_show");
    });

    //tab키
    gnbWrap.onkeydown = function () {
      if (window.event.keyCode == 9) {
        subBg.classList.add("menu_show");
        subMenus.forEach(function (subMenu) {
          subMenu.classList.add("list_show");
        });
      }
    };

    const ss = document.querySelector(".input_wrap input");
    if (!ss) return;

    sch_btn.addEventListener("keydown", function (event) {
      if (event.key === "Tab") {
        event.preventDefault(); // Tab 키의 기본 동작을 막음

        subBg.classList.remove("menu_show");
        subMenus.forEach(function (subMenu) {
          subMenu.classList.remove("list_show");
        });
        schBox.classList.add("sch_show");
        ss.focus();
      }
    });

    logo.onkeydown = function () {
      if (window.event.keyCode == 9) {
        subBg.classList.remove("menu_show");
        subMenus.forEach(function (subMenu) {
          subMenu.classList.remove("list_show");
        });
      }
    };

    subBg.addEventListener("mouseleave", function () {
      subMenus.forEach(function (subMenu) {
        subMenu.classList.remove("list_show");
      });
      gnbWrap.classList.remove("menu_active");
      subBg.classList.remove("menu_show");
    });

    const schBtns = document.querySelectorAll(".sch_btn");
    if (!schBtns) return;
    const closeBtn = document.querySelector(".close_btn");
    if (!closeBtn) return;
    const schBox = document.querySelector(".sch_box");
    if (!schBox) return;
    const schBtns2 = document.querySelectorAll(".sch_box .second");

    schBtns.forEach(function (schBtn) {
      schBtn.addEventListener("click", function () {
        schBox.classList.add("sch_show");
        schBtns2.forEach(function (btn) {
          btn.classList.add("hide");
        });
        closeBtn.classList.add("show");
      });
    });

    closeBtn.addEventListener("click", function () {
      schBox.classList.remove("sch_show");
    });

    const subMEnuOn = document.querySelector(".sdsd");
    // if (!subMEnuOn) return;
    const hash_tag = document.querySelector(".hash_tag li:last-child");
    if (!hash_tag) return;

    hash_tag.addEventListener("keydown", function () {
      if (event.key === "Tab") {
        alert("d");
        subMEnuOn.focus();
      }
    });

    //모바일 메뉴
    const panelOpen = document.querySelector(".menu_ico");
    if (!panelOpen) return;
    const panelClose = document.querySelector(".bt-close");
    if (!panelClose) return;
    const siteFunctions = document.querySelector(".mobile_panel");
    if (!siteFunctions) return;
    const body = document.querySelector("body");
    if (!body) return;

    panelOpen.addEventListener("click", function () {
      gsap.to(siteFunctions, 0.5, { right: 0, ease: Power2.easeOut });
      body.classList.add("none_scroll");
    });

    panelClose.addEventListener("click", function () {
      gsap.to(siteFunctions, 0.5, { right: "-100%", ease: Power2.easeOut });
      body.classList.remove("none_scroll");
    });

    const menuLists = document.querySelectorAll(".mobile_panel .menu_list");
    if (!menuLists) return;

    const subLists = document.querySelectorAll(".mobile_panel .sub_list");
    if (!subLists) return;

    menuLists.forEach(function (menuList, index) {
      menuList.addEventListener("click", function () {
        subLists.forEach(function (subList) {
          subList.classList.remove("current");
        });
        menuLists.forEach(function (otherMenuList, otherIndex) {
          if (otherIndex !== index) {
            otherMenuList.classList.remove("on");
          }
        });
        this.classList.add("on");
        subLists[index].classList.add("current");
      });
    });
    subLists.forEach(function (subList) {
      subList.addEventListener("click", function () {
        gsap.to(siteFunctions, 0.5, { right: "-100%", ease: Power2.easeOut });
        body.classList.remove("none_scroll");
      });
    });
  }); //전체
</script>

<!-- pc header -->
<header>
  <div class="header_wrap">
    <h1 class="logo">
      <a href="/"><img src="/src/lib/images/logo.png" /></a>
    </h1>
    <div class="gnb_wrap">
      <ul class="gnb">
        <li class="">
          <a href="/">대만 정보</a>
          <ul class="sub_menu">
            <li><a href="/info/immigration_precautions">출입국 주의사항</a></li>
            <li><a href="/info/introduction">대만소개</a></li>
            <li><a href="/info/festival">문화/역사</a></li>
            <li><a href="/info/weather">대만의 날씨</a></li>
            <li><a href="/info/tourist_info">관광자료</a></li>
            <li><a href="/info/transportation">대만 교통수단</a></li>
            <li>
              <a href="https://www.freepam.co.kr/shop/index.php" target="_blank"
                >가이드북</a
              >
            </li>
            <li><a href="/info/related_links">관련 링크</a></li>
            <li><a href="/info/working_holiday">워홀</a></li>
            <li>
              <a href="https://issuu.com/nihaotaiwan2015" target="_blank"
                >계간지</a
              >
            </li>
          </ul>
        </li>
        <li class="">
          <a href="/">이벤트</a>
          <ul class="sub_menu">
            <li><a href="/event/all">이벤트</a></li>
            <li><a href="/event/contest">여행 사진 공모전</a></li>
          </ul>
        </li>
        <li class="">
          <a href="/themeTour">테마여행</a>
          <ul class="sub_menu">
            <li><a href="/themeTour/recreation">휴양</a></li>
            <li><a href="/themeTour/activity">액티비티</a></li>
            <li><a href="/themeTour/diners">식객</a></li>
            <li><a href="/themeTour/picture">사진</a></li>
            <li><a href="/themeTour/history">역사</a></li>
            <li><a href="/themeTour/shopping">쇼핑</a></li>
            <li><a href="/themeTour/love">러브</a></li>
            <li><a href="/themeTour/nature">자연</a></li>
            <li><a href="/themeTour/culture">문화</a></li>
            <li><a href="/themeTour/night_market">야시장</a></li>
          </ul>
        </li>
        <li class="">
          <a href="/">대만 명소</a>
          <ul class="sub_menu">
            <li><a href="/attractions/all">전체</a></li>
            <li><a href="/attractions/northern">북부</a></li>
            <li><a href="/attractions/midwest">중서부</a></li>
            <li><a href="/attractions/eastern">동부</a></li>
            <li><a href="/attractions/south">남부</a></li>
            <li><a href="/attractions/island">섬</a></li>
          </ul>
        </li>
        <li class="">
          <a href="/golf">대만 골프</a>
        </li>
        <li class="">
          <a href="/">프로대만족</a>
          <ul class="sub_menu">
            <li><a href="/satisfact/all">프로대만족 전체</a></li>
            <li><a href="/satisfact/magazine">월간 매거진</a></li>
            <li><a href="/satisfact/satisfact">프로대만족</a></li>
            <li><a href="/satisfact/travel_tips">여행 Tips</a></li>
          </ul>
        </li>
        <li class="">
          <a href="/">관광청 소개</a>
          <ul class="sub_menu">
            <li><a href="/introduction/tourism_board">관광청 소개</a></li>
            <li><a href="/introduction/director_general">국장소개</a></li>
            <li><a href="/introduction/notice">공지사항</a></li>
            <li><a href="/introduction/press_release">보도자료</a></li>
            <li><a href="/introduction/korean_office">찾아오시는 길</a></li>
          </ul>
        </li>
      </ul>
    </div>
    <a href="/" class="sch_btn">검색</a>
  </div>
  <div class="sub_bg" />
</header>
<div class="sch_box">
  <div class="sch_box_top">
    <h1 class="logo">
      <a href="/"><img src="/src/lib/images/logo.png" /></a>
    </h1>
    <a href="/" class="sch_btn second">검색</a>
    <a href="/" class="close_btn">닫기</a>
  </div>
  <div class="sch_box_wrap">
    <form>
      <div class="input_wrap" tabindex="0">
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
        <li><a href="/"># 대만 포토존</a></li>
        <li><a href="/"># 대만교통</a></li>
      </ul>
    </div>
  </div>
</div>
<!-- //pc header -->

<!-- mobile header -->
<div class="mobile_header">
  <div class="mobile_header_top">
    <h1 class="logo">
      <a href="/"><img src="/src/lib/images/logo.png" /></a>
    </h1>
    <a href="/" class="sch_btn">검색</a>
    <div class="menu_ico" />
  </div>
</div>
<div class="mobile_panel">
  <div class="inner">
    <div class="hd">
      <p>메뉴</p>
      <a href="/" class="bt-close" />
    </div>
    <div class="menu_section">
      <ul class="mobile_menu">
        <li class="menu_list on"><a href="/">대만 정보</a></li>
        <li class="menu_list"><a href="/">이벤트</a></li>
        <li class="menu_list"><a href="/">테마 여행</a></li>
        <li class="menu_list"><a href="/">대만 명소</a></li>
        <li class="menu_list"><a href="/">대만 골프</a></li>
        <li class="menu_list"><a href="/">프로대만족</a></li>
        <li class="menu_list"><a href="/">관광청 소개</a></li>
        <div class="sns_link">
          <ul>
            <li><a href="/" target="_blank" class="facebook">페이스북</a></li>
            <li><a href="/" target="_blank" class="youtube">유튜브</a></li>
            <li>
              <a href="/" target="_blank" class="instagram">인스타그램</a>
            </li>
            <li><a href="/" target="_blank" class="owl">올빼미</a></li>
          </ul>
        </div>
      </ul>

      <div class="sub_list_wrap">
        <ul class="sub_list current">
          <li><a href="/info/immigration_precautions">출입국 주의사항</a></li>
          <li><a href="/info/iintroduction">대만소개</a></li>
          <li><a href="/info/festival">문화/역사</a></li>
          <li><a href="/info/weather">대만의 날씨</a></li>
          <li><a href="/info/tourist_info">관광자료</a></li>
          <li><a href="/info/transportation">대만 교통수단</a></li>
          <li>
            <a href="https://www.freepam.co.kr/shop/index.php" target="_blank"
              >가이드북</a
            >
          </li>
          <li><a href="/info/related_links">관련 링크</a></li>
          <li><a href="/info/working_holiday">워홀</a></li>
          <li>
            <a href="https://issuu.com/nihaotaiwan2015" target="_blank"
              >계간지</a
            >
          </li>
        </ul>
        <ul class="sub_list">
          <li><a href="/event/all">이벤트</a></li>
          <li><a href="/event/contest">여행 사진 공모전</a></li>
        </ul>
        <ul class="sub_list">
          <li><a href="/themeTour/recreation">휴양</a></li>
          <li><a href="/themeTour/activity">액티비티</a></li>
          <li><a href="/themeTour/diners">식객</a></li>
          <li><a href="/themeTour/picture">사진</a></li>
          <li><a href="/themeTour/history">역사</a></li>
          <li><a href="/themeTour/shopping">쇼핑</a></li>
          <li><a href="/themeTour/love">러브</a></li>
          <li><a href="/themeTour/nature">자연</a></li>
          <li><a href="/themeTour/culture">문화</a></li>
          <li><a href="/themeTour/night_market">야시장</a></li>
        </ul>
        <ul class="sub_list">
          <li><a href="/attractions/all">전체</a></li>
          <li><a href="/attractions/northern">북부</a></li>
          <li><a href="/attractions/midwest">중서부</a></li>
          <li><a href="/attractions/eastern">동부</a></li>
          <li><a href="/attractions/south">남부</a></li>
          <li><a href="/attractions/island">섬</a></li>
        </ul>
        <ul class="sub_list">
          <li><a href="/" />대만 골프</li>
        </ul>
        <ul class="sub_list">
          <li><a href="/satisfact/all">프로대만족 전체</a></li>
          <li><a href="/satisfact/magazine">월간 매거진</a></li>
          <li><a href="/satisfact/satisfact">프로대만족</a></li>
          <li><a href="/satisfact/travel_tips">여행 Tips</a></li>
        </ul>
        <ul class="sub_list">
          <li><a href="/introduction/tourism_board">관광청 소개</a></li>
          <li><a href="/introduction/director_general">국장소개</a></li>
          <li><a href="/introduction/notice">공지사항</a></li>
          <li><a href="/introduction/press_release">보도자료</a></li>
          <li><a href="/introduction/korean_office">찾아오시는 길</a></li>
        </ul>
      </div>
    </div>
  </div>
</div>

<!-- //mobile header -->

<style lang="scss">
  @import "/src/styles/variables.scss";

  :global(.menu_show) {
    opacity: 1 !important;
    /* display: block !important; */
    height: 540px !important;
  }
  :global(.list_show) {
    opacity: 1 !important;
    height: auto !important;
  }
  :global(.sch_show) {
    opacity: 1 !important;
    visibility: visible !important;
    z-index: 8 !important;
  }
  :global(.menu_active) {
    max-width: 100% !important;
    border-radius: 0 !important;
  }
  :global(.current) {
    z-index: 10;
  }
  :global(.show) {
    display: block !important;
  }
  :global(.hide) {
    display: none !important;
  }
  :global(.menu_list.on:after) {
    width: calc(100% + vw(20));
    height: 100%;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    display: block;
    border-radius: 0 vw(50) vw(50) 0;
    background: #ff7a00 !important;
    z-index: 11;
  }
  :global(.menu_list.on a) {
    color: #fff !important;
  }
  :global(.none_scroll) {
    overflow-y: hidden !important;
  }
  header {
    max-width: 1800px;
    width: 100%;
    height: 100px;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    margin: 0 auto;
    background: #ddd;
    background: #fff;
    border-radius: 0 0 60px 60px;
    transition: 0.3s;
    z-index: 6;
  }
  .header_wrap {
    width: 100%;
    display: flex;
    align-items: center;
    margin: 0 auto;
    border-radius: 0 0 60px 60px;
    position: absolute;
    top: 0;
    z-index: 3;
  }
  header h1 {
    margin: 0 80px 0 100px;
  }
  header h1 a {
    width: 100px;
    height: 100%;
    display: block;
  }
  .gnb_wrap {
    margin: 0 80px 0 0;
  }
  .gnb {
    height: 100%;
    line-height: 100px;
    display: flex;
    flex-wrap: wrap;
  }
  .gnb > li {
    position: relative;
    display: inline-block;
  }
  .gnb > li > a {
    padding: 0 30px;
    display: inline-block;
    text-align: center;
    font-weight: 500;
  }
  .gnb > li > .sub_menu {
    width: 100%;
    height: 0;
    /* display: none;
     */
    opacity: 0;
    position: absolute;
    z-index: 3;
    transition: 0.2s;
  }
  .gnb > li > .sub_menu > li > a {
    display: block;
    margin: 16px 0;
    line-height: 24px;
    color: #717579;
    font-size: 15px;
    font-weight: 400;
    text-align: center;
  }
  .gnb > li > .sub_menu > li > a:hover {
    color: #ff7a00;
  }
  .gnb > li::after {
    width: 0;
    height: 1px;
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    display: block;
    background-color: #ff7a00;
    opacity: 0;
    -webkit-transition: all 0.1s ease-in-out;
    -moz-transition: all 0.1s ease-in-out;
    -ms-transition: all 0.1s ease-in-out;
    -o-transition: all 0.1s ease-in-out;
    transition: all 0.1s ease-in-out;
  }
  .gnb > li:hover::before {
    width: 100%;
    opacity: 1;
    margin: 0 0 0 -50%;
  }
  .gnb > li:hover::after {
    width: 100%;
    left: 50%;
    transform: translateX(-50%);
    opacity: 1;
  }
  .sub_bg {
    width: 1920px;
    height: 0px;
    /* display: none; */
    position: absolute;
    left: -60px;
    /* top: 100px; */
    top: 0;
    background: #fff;
    z-index: 2;
    /* opacity: 0; */
    transition: 0.3s;
  }
  .sch_btn {
    width: 40px;
    height: 40px;
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 100px;
    background: url("/img/icon_search.png") no-repeat center / contain;
    z-index: 4;
    text-indent: -999em;
  }
  .sch_box {
    width: 100%;
    height: 440px;
    position: absolute;
    visibility: hidden;
    opacity: 0;
    // padding: 0 152px;
    padding: 0 100px;
    transition: 0.3s;
    background-color: #fff;
  }
  .sch_box_top {
    height: 100px;
    display: flex;
    align-items: center;
    position: relative;
    h1 {
      margin: 0 0 0 1px;
      a {
        width: 100%;
        height: 100%;
        display: block;
      }
    }
  }
  .sch_box_wrap {
    width: 880px;
    margin: 0 auto;
  }
  .sch_box .input_wrap {
    width: 880px;
    margin: 0 auto;
    position: relative;
    background: #fff;
  }
  .sch_box .input_wrap input {
    width: 100%;
    min-height: 68px;
    line-height: 68px;
    padding: 0 40px 0 0;
    font-size: 26px;
    border: none;
    border-bottom: 1px solid #000;
    border-radius: 0;
  }
  .sch_box .input_wrap input::placeholder {
    font-size: 26px;
    color: #212529;
    opacity: 0.2;
  }
  .sch_box .input_wrap .sch_btn_gray {
    width: 40px;
    height: 40px;
    position: absolute;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    background: url("/img/icon_search_gray.png") no-repeat center / contain;
    text-indent: -999em;
  }
  .sch_box .close_btn {
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
  }
  .hash_tag p {
    margin: 0 0 20px 0;
    font-size: 18px;
    font-weight: 500;
    text-align: left;
  }
  .hash_tag ul {
    max-width: 500px;
    display: flex;
    flex-wrap: wrap;
  }
  .hash_tag ul li {
    margin: 0 6px 8px 0;
    padding: 8px 12px 8px 12px;
    border-radius: 8px;
    background: #f5f5f5;
  }

  .mobile_header {
    width: 100%;
    height: vw(140);
    padding: 0 vw(30);
    position: fixed;
    display: flex;
    background: #fff;
    border-radius: 0 0 vw(50) vw(50);

    /* position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    z-index: 100; */
  }
  .mobile_header_top {
    display: flex;
    align-items: center;
  }
  .mobile_header_top h1 {
    a {
      width: 100%;
      height: 100%;
      display: block;
    }
  }
  .mobile_header .menu_ico {
    width: 42px;
    height: 42px;
    position: absolute;
    right: 30px;
    background: url("/img/icon_menu.png") no-repeat center / contain;
    cursor: pointer;
  }
  .mobile_header .sch_btn {
    position: absolute;
    right: 98px;
  }

  .mobile_panel {
    position: fixed;
    top: 0;
    right: -100%;
    width: 100%;
    z-index: 100;
    overflow-x: hidden;
  }
  .mobile_panel .inner {
    background-color: #f5f5f5;
    height: 100vh;
    width: 100%;
    overflow-y: auto;
    /* padding: 0 40px; */
  }
  .mobile_panel .inner .hd {
    height: vw(120);
    padding: 0 vw(60);
    position: relative;
    background: #fff;
    border-bottom: 2px solid #e0e0e0;
    text-align: center;
  }
  .mobile_panel .inner .hd p {
    font-size: vw(38);
    line-height: vw(120);
    font-family: "Noto Sans KR";
  }
  .mobile_panel .inner .bt-close {
    width: 17px;
    height: 33px;
    display: block;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: url("/img/close.png") no-repeat center / contain;
    text-indent: -999em;
  }

  .mobile_panel .inner {
    position: relative;
  }
  .mobile_menu {
    width: vw(260);
    position: relative;
  }
  .sub_list_wrap {
    width: calc(100% - vw(260));
    position: relative;
  }

  .menu_list {
    height: vw(106);
    display: flex;
    background: #f5f5f5;
    position: relative;
    margin: 0 0 vw(32) 0;
    line-height: vw(106);
    padding: 0 0 0 vw(40);
  }
  .menu_list a {
    font-size: vw(30);
    font-family: "Noto Sans KR";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    z-index: 13;
    color: #212529;
  }
  .sub_list {
    width: 100%;
    height: 100%;
    padding: vw(30) 0 0 vw(70);
    position: absolute;
    top: 0;
    background-color: #fff;
  }
  .sub_list li {
    margin: 0 0 vw(52) 0;
  }
  .sub_list li a {
    display: block;
    width: 100%;
    height: 100%;
    font-size: vw(30);
    color: #212529;
    font-family: "Noto Sans KR";
    opacity: 0.8;
  }
  .menu_section {
    display: flex;
    height: 100%;
  }

  .sns_link {
    width: 100%;
    position: absolute;
    bottom: vw(50);
    left: 50%;
    transform: translateX(-50%);
    ul {
      width: vw(196);
      margin: 0 auto;
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      li {
        width: vw(90);
        height: vw(90);
        margin: 0 0 vw(16) 0;
        border-radius: vw(90);
        justify-self: center;
      }
      a {
        display: block;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        text-indent: -999em;
      }
    }

    .facebook {
      background-image: url("/img/facebook.png");
    }
    .instagram {
      background-image: url("/img/instagram.png");
    }
    .youtube {
      background-image: url("/img/youtube.png");
    }
    .owl {
      background-image: url("/img/owl.png");
    }
  }
  @media screen and (max-width: 1800px) {
    header {
      width: 96%;
    }
    .sch_box {
      padding: 0 2%;
      .logo {
        margin: 0 0 0 100px;
      }
      .close_btn {
        right: 100px;
      }
    }
  }

  @media screen and (max-width: 1450px) {
    header {
      h1 {
        margin: 0 2% 0 50px;
        background-color: black;
      }
      .sch_btn {
        right: 50px;
      }
    }
  }
  @media screen and (max-width: 1300px) {
    header {
      .logo {
        background-color: red;
        margin: 0 2% 0 20px;
      }
      .sch_btn {
        right: 20px;
      }
      .gnb {
        > li {
          > a {
            padding: 0 20px;
          }
        }
      }
    }
    .sch_box {
      .logo {
        margin: 0 0 0 20px;
      }
      .close_btn {
        right: 20px;
      }
    }
  }
  @media screen and (min-width: 1024px) {
    .mobile_header {
      display: none !important;
    }
  }
  @media screen and (max-width: 1023px) {
    header {
      display: none;
    }
    header h1 {
      margin: 0 25px 0 100px;
    }
    .mobile_header {
      height: vw(90);
    }
    .sch_box {
      height: 100%;
      padding: 0 vw(40);
      .logo {
        display: none;
      }
      .close_btn {
        right: 0;
      }
      .sch_box_wrap {
        width: 100%;
        .input_wrap {
          width: 100%;
          input {
            min-height: 0;
            padding: vw(45) 0 vw(29);
            font-size: vw(40);
          }
        }
        .hash_tag {
          margin: vw(80) 0 0;
          p {
            font-size: vw(32);
            margin: 0 0 vw(30) 0;
          }
          ul {
            max-width: 100%;
            li {
              margin: 0 vw(12) vw(14) 0;
              a {
                padding: vw(18) vw(26);
                font-size: vw(26);
                border-radius: vw(14);
              }
            }
          }
        }
      }
    }
  }
  @media screen and (max-width: 768px) {
    .mobile_header {
      height: vw(140);
      padding: 0 vw(40);
      border-radius: 0 0 vw(50) vw(50);
      .sch_btn {
        right: vw(118);
      }
      .menu_ico {
        right: vw(40);
      }
    }
  }
</style>
