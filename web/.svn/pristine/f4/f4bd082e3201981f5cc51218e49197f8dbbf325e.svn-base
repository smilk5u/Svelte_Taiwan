<script>
    import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
    import { onMount } from 'svelte';
    import UploadAdapter from '$lib/ckeditor/UploadAdapter';
  
    let editorInstance;
  
    onMount(() => {
      const editorElement = document.querySelector('#editor');
  
      if (editorElement) {
        ClassicEditor
          .create(editorElement, {
            extraPlugins: [UploadAdapter],
            toolbar: {
              items: [
                'heading',
                '|',
                'bold',
                'italic',
                'link',
                'bulletedList',
                'numberedList',
                'imageUpload',
                'insertTable',
                'blockQuote',
                'undo',
                'redo'
              ]
            }
          })
          .then(editor => {
            editorInstance = editor;
          })
          .catch(error => {
            console.error(error);
          });
      } else {
        console.error("Editor element not found");
      }
    });


  </script>
  
  <style>
    .editor {
      height: 400px;
    }
  </style>
  
  <div class="editor" id="editor"></div>
  