<script>
   import { onMount } from "svelte";
 
   onMount(() => {
     window.onload = function () {
       //질문과 답안을 객체 안에 넣기
       const arr = {
         q01: {
           question: "오늘은 자유 시간을 갖기로 했다",
           answer1: {
             text: "오늘은 숙소에서 쉬자!<br> 침대랑 하루 종일 물아일체가 된다",
             type: "I",
             ansImg: "images/01_02.png",
           },
           answer2: {
            
             text: "일단 나가볼까?<br> 대만의 현지를 마음껏 즐긴다",
             type: "E",
             ansImg: "images/01_03.png",
           },
           quesImg: "images/01_01.png",
         },
         q02: {
           question:
             "대만 도착! 길을 걷고 있는데,<br> 지나가던 대만인이 말을 건다.<br><br>  “찾는 곳 있으세요?",
           answer1: {
             text: "네! 근처에 맛있는 우육면 집이 있나요?”<br> 대화를 이어간다",
             type: "E",
             ansImg: "images/02_02.png",
           },
           answer2: {
             text: "어색한 미소를 지으며<br> 친구 옆에 가만히 서 있는다",
             type: "I",
             ansImg: "images/02_03.png",
           },
           quesImg: "images/02_01.png",
         },
         q03: {
           question: "맛집에 들어왔다.<br> 그런데 만석이네…",
           answer1: {
             text: "저기 자리 있다! 혹시 합석해도 될까요?”<br> 어떻게든 비집고 앉아서 먹는다",
             type: "E",
             ansImg: "images/03_02.png",
           },
           answer2: {
             text: "자리가 날 때까지 가게 밖에서<br> 얌전히 기다린다",
             type: "I",
             ansImg: "images/03_03.png",
           },
           quesImg: "images/03_01.png",
         },
         q04: {
           question: "대만 여행 중<br> 맛있어 보이는 밥집을 발견한 나는",
           answer1: {
             text: "간판에서 맛집의 기운이 느껴진다!<br> 맛집 각이야",
             type: "N",
             ansImg: "images/04_02.png",
           },
           answer2: {
             text: "(검색하며) 리뷰가 많고, 별점도 높으니<br> 맛은 보장되어 있겠군!",
             type: "S",
             ansImg: "images/04_03.png",
           },
           quesImg: "images/04_01.png",
         },
         q05: {
           question: "오늘의 여행 일정이 끝나고,<br> SNS에 게시글을 올리는 나는",
           answer1: {
             text: "몇백 년의 침식과 풍화 작용을 거쳐 자연적으로<br> 형성된 여왕머리바위가 너무 멋있었다.",
             type: "S",
             ansImg: "images/05_02.png",
           },
           answer2: {
             text: "바다에서 돌고래가 팍 튀어 오르는데<br> 너무 멋있었다! 완전 감동이었다! ",
             type: "N",
             ansImg: "images/05_03.png",
           },
           quesImg: "images/05_01.png",
         },
         q06: {
           question: "친구들에게 나눠줄<br> 기념품을 고르게 된 나는",
           answer1: {
             text: "실용성은 없지만 대만이 바로 떠오르는<br> 예쁘고 기억에 남을만한 선물로 고른다 ",
             type: "S",
             ansImg: "images/06_02.png",
           },
           answer2: {
             text: "친구들마다 요즘 가장 필요할 것 같은 선물로<br> 꼼꼼히 고른다 ",
             type: "N",
             ansImg: "images/06_03.png",
           },
           quesImg: "images/06_01.png",
         },
         q07: {
           question: "여행 중, 친구와 사소한 일로<br> 다퉜을 때 나는",
           answer1: {
             text: "나!! 진짜!! 너무!!! 화났어!!!!!",
             type: "F",
             ansImg: "images/07_02.png",
           },
           answer2: {
             text: "이런 점은 꼭 고쳐줬으면 좋겠어.<br> 이렇게 하면 되잖아?",
             type: "T",
             ansImg: "images/07_03.png",
           },
           quesImg: "images/07_01.png",
         },
         q08: {
           question:
             "친구가 대만의 자연경관이<br> 너무 아름다워서 감동이라고 할 때 나는",
           answer1: {
             text: "감동? 뭐가 감동적이라는 거야?",
             type: "T",
             ansImg: "images/08_02.png",
           },
           answer2: {
             text: "5초 만에 감정이입 완료<br> 옆에서 같이 글썽거린다",
             type: "F",
             ansImg: "images/08_03.png",
           },
           quesImg: "images/08_01.png",
         },
         q09: {
           question:
             "친구에게 깜짝 기념품 선물을 했을 때<br> 나를 신나게 하는 친구의 칭찬은?",
           answer1: {
             text: "너무 예쁘다! 최고야~!<br> 나 완전 감동했어~",
             type: "F",
             ansImg: "images/09_02.png",
           },
           answer2: {
             text: "고마워, 여행하느라 바빴을 텐데<br> 언제 이런 걸 생각했어?",
             type: "T",
             ansImg: "images/09_03.png",
           },
           quesImg: "images/09_01.png",
         },
         q010: {
           question: "내일 여행 일정에 입을<br>  옷을 고르는 나는",
           answer1: {
             text: "다음날 여행 코스를 미리 파악해서<br> 가장 어울리는 옷을 전날 밤에 골라 놓는다",
             type: "J",
             ansImg: "images/10_02.png",
           },
           answer2: {
             text: "나가기 직전 캐리어에서 마음에 드는 옷을 꺼내 입는다",
             type: "P",
             ansImg: "images/10_03.png",
           },
           quesImg: "images/10_01.png",
         },
         q011: {
           question: "하루 일정이 끝나고,<br> 친구가 야시장에 놀러가자고 한다",
           answer1: {
             text: "좋아!<br> 일단 나간다",
             type: "P",
             ansImg: "images/11_02.png",
           },
           answer2: {
             text: "야시장이면 구경도 하고 먹기도 하겠지?<br> 지갑, 모기약, 보조  배터리까지 준비 완료! ",
             type: "J",
             ansImg: "images/11_03.png",
           },
           quesImg: "images/11_01.png",
         },
         q012: {
           question: "친구와 함께 떠날<br> 대만 여행 계획을 짜게 된 나는",
           answer1: {
             text: "할 거면 제대로!<br> 일별, 시간 별로 세부 일정을 정리한다 ",
             type: "J",
             ansImg: "images/12_02.png",
           },
           answer2: {
             text: "비행기 표만 끊어 두면<br> 계획은 거의 끝난다고 생각한다 ",
             type: "P",
             ansImg: "images/12_03.png",
           },
           quesImg: "images/12_01.png",
         },
       };
 
       const step = document.querySelector(".step_now");
       const ques = document.querySelector(".question");
       const ans1 = document.querySelector(".answer1");
       const ans2 = document.querySelector(".answer2");
       const nexts = document.querySelectorAll(".answer");
       const quesImg = document.querySelector(".question_img");
       const ansImg = document.querySelector(".answer_img");
       const proBar = document.querySelector(".progress_bar div");
       const keys = Object.keys(arr);
 
       //클릭한 답안들이 들어갈 배열
       let result = [];
 
       let i = 1; //페이지 넘어갈때마다 질문과 답안 1씩 증가
 
       function clickHandler(clickedElement) {
         const classes = clickedElement.classList;
         let chooseType = null;
 
         ansImg.style.display = "none";
         quesImg.style.display = "block";
 
         if (classes.contains("answer1")) {
           chooseType = arr["q0" + i].answer1.type;
         } else if (classes.contains("answer2")) {
           chooseType = arr["q0" + i].answer2.type;
         }
 
         if (chooseType !== null) {
           result.push(chooseType);
           console.log(result);
         }
 
         if (i < keys.length) {
           //페이지 넘어갈때마다 질문 변경
           i++;
           step.innerHTML = 0 + [i];
           ques.innerHTML = arr["q0" + i].question;
           ans1.innerHTML = arr["q0" + i].answer1.text;
           ans2.innerHTML = arr["q0" + i].answer2.text;
           quesImg.src = arr["q0" + i].quesImg;
 
           let increment = i * 8.33;
           proBar.style.width = `${increment}%`;
 
           if (i >= 10) {
             step.innerHTML = [i];
           }
         } else if (i === keys.length) {
           //result안에 배열값에서 최종 결과 도출
           const finalResult = [
             ...new Set(
               result.filter((item, index) => result.indexOf(item) !== index)
             ),
           ];
           const updatedResult = finalResult
             .map((item) => item.replace(",", ""))
             .join("");
           location.href = `result_${updatedResult}.html`;
         } else {
           //location.href='result_${}.html'
         }
       }
 
       //초기화면에 보일 질문
       step.innerHTML = 0 + [i];
       ques.innerHTML = arr["q01"].question;
       ans1.innerHTML = arr["q01"].answer1.text;
       ans2.innerHTML = arr["q01"].answer2.text;
       quesImg.src = arr["q01"].quesImg;
 
       nexts.forEach((next) => {
         next.addEventListener("click", () => {
           ansImg.style.display = "block";
           quesImg.style.display = "none";
 
           const classes = next.classList;
           classes.add("active");
 
           //클릭한 답안에 해당되는 이미지 보여주기
           if (classes.contains("answer1")) {
             ansImg.src = arr["q0" + i].answer1.ansImg;
           } else if (classes.contains("answer2")) {
             ansImg.src = arr["q0" + i].answer2.ansImg;
           }
 
           setTimeout(() => {
             clickHandler(next);
             classes.remove("active");
           }, 700);
         });
       });
     }; //
   });
 </script>
 
 <div class="main">
   <h1 class="logo"><a href="/"><img src="images/logo.png" /></a></h1>
   <div class="step_wrap">
     <span class="step_now">01</span>
     <p class="step_total">/ 12</p>
   </div>
   <strong class="question" />
   <div class="answer1 answer" />
   <div class="answer2 answer" />
   <div class="">
     <img src="" class="question_img" />
     <img src="images/01_02.png" class="answer_img" />
   </div>
   <div class="progress_bar">
     <div />
   </div>
 </div>
 