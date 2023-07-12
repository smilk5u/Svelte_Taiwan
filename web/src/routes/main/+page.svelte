<script>
  import { onMount } from "svelte";
  import { Swiper } from "swiper";

  // import function to register Swiper custom elements
  import { register } from "swiper/element/bundle";
  // register Swiper custom elements
  register();

  const onProgress = (e) => {
    const [swiper, progress] = e.detail;
    console.log(swiper, progress);
  };

  onMount(() => {
    const swiper = new Swiper("swiper-container", {
      loop: true,
    });
    const swiperEl = document.querySelector("swiper-container");
    // console.log(swiperEl);
    // swiper.slideTo(6, 1000);

    // swiperEl.addEventListener("swiper-progress", (event) => {
    //   const [swiper, progress] = event.detail;
    // });

    // swiperEl.addEventListener("swiper-slidechange", (event) => {
    //   console.log("slide changed");
    // });
  });
</script>

<!-- on:progress={onProgress} -->
<swiper-container
  navigation="true"
  pagination="true"
  slides-per-view="1"
  speed="100"
  loop="true"
  on:progress={onProgress}
  autoplay={{
    disableOnInteraction: false,
  }}
>
  <swiper-slide>Slide 1</swiper-slide>
  <swiper-slide>Slide 2</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
  <swiper-slide>Slide 3</swiper-slide>
</swiper-container>

<span />

<style lang="scss">
  swiper-container {
    width: 500px;
    height: 300px;
    background-color: red;
    swiper-slide {
      width: 100%;
      height: 100%;
    }
  }
  span {
    position: fixed;
    bottom: 0;
    right: 0;
    display: block;
    width: 300px;
    height: 20px;
    background-color: black;
  }
</style>
