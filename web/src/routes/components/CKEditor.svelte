<script>
    import { onMount, onDestroy } from "svelte";
    import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
    import { env } from "$env/dynamic/public";
    import { createEventDispatcher } from "svelte";

    const BACKEND_HOST = env.PUBLIC_BACKEND_HOST;

    export let param3 = "";

    let editorInstance;
    const dispatch = createEventDispatcher();

    onMount(() => {
        editorInstance = ClassicEditor.create(
            document.querySelector("#editor"),
            {
                // CKFinder 설정
                ckfinder: {
                    // 이미지 업로드를 위한 CKFinder 설정
                    uploadUrl: `${BACKEND_HOST}/api/editorImgUpload`,
                },
            }
        )
            .then((editor) => {
                editorInstance = editor;
                editor.setData(param3); // 컴포넌트로부터 받은 content 데이터를 에디터에 설정
                editor.model.document.on("change:data", () => {
                    param3 = editor.getData();
                    dispatch("param3", param3); // 이벤트 디스패치로 내용 업데이트 전달
                });
            })
            .catch((error) => {
                console.error(error);
            });
    });

    onDestroy(() => {
        if (editorInstance) {
            // editorInstance.destroy().then(() => {
            //   editorInstance = null;
            // });
        }
    });
</script>

    <div id="editor" class="editor"/>

<style>
    .editor {
        width: 100%;
        height: 500px;
        overflow-y: scroll;
    }
</style>
