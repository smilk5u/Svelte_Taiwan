<nav id="pc_nav">
  <ul>
    <li><a href="/admin/member" data-sveltekit-replacestate data-sveltekit-preload-data="">회원관리</a></li>
    <li><a href="/admin/mainMenu" data-sveltekit-replacestate data-sveltekit-preload-data="">대메뉴관리</a></li>
    <li><a href="/admin/subMenu" data-sveltekit-replacestate data-sveltekit-preload-data="">서브메뉴관리</a></li>
    <li><a href="/admin/category" data-sveltekit-replacestate data-sveltekit-preload-data="">카테고리관리</a></li>
    <!-- <li><a href="board">게시판관리</a></li> -->
    <li><a href="/admin/post" data-sveltekit-replacestate data-sveltekit-preload-data="">게시물관리</a></li>
  </ul>
</nav>

<style lang="scss">
  #pc_nav {
    width: 15%;
    background: #2a3f50;
    a {
      height: 60px;
      line-height: 60px;
      display: block;
      color: #fff;
      text-align: center;
      font-size: 16px;
      &:hover, &:focus {
        background: #475c6d;
      }
    }
  }
  @media (max-width: 1023px) {
    #pc_nav {
      display: none;
    }
  }
</style>
