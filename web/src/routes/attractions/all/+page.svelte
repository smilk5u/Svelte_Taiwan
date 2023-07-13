<script>
  import { onMount } from "svelte";

  const closeCheckPopup = () => {
    const checkPopUp = document.querySelector(".check_pop_up");
    checkPopUp?.classList.add("closed");
    gsap.to(checkPopUp, 0.5, {
      opacity: 0,
      display: "none",
      ease: Power2.easeOut,
    });
  };

  onMount(() => {
    const popupCloseBtn = document.querySelector("#popupCloseBtn");
    const dimmed = document.querySelector(".dimmed");
  });

  /* 클릭시 해당 엘리먼트 가져오기 */
  const openPopup = (data) => {
    const content = data.srcElement.nextElementSibling;
    const dimmed = document.querySelector(".dimmed");
    gsap.to(content, 0.5, {
      opacity: 1,
      display: "block",
      ease: Power2.easeOut,
    });
    gsap.to(dimmed, 0.5, {
      opacity: 1,
      display: "block",
      ease: Power2.easeOut,
    });
  };
  const closePopup = (data) => {
    const content = data.srcElement.parentNode;
    const dimmed = document.querySelector(".dimmed");

    gsap.to(content, 0.5, {
      opacity: 0,
      display: "none",
      ease: Power2.easeOut,
    });
    gsap.to(dimmed, 0.5, {
      opacity: 0,
      display: "none",
      ease: Power2.easeOut,
    });
  };
</script>

<!-- 서브페이지 공통 -->
<div class="sub_visual attractions">
  <div class="sub_cate">
    <div class="lt_cate">
      <a href="/themeTour/recreation" class="on">
        <img src="/img/sub_lt_btn.png" />
        테마여행
      </a>
    </div>
    <div class="ct_cate">
      <a class="on">
        <strong>대만 명소</strong>
        <p>지금 대만에서 가장 핫한 지역별 다양한 명소</p>
      </a>
    </div>
    <div class="rt_cate">
      <a href="/golf" class="on">
        <img src="/img/sub_rt_btn.png" />
        대만 골프
      </a>
    </div>
  </div>
</div>
<div class="sub_menu">
  <ul class="on">
    <li class="on">
      <a href="/attractions/all"> 대만 명소 전체 </a>
    </li>
    <li class="off">
      <a href="/attractions/northern"> 대만 북부 </a>
    </li>
    <li class="off">
      <a href="/attractions/midwest"> 대만 중서부 </a>
    </li>
    <li class="off">
      <a href="/attractions/eastern"> 대만 동부 </a>
    </li>
    <li class="off">
      <a href="/attractions/south"> 대만 남부 </a>
    </li>
    <li class="off">
      <a href="/attractions/island"> 대만의 섬 </a>
    </li>
  </ul>
</div>
<!-- //서브페이지 공통 -->

