<script>
  //link buttons
  import { slide } from "svelte/transition";
  import { fetchData } from "$lib/api/fetch";
  import { updateUser } from "$lib/stores/user";

  let isExpanded = false;
  // let rotate = 0;

  function clickHandler() {
    isExpanded = !isExpanded;
    // rotate = isExpanded ? 180 : 0;
    let triangles = document.querySelectorAll(".triangle");
    triangles.forEach((button) => {
      button.classList.toggle("turn");
    });
  }

  //로그아웃처리
  async function handleLogout() {
    if (confirm("로그아웃하시겠습니까?")) {
      try {
        fetchData("/api/logout", null)
          .then((data) => {
            console.log("Response:", data);
            // user 스토어를 초기화하고 clear
            updateUser(null);
            localStorage.removeItem("user");
            //location.href = "/login";
            window.location.href = "/admin/login"; //goto로 하면 스토어 업데이트가 안되서 페이지 리로드시킴 //goto("/login");
          })
          .catch((error) => {
            console.log(error);
            // 에러 처리 로직 작성
          });
      } catch (error) {
        console.error("로그아웃 처리 중 오류 발생:", error);
        alert(error);
      }
    }
  }

  /**
   * 키보드 이벤트 핸들러
   * Enter 또는 Space 키를 누를 경우 로그아웃 처리를 실행합니다.
   * @param {KeyboardEvent} event 키보드 이벤트 객체
   */
  function handleLogoutKey(event) {
    if (event.key === "Enter" || event.key === "Space") {
      handleLogout();
    }
  }

  function panelOpen() {
    const toggle = document.querySelector("#toggle");
    if (!toggle) return;
    toggle.classList.toggle("active");

    const overlay = document.querySelector("#overlay");
    if (!overlay) return;
    overlay.classList.toggle("open");

    const body = document.querySelector("body");
    if (!body) return;
    body.classList.toggle("hide");

    const menu = document.querySelectorAll(".overlay-list a");
    if (!menu) return;
    menu.forEach(function (menuItem) {
      menuItem.addEventListener("click", function () {
        toggle.classList.remove("active");
        overlay.classList.remove("open");
        body.classList.remove("hide");
      });
    });
  }
</script>

<header>
  <h1><a href="/admin/main">ADMINISTRATOR</a></h1>
  <ul class="link_buttons">
    <li class="go_home">
      <a target="_blank" href="/">홈페이지 가기</a>
    </li>
    <li class="select_account">
      <button on:click={handleLogout}>로그아웃</button>
    </li>
  </ul>

  <div id="mobile_nav">
    <button
      on:click={panelOpen}
      class="button_container"
      id="toggle"
      aria-controls="primary-menu"
      aria-expanded="false"
    >
      <span class="top" />
      <span class="middle" />
      <span class="bottom" />
    </button>
    <div class="overlay" id="overlay">
      <nav class="overlay-menu">
        <ul class="mobile_link_buttons">
          <li class="go_home">
            <a href="index.html">홈페이지 가기</a>
          </li>
          <li class="select_account">
            <button on:click={clickHandler} class="triangle"
              >관리자 <span>▼</span></button
            >
            {#if isExpanded}
              <ul transition:slide>
                <li>관리자정보</li>
                <li>기본환경</li>
                <!-- <li>로그아웃</li> -->
                <li
                  on:click={handleLogout}
                  on:keydown={handleLogoutKey}
                  tabindex="-1"
                >
                  로그아웃
                </li>
              </ul>
            {/if}
          </li>
        </ul>
        <ul class="overlay-list">
          <li><a href="member">회원관리</a></li>
          <li><a href="board">게시판관리</a></li>
          <li><a href="post">게시물관리</a></li>
        </ul>
      </nav>
    </div>
  </div>
</header>

<style lang="scss">
  header {
    height: 70px;
    padding: 0 30px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #2a3f50;
    &:after {
      width: 100%;
      height: 1px;
      content: "";
      display: block;
      position:absolute;
      bottom:0;
      left:0;
      background-color: #ffffff;
      opacity: .15;
    }
    h1 a {
      height: 70px;
      display: block;
      line-height: 70px;
      color: #fff;
      font-size: 23px;
    }
  }
  .link_buttons {
    display: flex;
    position: absolute;
    right: 1.25rem;
    z-index: 1;
    li {
      width: 120px;
      height: 40px;
      line-height: 40px;
      list-style: none;
      a {
        width: 100%;
        height: 100%;
        margin: 0;
        display: block;
        color: #fff;
        font-size: 14px;
      }
    }
  }
  .go_home {
    background: #245d8a;
    text-align: center;
    &:hover, &:focus {
      background: #245e8a98;
      // a {color:#2a3f50;}
    }
  }
  .link_buttons .select_account {
    margin: 0 0 0 10px;
    button {
      width: 100%;
      height: 100%;
      position: relative;
      text-align: center;
      border: none;
      color: #fff;
      background: #333333;
      span {
        position: absolute;
        right: 10px;
        top: 15px;
        color: #fff;
        font-size: 10px;
      }
      &:hover,&:focus {
        background: #33333391;
      }
    }
    li {
      width: 120px;
      height: 40px;
      line-height: 40px;
      list-style: none;
      background: #333333;
      border-bottom: 1px solid #999;
      color: #fff;
      font-size: 13px;
      a {
        width: 100%;
        height: 100%;
        display: block;
        color: #fff;
        text-align: center;
        font-size: 14px;
      }
    }
  }

  .select_account {
    button {
      &.turn {
        span {
          transform: rotate(180deg);
        }
      }
    }
  }

  #mobile_nav {
    display: none;
    position: relative;
    z-index: 1;
  }

  @media (max-width: 1023px) {
    #mobile_nav {
      display: block;
    }
    .link_buttons {
      display: none;
    }
  }
  @media (max-width: 480px) {
    header {
      padding: 0 15px;
    }
    .button_container {
      width: 30px;
    }
  }
</style>
