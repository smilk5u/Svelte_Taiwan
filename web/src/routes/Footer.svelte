<footer class="at-footer">
  <div class="ft_link">
    <div class="con">
      <div class="pull-left">
        <a href="/" class="ft_logo">
          <img src="/img/ft_logo_.png" />
        </a>
        <ul>
          <li>
            <a href="https://www.taiwantour.or.kr/bbs/page.php?hid=privacy"
              >개인정보처리방침</a
            >
          </li>
          <li>
            <a href="https://www.taiwantour.or.kr/bbs/page.php?hid=provision"
              >이용약관</a
            >
          </li>
          <li>
            <a href="https://www.taiwantour.or.kr/bbs/page.php?hid=noemail"
              >이메일수집거부</a
            >
          </li>
        </ul>
      </div>
    </div>
  </div>
  <div class="ft_info">
    <div class="con">
      <div class="pull-left">
        <ul>
          <li class="title">대만관광청</li>
          <li>
            <span>서울사무소</span>
            <p>서울시 중구 남대문로 10길 9 경기빌딩 9층 902호</p>
          </li>
          <li>
            <span>부산지부</span>
            <p>부산광역시 중구 중앙동 4가 25-2 유창빌딩 9층 907호</p>
          </li>
        </ul>
        <p class="copyright">
          Copyright© 2019 Tourism Bureau. Rep. of China(Taiwan). All rights
          reserved
        </p>
      </div>
      <div class="pull-right">
        <ul>
          <li>
            <a
              href="https://www.facebook.com/taiwantour.kr/"
              target="_blank"
              class="facebook"
            >
              페이스북
            </a>
          </li>
          <li>
            <a
              href="https://www.youtube.com/channel/UCLEM53JziPYK0eCBFpgl94g"
              target="_blank"
              class="youtube"
            >
              유튜브
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/taiwantour_kr/"
              target="_blank"
              class="instagram"
            >
              인스타그램
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>

<style lang="scss">
  @import "/src/styles/variables.scss";

  .facebook {
    background: url("/img/ico_facebook_tail.png") no-repeat center / auto;
    text-indent: -999em;
  }
  .youtube {
    background: url("/img/ico_youtube_tail.png") no-repeat center / auto;
    text-indent: -999em;
  }
  .instagram {
    background: url("/img/ico_instagram_tail.png") no-repeat center / auto;
    text-indent: -999em;
  }
  @media (max-width: 1420px) {
    .at-footer .con {
      padding: 0 2%;
    }
    .at-footer .ft_info .pull-right ul {
      right: 2%;
    }
  }
  @media (max-width: 768px) {
    .at-footer .ft_link {
      height: vw(137);
      padding: vw(46) vw(40) vw(40);
      overflow: visible;
    }
    .at-footer {
      background-color: red;
      .con {
        padding: 0;
      }
      .ft_logo {
        width: vw(150);
        display: block;
        img {
          width: 100%;
        }
      }
      .ft_link {
        &:after {
          width: 100%;
        }
        .pull-left {
          display: block;
          ul {
            position: relative;
            bottom: vw(-68);
            z-index: 3;
            justify-content: left;
            li {
              a {
                font-size: vw(24);
              }
            }
          }
        }
      }

      .ft_info {
        padding: 0 vw(40);
        .title {
          font-size: vw(24);
        }
        .copyright {
          font-size: vw(22);
        }
        .pull-left {
          ul {
            padding: vw(70) 0 0;
            // position: relative;
            // top: vw(70);
            li {
              span {
                width: vw(100);
                margin: 0 vw(12) 0 0;
                font-size: vw(22);
              }
              p {
                font-size: vw(22);
              }
            }
          }
        }
        .pull-right {
          ul {
            margin: vw(40) 0 0;
            position: static;
            justify-content: left;
            li {
              width: vw(70);
              height: vw(70);
            }
          }
        }
      }
    }
  }
  @media (max-width: 480px) {
    .at-footer {
      .ft_info {
        .pull-left {
          ul {
            li {
              span {
                width: 100%;
                display: block;
              }
            }
          }
        }
      }
    }
  }
</style>
