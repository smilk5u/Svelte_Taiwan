<script>
  import MapLink from "../mapLink.svelte";
</script>

<!-- 메인 컨텐츠 -->
<div class="at-container">
  <MapLink />
  <div class="tab_content">
    <div class="page">
      <h2>교통카드</h2>
    </div>
    <ul class="tab pass">
      <li><a href="/info/iPASS">iPASS</a></li>
      <li><a href="/info/taipei_pass">Taipei Pass</a></li>
      <li class="active"><a href="/info/easy_card">Easy Card</a></li>
    </ul>
    <ul class="city">
      <li>
        <div class="image">
          <img
            src="/img/info/m06_05_03_01.jpg"
            class="pc_elm"
            alt="이지카드 이미지"
          />
          <img
            src="/img/info/mm06_05_03_01.jpg"
            class="mo_elm"
            alt="이지카드 이미지"
          />
        </div>
        <div class="content">
          <h4>이지카드(Easy Card)</h4>
          <p>
            이지카드(EASY CARD)는 카드 한 장으로 타이베이[台北] 및
            가오슝[高雄]의 지하철, 버스,<br />
            주차장, 편의점 등 제휴업체에서의 지불이 가능한 비접촉식 다목적 전자교통카드입니다.<br
            />
            이지카드는 센서 기능이 포함된 장치에서 모두 사용할 수 있습니다.<br
            />
            사용 시 카드를 가볍게 센서에 갖다 대면 신속하게 결제가 완료되기 때문에
            동전을 <br />
            준비하거나 티켓을 재구매하는 등의 번거로움을 피할 수 있으며, 각 지하철
            역사에 <br />
            설치된 금액 충전기나 서비스 데스크 또는 편의점에서 쉽고 간편하게 충전할
            수 있습니다. <br />
            (1회 최저 충전 금액 NT$ 100 )<br />
            매 회 타이베이 지하철 이용 시 승차 요금의 20% 할인 혜택 및 타이베이 지하철과
            <br />
            버스 "환승할인” 혜택을 받으실 수 있습니다.
          </p>
        </div>
      </li>
    </ul>
  </div>
</div>

<!-- //메인 컨텐츠 -->

<style lang="scss">
  @import "/src/styles/variables.scss";

  .at-body {
    .at-container {
      margin: 0 auto;
    }
  }
  h4 {
    font-size: 22px;
    color: #333;
    margin-bottom: 10px;
  }
  ul.city {
    padding: 0;
    margin: 70px 0 0;
    list-style: none;
  }
  ul.city li {
    overflow: hidden;
    border: 1px solid #e5e5e5;
    position: relative;
  }
  ul.city li > div.image {
    width: 532px;
    float: left;
  }
  ul.city li > div.content {
    width: calc(100% - 532px);
    float: left;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
  ul.city li > div.content p {
    margin-top: 15px;
  }
  ul.city li:first-of-type {
    margin-bottom: 80px;
  }
  ul.city li:first-of-type > div.content {
    left: 560px;
  }
  @media (max-width: 1350px) {
    ul.city li > div.image {
      width: 35%;
    }
    ul.city li > div.image img {
      width: 100%;
    }
    ul.city li > div.content {
      width: 65%;
    }
    ul.city li:first-of-type > div.content {
      left: 41%;
    }
  }
  @media (max-width: 991px) {
    h4 {
      font-size: 20px;
    }
    p {
      font-size: 15px;
    }
    ul.city li:first-of-type {
      margin-bottom: 40px;
    }
    ul.city li > div.image {
      width: 100%;
    }
    ul.city li > div.content {
      width: 100%;
      position: static;
      transform: none;
      padding: 0 5%;
      margin: 50px 0;
    }
    ul.city li > div.content p br {
      display: none;
    }
  }
  @include mobile {
    ul.city {
      margin: vw(20) 0 0;
    }
    .tab_content {
      padding: vw(40) 0 0;
      .page {
        padding: vw(20) 0 vw(20);
      }

      .page h2 {
        font-size: vw(34);
        text-align: left;
      }
    }
    h4 {
      font-size: 16px;
    }
    p {
      font-size: 13px;
    }
  }
</style>