<div class="attraction_wrap">
  <div class="title">
    <h1>대만 명소 이야기</h1>
    <h2>꼭 가봐야하는 대만 핫플레이스</h2>
  </div>
  <div class="check_pop_up">
    <p>
      아이콘
      <span>
        <img src="/img/attractions/map_icon_pc.png" alt="" />
      </span>
      을 눌러 지역별 대표 명소들을 확인해보세요!
    </p>
    <button type="button" class="close_btn" on:click={closeCheckPopup}>
      <img src="/img/attractions/close_btn_icon.png" alt="" />
    </button>
  </div>
  <div class="map_wrap">
    <img class="pc_elm" src="/img/attractions/map_img_pc.png" alt="" />
    <img class="mo_elm" src="/img/attractions/map_img_mo.png" alt="" />
    <div class="txt_wrap">
      <div class="item_contain cont1">
        <div class="link_wrap">
          <a href="/attractions/island" class="link_element">
            <span>섬 지역</span>
          </a>
        </div>
        <div class="desc_elm">
          <strong>
            <b>대만족 PICK!</b>
            <span>후시향</span>
          </strong>
          <p>
            해변의 푸른 바닷물과 하얀 백사장의 모래를 <br />
            여유롭게 즐기기 좋은 수려한 분위기의 명소
          </p>
        </div>
      </div>
      <div class="item_contain cont2">
        <div class="link_wrap">
          <a href="/attractions/midwest" class="link_element">
            <span>중서부 지역</span>
          </a>
        </div>
        <div class="desc_elm">
          <strong>
            <b>대만족 PICK!</b>
            <span>메이산향</span>
          </strong>
          <p>
            매화가 많이 피는 지역으로 수려한 경관을 자랑하며 <br />
            전망 감상이 가능한 흔들다리 유명
          </p>
        </div>
      </div>
      <div class="item_contain cont3">
        <div class="link_wrap">
          <a href="/attractions/south" class="link_element">
            <span>남부 지역</span>
          </a>
        </div>
        <div class="desc_elm">
          <strong>
            <b>대만족 PICK!</b>
            <span>가오슝시</span>
          </strong>
          <p>
            타이완에서 세번째로 큰 도시, 옛 정취가 가득하며 <br />
            객가의 문화를 엿볼 수 있는 지역
          </p>
        </div>
      </div>
      <div class="item_contain cont4">
        <div class="link_wrap">
          <a href="/attractions/northern" class="link_element">
            <span>북부 지역</span>
          </a>
        </div>
        <div class="desc_elm">
          <strong>
            <b>대만족 PICK!</b>
            <span>루이팡/지우펀</span>
          </strong>
          <p>
            여행자 10대 인기 명소 중 하나로 <br />
            편리한 교통과 볼거리를 제공하는 유명 관광지
          </p>
        </div>
      </div>
      <div class="item_contain cont5">
        <div class="link_wrap">
          <a href="/attractions/eastern" class="link_element">
            <span>동부 지역</span>
          </a>
        </div>
        <div class="desc_elm">
          <strong>
            <b>대만족 PICK!</b>
            <span>청공진</span>
          </strong>
          <p>
            타이동현에서 가장 웅장한 해안 경관을 보유한 명소로 <br />
            원주민 아미족의 공연과 오렌지가 유명
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="arrow_contain">
    <div class="item_cont">
      <img
        class="item_icon mo_elm"
        src="/img/attractions/culture_icon2.png"
        alt=""
      />
      <button
        class="map_arrow"
        type="button"
        on:click={(data) => openPopup(data)}
      />
      <div class="elm_popup">
        <b>대만족 섬 PICK!</b>
        <strong>후시향</strong>
        <p>
          해변의 푸른 바닷물과 <br /> 하얀 백사장의 모래를 여유롭게 즐기기
          <br /> 좋은 수려한 분위기의 명소
        </p>
        <a href="/"><em>섬</em>명소 더보기</a>
        <button
          type="button"
          id="popupCloseBtn"
          on:click={(data) => closePopup(data)}>닫기</button
        >
      </div>
    </div>
    <div class="item_cont">
      <img
        class="item_icon mo_elm"
        src="/img/attractions/culture_icon5.png"
        alt=""
      />
      <button
        class="map_arrow"
        type="button"
        on:click={(data) => openPopup(data)}
      />
      <div class="elm_popup">
        <b>대만족 중서부 PICK!</b>
        <strong>메이산향</strong>
        <p>
          매화가 많이 피는 지역으로 <br />
          수려한 경관을 자랑하며 <br />
          전망 감상이 가능한 흔들다리 유명
        </p>
        <a href="/"><em>중서부</em>명소 더보기</a>
        <button
          type="button"
          id="popupCloseBtn"
          on:click={(data) => closePopup(data)}>닫기</button
        >
      </div>
    </div>
    <div class="item_cont">
      <img
        class="item_icon mo_elm"
        src="/img/attractions/culture_icon3.png"
        alt=""
      />
      <button
        class="map_arrow"
        type="button"
        on:click={(data) => openPopup(data)}
      />
      <div class="elm_popup">
        <b>대만족 남부 PICK!</b>
        <strong>가오슝시</strong>
        <p>
          타이완에서 세번째로 큰 도시, <br />
          옛 정취가 가득하며 객가의 문화를 <br />
          엿볼 수 있는 지역
        </p>
        <a href="/"><em>남부</em>명소 더보기</a>
        <button
          type="button"
          id="popupCloseBtn"
          on:click={(data) => closePopup(data)}>닫기</button
        >
      </div>
    </div>
    <div class="item_cont">
      <img
        class="item_icon mo_elm"
        src="/img/attractions/culture_icon4.png"
        alt=""
      />
      <button
        class="map_arrow"
        type="button"
        on:click={(data) => openPopup(data)}
      />
      <div class="elm_popup">
        <b>대만족 북부 PICK!</b>
        <strong>루이팡/지우펀</strong>
        <p>
          여행자 10대 인기 명소 중 하나로 <br />
          편리한 교통과 볼거리를 제공하는 <br />
          유명 관광지
        </p>
        <a href="/"><em>북부</em>명소 더보기</a>
        <button
          type="button"
          id="popupCloseBtn"
          on:click={(data) => closePopup(data)}>닫기</button
        >
      </div>
    </div>
    <div class="item_cont">
      <img
        class="item_icon mo_elm"
        src="/img/attractions/culture_icon1.png"
        alt=""
      />
      <button
        class="map_arrow"
        type="button"
        on:click={(data) => openPopup(data)}
      />
      <div class="elm_popup">
        <b>대만족 동부 PICK!</b>
        <strong>청공진</strong>
        <p>
          타이동현에서 가장 웅장한 <br />
          해안 경관을 보유한 명소로 <br />
          원주민 아미족의 공연과 오렌지가 유명
        </p>
        <a href="/"><em>동부</em>명소 더보기</a>
        <button
          type="button"
          id="popupCloseBtn"
          on:click={(data) => closePopup(data)}>닫기</button
        >
      </div>
    </div>
  </div>
  <div class="dimmed" />
  <!-- <div class="popup_wrap">
    <div class="elm_popup">
       <b>대만족 섬 PICK!</b>
       <strong>후시향</strong>
       <p>해변의 푸른 바닷물과
         하얀 백사장의 모래를 여유롭게 즐기기
         좋은 수려한 분위기의 명소</p>
       <a href=""></a>
       <button type="button">섬 명소 더보기</button>
    </div>
  </div> -->

  <div id="subGnb">
    <ul>
      <li>
        <a href="/">
          <div class="thumb_img">
            <img src="/img/bottom_navi_img1.jpg" alt="">
          </div>
          <div class="txt_elm">
            <strong>이벤트</strong>
            <p>
              대만을 120% 즐길 수 있는 <br />
              다양한 이벤트
            </p>
          </div>
        </a>
      </li>
      <li>
        <a href="/">
          <div class="thumb_img">
            <img src="/img/bottom_navi_img2.jpg" alt="">
          </div>
          <div class="txt_elm">
            <strong>대만 관광청 소개</strong>
            <p>대만 관광청에 대한 <br /> 모든 것</p>
          </div>
        </a>
      </li>
      <li>
        <a href="/">
          <div class="thumb_img">
            <img src="/img/bottom_navi_img3.jpg" alt="">
          </div>
          <div class="txt_elm">
            <strong>이벤트</strong>
            <p>
              당신이 즐길 수 있는 <br />
              대만의 모든 테마 여행
            </p>
          </div>
        </a>
      </li>
      <li>
        <a href="/">
          <div class="thumb_img">
            <img src="/img/bottom_navi_img4.jpg" alt="">
          </div>
          <div class="txt_elm">
            <strong>이벤트</strong>
            <p>
              지금 대만에서 가장 핫한 <br />
              지역별 다양한 명소
            </p>
          </div>
        </a>
      </li>
    </ul>
  </div>
