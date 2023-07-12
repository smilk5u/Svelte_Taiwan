<script>
  // @ts-nocheck

  import { goto } from "$app/navigation";
  import { fetchData } from "$lib/common";
  import { onMount } from "svelte";

  let isUserIdAvailable = false;
  let userId = "";
  let password = "";
  let confirmPassword = "";

  // 아이디 중복 확인 로직 작성
  function checkUserIdAvailability() {
    if (userId.trim() === "") {
      alert("아이디를 입력해주세요.");
      return;
    }

    // 중복 확인 API 호출
    fetchData("/api/checkUserIdAvailability", { userId })
      .then((response) => {
        // 중복 여부에 따라 결과 처리
        const alertElement = document.querySelector(".alert");
        alertElement.textContent = "";

        if (response > 0) {
          // 사용 불가능한 아이디인 경우
          alertElement.classList.remove("yes");
          alertElement.classList.add("no");
          alertElement.textContent = "사용 불가합니다.";
        } else {
          isUserIdAvailable = true;
          // 사용 가능한 아이디인 경우
          alertElement.classList.remove("no");
          alertElement.classList.add("yes");
          alertElement.textContent = "사용 가능합니다.";
        }
      })
      .catch((error) => {
        console.error("Fetch Error:", error);
      });
  }

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  const passwordErrorMessage =
    "비밀번호는 영문자와 숫자를 포함하여 최소 8자 이상이어야 합니다.";
  const userIdRegex = /^[a-z0-9]{4,16}$/;
  const userIdErrorMessage =
    "아이디는 영문 소문자와 숫자로 이루어진 4~16자리여야 합니다.";

  function submitForm() {

    if (!isUserIdAvailable) {
      alert("아이디를 확인해주세요.");
      return;
    } else if (password !== confirmPassword) {
      alert("비밀번호가 일치하지 않습니다.");
      return;
    } else if (!passwordRegex.test(password)) {
      alert(passwordErrorMessage);
      return;
    } else if (!userIdRegex.test(userId)) {
      alert(userIdErrorMessage);
      return;
    }
    
    const form = document.getElementById("frm");
    if (form instanceof HTMLFormElement) {
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      fetchData("/api/saveUser", data)
        .then((data) => {
          goto("/admin/member");
        })
        .catch((error) => {
          console.error("Fetch Error:", error);
        });
    } else {
      console.error("Form element not found");
    }
  }

  $: if (password) {
    //  console.log(password)
    const alertElement = document.querySelector(".alert-pw");
    if (!passwordRegex.test(password)) {
      alertElement.textContent = passwordErrorMessage;
    } else {
      alertElement.textContent = "";
    }
  }

  $: if (userId) {
    // console.log(userId)
    isUserIdAvailable = false;
    // userId 값이 변경되면 alert 요소의 클래스를 제거
    const alertElement = document.querySelector(".alert");
    if (!userIdRegex.test(userId)) {
      alertElement.classList.remove("yes");
      alertElement.classList.add("no");
      alertElement.textContent = userIdErrorMessage;
    } else {
      alertElement.classList.remove("no");
      alertElement.classList.add("yes");
      alertElement.textContent = "";
    }
  }

  let isDuplicateButtonDisabled = true;
  $: {
    isDuplicateButtonDisabled = !userId || !userIdRegex.test(userId);
  }
</script>

<div class="page_title">
  <h2>회원추가</h2>
</div>

<div class="part">
  <form name="frm" id="frm">
    <table class="add_table">
      <caption> 회원추가 </caption>
      <colgroup>
        <col width="250px" />
        <col width="*%" />
      </colgroup>
      <tbody>
        <tr>
          <th
            >아이디
            <p>소문자,숫자로 이루어진 4~16자리</p>
          </th>
          <td>
            <div class="flex_td">
              <input type="text" name="userId" bind:value={userId} />
              <button
                class="large_button"
                on:click={checkUserIdAvailability}
                disabled={isDuplicateButtonDisabled}>중복확인</button
              >
            </div>
            <p class="alert" />
          </td>
        </tr>
        <tr>
          <th>
            비밀번호
            <p>영문,숫자 8자 이상</p>
          </th>
          <td>
            <input type="text" name="password" bind:value={password} />
            <p class="alert-pw" />
          </td>
        </tr>
        <tr>
          <th>비밀번호 확인</th>
          <td>
            <input type="text" bind:value={confirmPassword} />
          </td>
        </tr>
        <tr>
          <th>이름</th>
          <td>
            <input type="text" name="name" />
          </td>
        </tr>
        <tr>
          <th>닉네임</th>
          <td>
            <input type="text" name="nickName" />
          </td>
        </tr>
        <tr>
          <th>상태</th>
          <td>
            <select name="state">
              <option value="1">정상</option>
              <option value="2">차단</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  </form>
  <ul class="etc_buttons register_list">
    <li><button on:click={submitForm}>등록</button></li>
    <li><button><a href="/admin/member">목록</a></button></li>
  </ul>
</div>

<style lang="scss">
  @media (max-width: 480px) {
    table .flex_td {
      flex-wrap: wrap;
      justify-content: end;
    }
    table .flex_td .large_button {
      width: 100%;
      min-height: 0;
      margin: 5px 0 0;
    }
  }
</style>
