<script>
  // @ts-nocheck

  /** @type {import('./$types').PageData} */
  export let data;
  import { fetchData } from "$lib/api/fetch";
  import { goto } from "$app/navigation";

  async function submitForm(event) {
    if (confirm("수정하시겠습니까?")) {
      event.preventDefault();

      const form = document.querySelector('form[name="frm"]');
      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());

      var response = await fetchData("/api/saveUser", data);

      if (response > 0) {
        alert("수정되었습니다");
        goto("/admin/member", { replaceState: false });
      }
    }
  }
</script>

<div class="page_title">
  <h2>회원정보 수정</h2>
</div>

<div class="part">
  <form name="frm" id="frm">
    <table class="add_table">
      <caption> 회원 수정 </caption>
      <colgroup>
        <col width="250px" />
        <col width="*%" />
      </colgroup>
      <tbody>
        <tr>
          <th>아이디 </th>
          <td>
            <input type="hidden" name="id" bind:value={data.res.id} readonly />
            <input
              type="text"
              name="userId"
              bind:value={data.res.userId}
              readonly
            />
          </td>
        </tr>
        <tr>
          <th>이름</th>
          <td>
            <input type="text" name="name" bind:value={data.res.name} />
          </td>
        </tr>
        <tr>
          <th>닉네임</th>
          <td>
            <input type="text" name="nickName" bind:value={data.res.nickName} />
          </td>
        </tr>
        <tr>
          <th>상태</th>
          <td>
            <select name="state">
              <option value="1" selected={data.res.state == 1}>정상</option>
              <option value="2" selected={data.res.state == 2}>차단</option>
            </select>
          </td>
        </tr>
      </tbody>
    </table>
  </form>
  <ul class="etc_buttons register_list">
    <li><button on:click={submitForm}>수정</button></li>
    <li><button><a href="/admin/member">목록</a></button></li>
  </ul>
</div>

<style lang="scss">
</style>
