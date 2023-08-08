<script>
  import Header from "./Header.svelte";
  import Footer from "./Footer.svelte";
  // import SubVisual from "./SubVisual.svelte";
  import Header_admin from "./Header_admin.svelte";
  import Footer_admin from "./Footer_admin.svelte";
  import Nav_admin from "./Nav_admin.svelte";
  import "./styles.css";
  import { onMount } from "svelte";
  import { page } from "$app/stores";
  import Nav from "./Nav.svelte";

  let isWorkList = false; // 워크리스트 확인용. 나중에 제거할것

  //console.log('root')

  onMount(() => {
    const currentPath = window.location.pathname;
    isWorkList = currentPath.startsWith("/workList");
  });

   // 경로 이름이 "/"와 같지 않을 경우 true로 설정
   $: shouldRenderNav = $page.url.pathname !== "/" && $page.url.pathname !== "/golf" && $page.url.pathname !== "/common/provision" && $page.url.pathname !== "/common/noemail" && $page.url.pathname !== "/common/privacy";
</script>

{#if $page.url.pathname.startsWith("/admin")}
  <div class="app admin">
    {#if !$page.url.pathname.startsWith("/admin/login")}
      <Header_admin />
    {/if}
    <div id="wrap">
      {#if !$page.url.pathname.startsWith("/admin/login")}
        <Nav_admin />
      {/if}
      <main>
        <section id="contents">
          <slot />
        </section>
      </main>
    </div>
    {#if !$page.url.pathname.startsWith("/admin/login")}
      <Footer_admin />
    {/if}
  </div>
{:else if isWorkList}
  <div class="app">
    <main>
      <section id="contents">
        <slot />
      </section>
    </main>
  </div>
{:else}
  <div class="app user">
    <Header />
    {#if shouldRenderNav}
      <Nav />
    {/if}
    <div id="wrap">
      <main>
        <!-- <SubVisual /> -->
        <section id="contents">
          <slot />
        </section>
      </main>
    </div>
    <Footer />
  </div>
{/if}

<style lang="scss">
</style>
