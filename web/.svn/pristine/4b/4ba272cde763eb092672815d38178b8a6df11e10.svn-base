<script>
    // @ts-nocheck

    //import { load } from "./+page.js";
    import { onMount } from "svelte";
    import { FontAwesomeIcon } from "@fortawesome/svelte-fontawesome";
    import { faChevronUp, faChevronDown, faXmark, } from "@fortawesome/free-solid-svg-icons";
    import { fetchData } from "$lib/common";

    /** @type {import('../../subMenu/$types').PageData} */
    let mainMenu = [];
    let initialData = [];

    onMount(async () => {
       // const { props } = await load();
     //   mainMenu = props.mainMenu;
     //   initialData = props.initialData;

        const mainMenuList = await fetchData("/api/mainMenuList?val=sub", '');
        const subMenuList = await fetchData("/api/subMenuList?mainSeq=1",'');

        mainMenu=mainMenuList;
        initialData= subMenuList;

    });

    async function setInitialData(mainSeq) {
        const response = await fetchData(`/api/subMenuList?mainSeq=${mainSeq}`);
        initialData = response;
    }

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

    /**
     * @param {any} index
     */
    function moveRowUp(index) {
        console.log("UP" + index);
        if (index > 0) {
            const temp = initialData[index];
            initialData[index] = initialData[index - 1];
            initialData[index - 1] = temp;
        }
    }

    /**
     * @param {any} index
     */
    function moveRowDown(index) {
        console.log("down" + index);
        if (index < initialData.length - 1) {
            const temp = initialData[index];
            initialData[index] = initialData[index + 1];
            initialData[index + 1] = temp;
        }
    }

    /**
     * @param {any} index
     */
    function moveRowX(index) {
        console.log("x" + index);
        initialData = initialData.filter((_, i) => i !== index);
    }
    function submitForm() {

        // mainMenu 선택값을 사용하여 fetch 요청 시 mainSeq를 포함
        const mainMenuSelect = document.getElementById('mainMenu');
        var mainSeq = mainMenuSelect.value;

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
                    formData['mainSeq'] = mainSeq;
                });
                formDataArray.push(formData);
            });

            fetchData(`/api/saveSubMenu?mainSeq=${mainSeq}`, formDataArray)
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
    function handleSelect(event) {
        selectedOption = event.target.value;
        setInitialData(selectedOption);
    }
</script>

<div class="page_title">
    <h2>서브메뉴관리</h2>
</div>
<div class="part">
    <ul class="etc_buttons">
        <li>
            <select name="mainMenu" id="mainMenu" on:change={handleSelect}>
                {#each mainMenu as item, index}
                    <option value={item.seq}>{item.name}</option>
                {/each}
            </select>
            <button on:click={addRow}>메뉴 추가</button>
        </li>
    </ul>
    <div class="table_srcoll">
        <form id="frm" name="frm">
            <table>
                <caption>게시판관리</caption>
                <thead>
                    <tr>
                        <th>no</th>
                        <th>name</th>
                        <th>title</th>
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
                            <td ><input type="text" name="title" bind:value={row.title}/></td >
                            <td ><input type="text" name="description" bind:value={row.description}/></td >
                            <td>
                                <select name="type">
                                    <option value="0" selected={row.type === 0}>게시판</option>
                                    <option value="1" selected={row.type === 1}>페이지</option>
                                    <option value="2" selected={row.type === 2}>링크</option>
                                </select>
                            </td>
                            <td ><input type="text" name="url" bind:value={row.url}/>
                            </td >
                            <td>
                                <select name="enabled">
                                    <option value="true" selected={row.enabled === 'true'}>true</option>
                                    <option value="false" selected={row.enabled === 'false'}>false</option>
                                </select>
                            </td>
                            <td>
                                <div class="aa">
                                    <!-- svelte-ignore a11y-click-events-have-key-events FontAwesomeIcon-->
                                    <div on:click={() => moveRowUp(i)} class="icon">
                                        <FontAwesomeIcon icon={faChevronUp}/>
                                    </div>
                                    <!-- svelte-ignore a11y-click-events-have-key-events FontAwesomeIcon-->
                                    <div on:click={() => moveRowDown(i)} class="icon">
                                        <FontAwesomeIcon icon={faChevronDown}/>
                                    </div>
                                    <!-- svelte-ignore a11y-click-events-have-key-events FontAwesomeIcon-->
                                    <div on:click={() => moveRowX(i)} class="icon">
                                        <FontAwesomeIcon icon={faXmark}/>
                                    </div>
                                </div>
                            </td>
                        </tr>
                    {/each}
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
