<script>
    // @ts-nocheck
    import { onMount } from "svelte";
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import { faChevronUp, faChevronDown, faXmark, } from "@fortawesome/free-solid-svg-icons";
    import { fetchData } from "$lib/api/fetch";
    import {moveRowUp, moveRowDown, moveRowX} from "$lib/common";

    /** @type {import('./$types').PageData} */
    let mainMenu = [];
    let subMenu = [];
    let initialData = [];

    onMount(async () => {
        const mainMenuList = await fetchData("/api/mainMenuList?val=sub&combo=1", '');
        const subMenuList = await fetchData("/api/subMenuList?mainSeq=1&combo=1",'');
        const categoryList = await fetchData("/api/categoryList?mainSeq=1&subSeq=6",'');

        mainMenu= mainMenuList;
        subMenu= subMenuList;
        initialData= categoryList;
    });

    function addRow() {
        const newRow = {
            seq: "",
            name: "",
            type: "0",
            url: "",
            sort: "",
            enabled: "true"
        };
        initialData = [...initialData, newRow];
    }

    function submitForm() {

        // mainMenu 선택값을 사용하여 fetch 요청 시 mainSeq를 포함
        var mainMenuSelect = document.getElementById('mainMenu');
        var mainSeq = mainMenuSelect.value;
        var subMenuSelect = document.getElementById('subMenu');
        var subSeq = subMenuSelect.value;

        const form = document.getElementById("frm");
        if (form instanceof HTMLFormElement) {
            const formDataArray = [];

            // 각 <tr> 요소에 대해 폼 데이터 생성
            const rows = form.querySelectorAll("tbody tr");
            rows.forEach((row) => {
                const inputs = row.querySelectorAll("input, select");
                const formData = {};
                inputs.forEach((input) => {
                    const name = input.getAttribute("name");
                    const value = input.value;
                    formData[name] = value;
                });
                formData['mainSeq'] = mainSeq;
                formData['subSeq'] = subSeq;
                formDataArray.push(formData);
            });

            fetchData(`/api/saveCategory?mainSeq=${mainSeq}&subSeq=${subSeq}`, formDataArray)
                .then((data) => {
                    console.log("Response:", data);
                    alert('등록되었습니다.')
                   //window.location.reload();
                })
                .catch((error) => {
                    console.error("Fetch Error:", error);
                });
        } else {
            console.error("Form element not found");
        }
    }

    let selectedOption = "";
    async function handleSelect(event) {
        selectedOption = event.target.value;
        await setSubMenu(selectedOption);
    }
    let selectedOptionSub = "";
    async function handleSelectSub(event) {
        // mainMenu 선택값을 사용하여 fetch 요청 시 mainSeq를 포함
        var mainMenuSelect = document.getElementById('mainMenu');
        var mainSeq = mainMenuSelect.value;

        selectedOptionSub = event.target.value;
        await setInitialData(mainSeq, selectedOptionSub);
    }

    async function setSubMenu(mainSeq) {
        const response = await fetchData(`/api/subMenuList?mainSeq=${mainSeq}&combo=1`);
        subMenu = response;
        if(subMenu.length == 0){
            initialData = [];
        }
        delayForceChangeEvent();// subMenu 업데이트 후 forceChangeEvent 호출
    }

    async function setInitialData(mainSeq,subSeq) {
        if(subSeq == null || subSeq == '')  return;
            
        const response = await fetchData(`/api/categoryList?mainSeq=${mainSeq}&subSeq=${subSeq}`);
        initialData = response;
    }

    async function forceChangeEvent() {
        const selectbox = document.getElementById('subMenu');
        selectbox.dispatchEvent(new Event('change'));
    }

    function delayForceChangeEvent() {
        setTimeout(forceChangeEvent, 100);
    }

    async function menuDel(i, mainSeq, subSeq, category){
        const cnt = await fetchData("/api/getBoardCnt", {mainSeq, subSeq, category});
        if(cnt > 0){
            alert('해당 메뉴의 등록된 게시글이 있습니다. \n게시글 삭제 후 이용 가능합니다.');
            return;
        }
        initialData = moveRowX(i, initialData)
    }

</script>

<div class="page_title">
    <h2>카테고리관리</h2>
</div>
<div class="part">
    <div class="search_top_wrap">
        <ul class="search_row">
            <li>
                <span>대메뉴</span>
                <select name="mainMenu" id="mainMenu" on:change={handleSelect}>
                    {#each mainMenu as item, index}
                        <option value={item.seq}>{item.name}</option>
                    {/each}
                </select>
            </li>
            <li>
                <span>서브메뉴</span>
                <select name="subMenu" id="subMenu" on:change={handleSelectSub}>
                    {#each subMenu as item, index}
                        <option value={item.seq}>{item.title}</option>
                    {/each}
                </select>
            </li>
        </ul>
        <div class="etc_wrap">
            <div class="etc_buttons">
                <button on:click={addRow}>카테고리 추가</button>
            </div>
        </div>
    </div>
    <div class="table_srcoll">
        <form id="frm" name="frm">
            <table>
                <caption>게시판관리</caption>
                <thead>
                    <tr>
                        <th>no</th>
                        <th>name</th>
                        <th>type</th>
                        <th>url</th>
                        <th>enabled</th>
                        <th>관리</th>
                    </tr>
                </thead>
                <tbody>
                    {#each initialData as row, i}
                        <tr id="row-{i}">
                            <td >{i + 1}
                                <input type="hidden" name="seq" bind:value={row.seq} readonly="readonly"/>
                                <input type="hidden" name="sort" bind:value={i}/>
                            </td >
                            <td ><input type="text" name="name" bind:value={row.name}/></td >
                                <td>
                                    <select name="type">
                                        <option value="0" selected={row.type === 0}>게시판</option>
                                        <option value="1" selected={row.type === 1}>페이지</option>
                                        <option value="2" selected={row.type === 2}>링크</option>
                                    </select>
                                </td>
                                <td ><input type="text" name="url" bind:value={row.url}/></td >
                            <td>
                                <select name="enabled">
                                    <option value="true" selected={row.enabled === 'true'}>true</option>
                                    <option value="false" selected={row.enabled === 'false'}>false</option>
                                </select>
                            </td>
                            <td>
                                <div class="aa">
                                    <!-- svelte-ignore a11y-click-events-have-key-events FontAwesomeIcon-->
                                    <div on:click={() => initialData = moveRowUp(i, initialData)} class="icon">
                                        <FontAwesomeIcon icon={faChevronUp}/>
                                    </div>
                                    <!-- svelte-ignore a11y-click-events-have-key-events FontAwesomeIcon-->
                                    <div on:click={() => initialData = moveRowDown(i, initialData)} class="icon">
                                        <FontAwesomeIcon icon={faChevronDown}/>
                                    </div>
                                    <!-- svelte-ignore a11y-click-events-have-key-events FontAwesomeIcon-->
                                    <div on:click={() => menuDel(i, row.mainSeq, row.subSeq, row.seq)} class="icon">
                                        <FontAwesomeIcon icon={faXmark}/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    {/each}
                    {#if initialData.length === 0}
                        <tr>
                        <td colspan="6">카테고리가 없습니다.</td>
                        </tr>
                    {/if}
                </tbody>
            </table>
            <button on:click={submitForm}>저장</button>
        </form>
    </div>
</div>

<style>
    .aa {
        display: flex;
    }
    tr:hover {
        background-color: #f4f4f4;
    }
    .icon {
        cursor: pointer;
        margin: 5px;
        flex: 1;
    }
</style>
