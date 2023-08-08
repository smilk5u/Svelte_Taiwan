<script>
  import FooterNav from "../../Footer_Nav.svelte";
</script>

<!-- 서브페이지 공통 -->
<div class="sub_visual">
  <div class="sub_cate">
    <div class="ct_cate">
      <strong>이메일 수집 거부</strong>
    </div>
  </div>
</div>
<!-- //서브페이지 공통 -->

<!-- 메인 컨텐츠 -->
<div class="at-body">
  <div class="at-container">
    <div class="txt_wrap">
      <p>
        본 사이트에 게시된 이메일 주소가 전자우편 수집 프로그램이나 그 밖의
        기술적 장치를 이용하여 무단으로 수집 되는 것을 거부합니다.
      </p>
      <p>
        이를 위반시 <b>「정보통신망 이용촉진 및 정보보호 등에 관한 법률」</b>에
        의해 형사처벌됨을 유념하시기 바랍니다.
      </p>
    </div>
  </div>
  <FooterNav />
</div>

<!-- //메인 컨텐츠 -->

<style lang="scss">
  @import "/src/styles/variables.scss";
  .at-container {
    display: flex;
    align-items: center;
    justify-content: center;
    .txt_wrap {
      padding: 100px 0 50px;
      text-align: center;
      p {
        font-size: 17px;
        font-family: $NotoSansKR;
        line-height: 30px;
        color: rgba(0, 0, 0, 0.9);
        b {
          font-size: 17px;
          font-family: $NotoSansKR;
          color: rgba(0, 0, 0, 1);
        }
      }
    }
    @include mobile {
      /* height: vw(200); */
      .txt_wrap {
        padding: vw(180) 0 vw(80);
        p {
          font-size: vw(25);
          line-height: vw(38);
          b {
            font-size: vw(25);
          }
        }
      }
    }
  }
</style>
