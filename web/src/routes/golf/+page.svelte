<div class="at-container">
  <div class="at-content">
    <div class="page-wrap">
      <div class="amina-header">
        <span class="header-breadcrumb pull-right text-muted">
          <i class="fa fa-home" /> 홈 &gt; 대만 골프 &gt; 대만 골프
        </span>
        <div class="div-title-underbar font-18">
          <span class="div-title-underbar-bold border-color">
            <b>대만 골프</b>
          </span>
        </div>
      </div>
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossorigin="anonymous"
      />
      <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet" />

      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/4.4.1/css/swiper.min.css"
      />

      <link
        rel="stylesheet"
        href="https://d19m59y37dris4.cloudfront.net/directory/2-0/vendor/magnific-popup/magnific-popup.css"
      />

      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
        integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
        crossorigin="anonymous"
      />
      <div class="at-wrapper">
        <div
          class="golf-background"
          style="background-image:url('/img/22_0030361.jpg')"
        >
          <div class="container py-5 py-sm-7 text-center mb-5 mt-3">
            <div class="py-md-6 col-xl-8">
              <h1
                class="display-5 text-left text-md-start text-light pl-3 fw-bold"
              >
                따뜻한 기후에서 자유롭게 스윙할 수 있는 대만으로 골프를 즐기러
                오세요.
              </h1>

              <p
                class="text-left text-md-start text-light mb-6 mb-lg-8 pl-3 aos-init aos-animate"
                data-aos="fade-up"
              >
                대만은 산이 많은 섬으로 대부분의 골프장은 산비탈이나 언덕이 많은
                지형에 지어졌으며 산지형 코스는 대만 골프장의 공통적인
                특징입니다. 풍부한 지형 변화는 높고 낮은 드롭 샷 차이를 만들 수
                있습니다. 대만 특유의 기복 지형과 원시 지형은 마스터들에게
                창의적인 영감을 선사했으며 타격의 재미와 도전을 가져다주는
                독특한 페어웨이 디자인을 만들었습니다. 눈 아래 펼쳐지는
                청산녹수의 절경은 페어웨이의 풍경을 더욱 아름답게 만듭니다.
              </p>
            </div>
          </div>
          <div class="container bg-secondary rounded-3 mb-3">
            <form class="" name="filter-form" id="golf-form" method="POST">
              <input type="hidden" name="action" value="filter" />
              <div class="d-lg-flex align-items-center px-4 pt-4 pb-3">
                <div class="d-sm-flex align-items-center flex-grow-1">
                  <div class="mb-3 pb-1 w-100 mb-sm-4 me-sm-3">
                    <label class="form-label" for="from-destination">지역</label
                    >
                    <select
                      class="form-select"
                      id="golf-group"
                      name="filter_gorup"
                    >
                      <option value="">선택해주세요</option>
                    </select>
                  </div>
                  <div class="mb-3 pb-1 w-100 mb-sm-4 me-sm-3">
                    <label class="form-label" for="to-destination">지역</label>
                    <select
                      class="form-select"
                      id="golf-area"
                      name="filter_area"
                    >
                      <option value="">선택해주세요</option>
                    </select>
                  </div>
                  <div class="mb-3 pb-1 w-100 mb-sm-4 me-sm-3">
                    <label class="form-label" for="to-destination">내용</label>
                    <input
                      class="form-control rounded"
                      type="text"
                      placeholder=""
                      name="filter_query"
                    />
                  </div>
                </div>
                <div class="d-sm-flex align-items-center">
                  <div class="text-center text-sm-start mt-2 mt-sm-4 mb-4">
                    <button
                      class="btn btn-primary btn-action-search"
                      type="button"
                    >
                      검색
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @import "/src/styles/variables.scss";
  a {
    text-decoration: none;
  }
  .golf-background {
    position: relative;
    z-index: 1;
    &:after {
      width: 100%;
      height: 100%;
      content: "";
      display: block;
      position: absolute;
      background-color: rgba(0, 0, 0, 0.4);
      top: 0;
      left: 0;
    }
    .container {
      position: relative;
      z-index: 2;
    }
  }
  .amina-header {
    line-height: 22px;
    margin-bottom: 15px;
  }
  .amina-header .header-breadcrumb {
    margin-top: 4px;
  }
  @media all and (max-width: 460px) {
    .responsive .amina-header .header-breadcrumb {
      display: none;
    }
  }
  .at-container {
    padding: 0;
    max-width: inherit;
    margin: 0 auto;
  }

  .img-fluid {
    width: 100%;
  }
  .bg-secondary {
    background-color: #fff !important;
  }
  .text-primary {
    color: #ff7200 !important;
  }
  .btn-primary,
  .btn-primary:hover {
    background-color: #ff7200;
    border-color: #ff7200;
  }
  .page {
    margin: 0;
  }

  .at-body .at-container {
    padding: 0;
  }
  .sub_wrap,
  .sub_menu,
  .sub_drop {
    display: none;
  }
  .golf-background {
    width: 100%;
    min-height: 500px;
    position: relative;
    margin: 0px;
    padding-top: 120px;
    padding-bottom: 50px;
    background-color: #000;
    background-position: top center;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
  }

  .golf_kv,
  .carousel-item {
    width: 100%;
    height: 400px;
  }
  .carousel-indicators {
    margin-left: auto;
    margin-right: auto;
  }
  .container-filter-result {
    display: none;
  }
  .kv-block {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  .area-list .card-title {
    min-height: 48px;
  }
  img.area-list-img {
    height: 200px;
  }
  .golf-detail .golf-descr {
    font-size: 1rem;
    line-height: 2rem;
  }

  .icon-rounded.icon-rounded-sm {
    width: 3rem;
    height: 3rem;
    line-height: 3rem;
  }
  .text-break {
    word-break: keep-all !important;
  }
  .swiper-lazy {
    width: 600px;
    height: 400px;
    background-size: cover;
    background-position: center;
  }
</style>
