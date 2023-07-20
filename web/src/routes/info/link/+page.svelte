<script>
    // @ts-nocheck

    import { onMount } from "svelte";
    import { fetchBoardData } from "$lib/api/board";
    import { selectedCetegorySeq } from "$lib/stores/menu";
    import { env } from "$env/dynamic/public";

    const IMG_HOST = env.PUBLIC_IMG_HOST;

    let data = [];
    let list = [];
    let category = 99; // categorySeq 값

    let navigatepageNums = [];
    let pageSize = 5;
    let pageNum = 0;

    selectedCetegorySeq.subscribe((value) => {
        category = value;
    });

    $: if (category) {
        page_(1);
    }

    onMount(async () => {
        page_(1);
    });

    async function page_(idx) {
        pageNum = idx;
        let pageval = { pageSize, pageNum };
        data = await fetchBoardData(pageval);
        list = data.list;
        navigatepageNums = data.navigatepageNums;
    }
    let categoryName = '';
</script>

<!-- 메인 컨텐츠 -->
<div class="at-container list-wrap">
    <form>
        <div class="list-board">
            <ul id="list-body" class="list-body">
                {#each list as row, i}
                    <li class="list-item">
                        <div class="name">
                            {#if row.category === 10}
                            { categoryName = '기관'}
                            {:else if row.category === 11}
                            { categoryName = '항공사'}
                            {:else if row.category === 12}
                            { categoryName = '패키지상품'}
                            {:else if row.category === 13}
                            { categoryName = '골프상품'}
                            {:else if row.category === 14}
                            { categoryName = '에어텔'}
                            {/if}
                        </div>
                        <div class="image">
                            <img
                                src={IMG_HOST + row.filepath}
                                alt="로고 1"
                            />
                        </div>
                        <div class="subject">
                            <span> {row.subject} </span>
                        </div>
                        <div class="info">
                            <span>
                                <a
                                    href={row.param1}
                                    target="_blank"
                                >
                                    <img
                                        src="/img/info/ico_link.png"
                                        alt="홈페이지 바로가기 아이콘"
                                    />
                                    홈페이지 바로가기
                                </a>
                            </span>
                            <span>
                                <a href="tel:{row.param2}">
                                    <img
                                        src="/img/info/ico_phone.png"
                                        alt="전화 아이콘"
                                    />
                                    {row.param2}
                                </a>
                            </span>
                        </div>
                    </li>
                {/each}
            </ul>
        </div>
    </form>
</div>

{#if list.length > 0}
    <nav class="noselect">
        <ul class="pagination justify-content-center">
            <li class="page-item {data.hasPreviousPage ? '' : 'disabled'}">
                <a
                    class="page-link"
                    on:click={() => page_(data.prePage)}
                    aria-label="Previous"
                >
                    <span aria-hidden="true">이전</span>
                </a>
            </li>
            {#each navigatepageNums as pn}
                <li class="page-item {pn == data.pageNum ? 'active' : ''}">
                    <a class="page-link" on:click={() => page_(pn)}>{pn}</a>
                </li>
            {/each}
            <li class="page-item {data.hasNextPage ? '' : 'disabled'}">
                <a
                    class="page-link"
                    on:click={() => page_(data.nextPage)}
                    aria-label="Next"
                >
                    <span aria-hidden="true">다음</span>
                </a>
            </li>
        </ul>
    </nav>
{/if}

<!-- //메인 컨텐츠 -->

<style>
    .list-board .list-body .thumb-icon a {
        color: rgb(51, 51, 51);
    }
</style>