</div>

<style lang="scss">
  @import "/src/styles/variables.scss";
  /* 전체 페이지 */
  .attraction_wrap {
    background-color: #cdeaff;
    position: relative;
    overflow: hidden;
  }

  /* 타이틀 */
  .title {
    width: fit-content;
    margin: 0 auto;
    padding: 80px 0 50px;
    text-align: center;
    h1 {
      font-family: $SCDream;
      font-weight: $black;
      font-size: 50px;
    }
    h2 {
      padding: 10px 0 0;
      font-size: 28px;
      color: #0094ff;
      font-weight: $light;
    }
  }

  /* 알림 팝업 */
  .check_pop_up {
    width: 600px;
    position: absolute;
    top: 30px;
    left: 50%;
    transform: translate(-50%, 0);
    max-width: 800px;
    margin: 0 auto;
    padding: 10px 30px 20px;
    background-color: rgba(0, 0, 0, 0.1);
    display: none;
    p {
      font-size: 20px;
      color: #212529;
    }
    span {
      width: 26px;
      height: 35px;
      display: inline-block;
      position: relative;
      top: 8px;
      img {
        width: 100%;
        /* transform: scale(0.5); */
      }
    }
    .close_btn {
      width: 40px;
      height: 40px;
      position: absolute;
      margin: auto;
      right: 15px;
      top: 3px;
      bottom: 0;
      /* background-color: red; */
      img {
        width: 21px;
        height: 21px;
        position: absolute;
        margin: auto;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }
    }
  }

  /* 맵 이미지 */
  .map_wrap {
    width: 100%;
    max-width: 828px;
    position: relative;
    > img {
      width: 100%;
    }
    position: relative;
    margin: 0 auto 105px;
    display: block;
  }

  /* 지역 설명 wrap */
  .txt_wrap {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    z-index: 2;
  }

  /* 지역 설명 아이템 */
  .item_contain {
    width: fit-content;
    position: absolute;
    text-align: right;
    &.cont1 {
      left: -152px;
      top: 80px;
      .link_element {
        left: 12px;
        &:before {
          bottom: -7px;
          right: -9px;
          rotate: 39deg;
        }
      }
    }
    &.cont2 {
      left: -107px;
      top: 330px;
      .link_element {
        left: 13px;
        &:before {
          right: -20px;
          top: 0;
          bottom: 0;
          margin: auto;
        }
      }
    }
    &.cont3 {
      left: -70px;
      bottom: 27px;
      .link_element {
        left: 15px;
        &:before {
          top: 0;
          right: -15px;
          rotate: -30deg;
        }
      }
    }
    &.cont4 {
      right: -20%;
      top: 2%;
      text-align: left;
      .link_wrap {
        .link_element {
          left: -16px;
          float: left;
          &:before {
            top: 0;
            bottom: 0;
            left: -18px;
            margin: auto;
            rotate: 180deg;
          }
        }
      }
    }
    &.cont5 {
      right: -138px;
      bottom: 280px;
      text-align: left;
      .link_wrap {
        /* left: -30px; */
        .link_element {
          left: -30px;
          float: left;
          &:before {
            top: 0;
            bottom: 0;
            left: -18px;
            margin: auto;
            rotate: 180deg;
          }
        }
      }
    }
    .link_wrap {
      width: 100%;
      &:after {
        content: "";
        display: block;
        clear: both;
      }
      .link_element {
        float: right;
        position: relative;
        padding: 13px 60px 13px 25px;
        border-radius: 100px;
        background-color: #fff;
        span {
          font-size: 22px;
          color: #212529;
          font-weight: $extraBold;
        }
        &:after,
        &:before {
          content: "";
          display: block;
          position: absolute;
        }
        &:after {
          width: 36px;
          height: 36px;
          top: 10px;
          right: 12px;
          background: url(/img/attractions/arrow_icon2.png) 50% 50% no-repeat;
        }
        &:before {
          width: 22px;
          height: 19px;
          z-index: -1;
          background: url(/img/attractions/map_icon3.png) 50% 50% no-repeat;
        }
        /* &:before {
          width: 39px;
          height: 39px;
          bottom: -11px;
          left: -30px;
          background: url(/img/attractions/arrow_icon.png) 50% 50% no-repeat;
        } */
      }
    }
    .desc_elm {
      padding: 15px 0 0;
      strong {
        font-size: 18px;
        line-height: 20px;
        b {
          font-weight: $extraBold;
          color: #ff7a00;
        }
        span {
          color: #212529;
        }
      }
      p {
        padding: 10px 0 0;
        font-family: $NotoSansKR;
        font-size: 15px;
        font-weight: $light;
        color: #212529;
      }
    }
  }

  /* 지도 포인트 */
  .arrow_contain {
    width: 100%;
    height: 70.4%;
    max-width: 828px;
    position: absolute;
    margin: 0 auto;
    z-index: 1;
    top: 248px;
    left: 50%;
    transform: translateX(-50%);
    .item_cont {
      .elm_popup {
        display: none;
      }
      &:nth-of-type(1) {
        .map_arrow {
          top: 15%;
          left: 21%;
        }
      }
      &:nth-of-type(2) {
        .map_arrow {
          top: 38%;
          right: 52%;
        }
      }
      &:nth-of-type(3) {
        .map_arrow {
          bottom: 18%;
          left: 35%;
        }
      }
      &:nth-of-type(4) {
        .map_arrow {
          top: 2%;
          right: 20.5%;
        }
      }
      &:nth-of-type(5) {
        .map_arrow {
          bottom: 43%;
          right: 29%;
        }
      }
    }
    .map_arrow {
      width: 52px;
      height: 69px;
      position: absolute;
      background: url(/img/attractions/map_icon_pc.png) 50% 50% no-repeat;
      background-size: cover;
      img {
        width: 100%;
      }
    }
  }

  @include desktop {
    .pc_elm {
      display: none;
    }
    .mo_elm {
      display: block;
    }

    /* Popup Dimmed (팝업 딤) */
    .dimmed {
      width: 100%;
      height: 100%;
      position: fixed;
      background-color: rgba(0, 0, 0, 0.6);
      top: 0;
      left: 0;
      z-index: 1;
      display: none;
    }

    /* 전체 페이지 */
    .attraction_wrap {
      .item_contain {
        display: none;
      }
    }

    /* 타이틀 */
    .title {
      padding: 130px 0 60px;
    }

    /* 알림 팝업 */
    .check_pop_up {
      display: block;
    }

    /* 지도 포인트 */
    .arrow_contain {
      height: 72.4%;
      top: 309px;
      position: absolute;
      z-index: 2;
      .item_cont {
        .item_icon {
          position: absolute;
        }
        .elm_popup {
          width: 100%;
          max-width: 450px;
          padding: 55px 30px 30px;
          position: absolute;
          z-index: 2;
          text-align: center;
          background-color: #fff;
          border-radius: 30px;
          opacity: 0;
          display: none;
          &:after {
            width: 53px;
            height: 48px;
            position: absolute;
            top: -25px;
            left: 52px;
            content: "";
            display: block;
            background: url(/img/attractions/map_icon2.png) 50% 50% no-repeat;
            background-size: cover;
          }
          b {
            font-size: 20px;
            color: #ff7a00;
            font-weight: $bold;
            display: block;
          }
          strong {
            display: block;
            padding: 5px 0 15px;
            color: #212529;
            font-weight: $extraBold;
            font-size: 39px;
          }
          p {
            font-size: 20px;
            color: #515559;
            line-height: 30px;
            font-weight: $light;
          }
          button {
            width: 50px;
            height: 50px;
            background: url(/img/attractions/close_btn2.png) 50% 50% no-repeat;
            background-size: cover;
            position: absolute;
            top: 20px;
            right: 20px;
            text-indent: -999999px;
          }
          a {
            display: block;
            font-weight: $light;
            margin: 30px 0 0;
            padding: 20px;
            border-radius: 16px;
            color: #fff;
            font-size: 21px;
            background-color: #ff7a00;
            em {
              font-weight: $medium;
              font-style: normal;
              color: #fff;
              font-size: 21px;
              margin: 0 5px 0 0;
            }
          }
        }
        &:nth-of-type(1) {
          .map_arrow {
            top: 12.5%;
            left: 22%;
          }
          .item_icon {
            width: 72px;
            height: 80px;
            top: 8.5%;
            left: 20%;
          }
          .elm_popup {
            top: 23%;
            left: 16.7%;
          }
        }
        &:nth-of-type(2) {
          .map_arrow {
            top: 35%;
            left: 37%;
          }
          .item_icon {
            width: 210px;
            height: 290px;
            top: 21.5%;
            left: 25%;
          }
          .elm_popup {
            top: 52%;
            left: 17.7%;
            &:after {
              left: 33.5%;
            }
          }
        }
        &:nth-of-type(3) {
          .map_arrow {
            bottom: 18%;
            left: 30%;
          }
          .item_icon {
            width: 181px;
            height: 181px;
            top: 52.5%;
            left: 20%;
          }
          .elm_popup {
            top: 16%;
            left: 17%;
            &:after {
              left: 19%;
              top: auto;
              bottom: -6%;
            }
            &:after {
              transform: rotate(180deg);
            }
          }
        }
        &:nth-of-type(4) {
          .map_arrow {
            top: 3%;
            right: 15.5%;
          }
          .item_icon {
            width: 250px;
            height: 170px;
            top: 5.8%;
            right: 10.5%;
          }
          .elm_popup {
            top: 24%;
            left: 31%;
            &:after {
              left: 76%;
            }
          }
        }
        &:nth-of-type(5) {
          .map_arrow {
            bottom: 44%;
            right: 27%;
          }
          .item_icon {
            width: 154px;
            height: 142px;
            bottom: 35%;
            right: 25.5%;
          }
          .elm_popup {
            top: 11%;
            left: 27%;
            &:after {
              left: 73%;
              top: auto;
              bottom: -6%;
              transform: rotate(180deg);
            }
          }
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    .attraction_wrap {
      padding: vw(34) 0 0;
    }

    /* 타이틀 */
    .title {
      display: none;
    }

    /* 알림 팝업 */
    .check_pop_up {
      width: vw(688);
      padding: vw(20) vw(25) vw(25);
      p {
        font-size: vw(24);
      }
      span {
        width: vw(26);
        height: vw(35);
        top: vw(5);
      }
      .close_btn {
        width: vw(40);
        height: vw(40);
        right: vw(15);
        top: vw(2);
        img {
          width: vw(21);
          height: vw(21);
        }
      }
    }

    /* 맵 이미지 */
    .map_wrap {
      margin: vw(195) 0 vw(95);
    }

    /* 지도 포인트 */
    .arrow_contain {
      width: 100%;
      height: 76%;
      top: 17%;
      .item_cont {
        .item_icon {
          position: absolute;
        }
        .elm_popup {
          max-width: vw(540);
          width: 100%;
          padding: vw(64) vw(34) vw(44);
          border-radius: vw(30);
          margin: auto;
          left: 0;
          right: 0;
          box-sizing: border-box;
          &:after {
            width: vw(53);
            height: vw(48);
            top: vw(-25);
          }
          b {
            font-size: vw(26);
          }
          strong {
            padding: vw(5) 0 vw(20);
            font-size: vw(44);
          }
          p {
            font-size: vw(28);
            line-height: vw(38);
          }
          button {
            width: vw(60);
            height: vw(60);
            top: vw(20);
            right: vw(20);
          }
          a {
            display: block;
            font-weight: $light;
            margin: 30px 0 0;
            padding: 20px;
            border-radius: 16px;
            color: #fff;
            font-size: 21px;
            background-color: #ff7a00;
            em {
              font-weight: $medium;
              font-style: normal;
              color: #fff;
              font-size: 21px;
              margin: 0 5px 0 0;
            }
          }
        }
        &:nth-of-type(1) {
          .item_icon {
            width: vw(72);
            height: vw(80);
            top: 4.5%;
            left: 20%;
          }
          .map_arrow {
            top: 9%;
            left: 20%;
          }
          .elm_popup {
            top: 23%;
            left: 0;
            &:after {
              left: 9.5%;
            }
          }
        }
        &:nth-of-type(2) {
          .item_icon {
            width: vw(210);
            height: vw(290);
            top: 21.5%;
            left: 25%;
          }
          .map_arrow {
            top: 33%;
            left: 37%;
          }
          .elm_popup {
            top: 53%;
            left: 0;
            &:after {
              left: 33.5%;
            }
          }
        }
        &:nth-of-type(3) {
          .item_icon {
            width: vw(181);
            height: vw(181);
            top: 52.5%;
            left: 20%;
          }
          .map_arrow {
            left: 26.5%;
            bottom: 18%;
          }
          .elm_popup {
            top: 4%;
            left: 0;
            &:after {
              left: 19%;
              top: auto;
              bottom: -6%;
            }
          }
        }
        &:nth-of-type(4) {
          .item_icon {
            width: vw(250);
            height: vw(170);
            top: 5.8%;
            right: 10.5%;
          }
          .map_arrow {
            top: 0;
            right: 15%;
          }
          .elm_popup {
            top: 26%;
            left: 0;
            &:after {
              left: 80%;
            }
          }
        }
        &:nth-of-type(5) {
          .item_icon {
            width: vw(154);
            height: vw(142);
            bottom: 35%;
            right: 25.5%;
          }
          .map_arrow {
            right: 25.5%;
            bottom: 45%;
          }
          .elm_popup {
            top: -7%;
            left: 0;
            &:after {
              left: 73%;
              top: auto;
              bottom: -6%;
            }
          }
        }
      }
      .map_arrow {
        width: vw(78);
        height: vw(105);
        background: url(/img/attractions/map_icon_mo.png) 50% 50% no-repeat;
        background-size: cover;
        position: absolute;
        /* animation: motion 0.5s linear 0s infinite alternate; */
        /* -webkit-animation: motion 0.5s linear 0s infinite alternate; */
        @keyframes motion {
          0% {
            margin-top: 0;
          }
          100% {
            margin-top: 10px;
          }
        }
      }
    }
  }
</style>
