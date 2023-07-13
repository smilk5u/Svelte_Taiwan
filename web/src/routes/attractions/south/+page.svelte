<div class="intro_slide">Sub Navigation</div>

<div class="at-container">
  <div class="at-content">
    <div class="box-wrap">
      <div class="box-list">
        <a href="" class="item_elm">
          <div class="img_wrap">
            <img
              src="https://www.taiwantour.or.kr/data/file/m03/thumb-2105653078_lr03QT28_13c2975e6dfe595e7f1f39195365d077f19aa135_880x600.jpg"
              alt=""
            />
          </div>
          <button type="button" class="link">
            <span>MORE VIEW +</span>
          </button>
        </a>
        <h2>둥강진</h2>
        <div class="list-details">
          둥강진은 풍부한 해산물이 넘쳐나는 곳으로, 어시장에서 벌어지는 경매
          현장의 생동감 넘치는 볼거리와 식당에서 신선한 해산물을 맛볼 수 있는
          지역입니다.
        </div>
      </div>
      <div class="box-list">
        <a href="" class="item_elm">
          <div class="img_wrap">
            <img
              src="https://www.taiwantour.or.kr/data/file/m03/thumb-2105653078_tQ49uP61_283d666001dcba9c1fb8e0a3f8d14968a3616b24_880x600.jpg"
              alt=""
            />
          </div>
          <button type="button" class="link">
            <span>MORE VIEW +</span>
          </button>
        </a>
        <h2>헝춘진</h2>
        <div class="list-details">
          헝춘진은 산과 호수의 아름다움이 살아있는 지역으로, 백여 년의 역사가
          깃든 상가 건물과 옛 거리가 존재하며, 반세기 이상의 전통과 서양의
          바로크식 건축 양식의 조화가 아름다운 곳입니다. 대만 최남단에 위치한
          최고의 명성을 자랑하는 국립공원 컨딩 공원의 변화무쌍한 경관, 풍부한
          생태, 쪽빛 푸른 바다는 사람들의 발걸음을 끊임없이 인도하는 최고의 매력
          포인트입니다.
        </div>
      </div>
    </div>
  </div>
</div>

<style lang="scss">
  @import "/src/styles/variables.scss";
  .at-content {
    padding: 100px 0 0;
  }

  .box-wrap {
    &:after {
      content: "";
      display: block;
      clear: both;
    }
    .box-list {
      width: 47.857142%;
      padding: 0 0 8%;
      float: left;
      &:nth-of-type(even) {
        margin: 0 0 0 4.285714%;
      }
      .item_elm {
        position: relative;
      }
      .img_wrap {
        img {
          width: 100%;
        }
      }
      .link {
        position: absolute;
        display: block;
        right: 0;
        bottom: 0;
        background-color: #ff7200;
        span {
          padding: 10px 25px;
          font-size: 12px;
          display: block;
          color: #fff;
        }
      }
      h2 {
        padding: 20px 0 10px;
        display: block;
        font-size: 25px;
        line-height: 1;
        font-weight: 600;
        text-align: left;
        font-family: s-coredream-6bold;
      }
      .list-details {
        margin-top: 10px;
        color: #666;
        font-size: 15px;
        overflow: hidden;
        text-overflow: ellipsis;
        word-wrap: break-word;
        line-height: 1.5em;
        height: 3em;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
</style>
