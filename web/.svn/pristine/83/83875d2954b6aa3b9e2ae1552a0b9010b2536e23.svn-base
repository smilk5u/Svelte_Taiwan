<script>

  import {goto} from '$app/navigation';
  import { onMount } from "svelte";
  import { page } from '$app/stores';
  import {fetchData} from "$lib/common";
  import { writable } from 'svelte/store';

  const seq = $page.params.seq;

    // initialData를 writable 스토어로 생성
    const initialData = writable({
      subject: '',
      regDate: '',
      filepath: '',
      content: '',
      seq: 0,
    }); // 기본값으로 초기화

    onMount(async () => {
      const data = await fetchData("/api/boardDetail?seq="+seq,'');
      initialData.set(data);
    });
    
    /**
       * @param {any} seq
       */
    function handleClick(seq) {
        goto(`/admin/post_modify/${seq}`, { replaceState: false });
    }
</script>

<div class="page_title">
  <h2>게시물상세</h2>
</div>

<div class="part" >
  <div class="post_detail">
    <h6>{$initialData.subject}</h6>
    <ul class="post_info">
      <li>작성일</li>
      <li class="post_date">{$initialData.regDate}</li>
    </ul>
    <div class="post_text">
      {#if $initialData.filepath}
        {#if $initialData.seq > 777}
        <img src={`${$initialData.filepath}`} alt="이미지입니다">
        {:else}
        <img src={`https://www.taiwantour.or.kr${$initialData.filepath}`} alt="이미지입니다">
        {/if}
      {/if} 
      {@html $initialData.content}
    </div>
  </div>
  <ul class="etc_buttons register_list">
    <li><button on:click={() => handleClick($initialData.seq)}>수정</button></li>
    <li><button><a href="/admin/post">목록</a></button></li>
  </ul>
</div>
<style lang="scss">
.post_detail{
  max-width: 900px;
  border-bottom: 1px solid #cacaca;
  h6{
    padding:20px 10px;
    font-size: 1.1rem;
  }
}
.post_info {display: flex;border-top: 1px solid #cacaca;border-bottom: 1px solid #cacaca;}
.post_info li{width:20%; height:40px; padding:0 10px; line-height:40px;background: #f4f4f4;}
.post_info li + li{width:80%; background: #fff;}
.post_text{min-height:400px; padding: 3rem 10px;}
</style>