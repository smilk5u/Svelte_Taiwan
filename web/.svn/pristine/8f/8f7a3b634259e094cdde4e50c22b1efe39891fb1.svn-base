<script>
  import { onMount, createEventDispatcher } from 'svelte';

  /**
     * @type {any}
     */
   export let imagePath;

  const dispatch = createEventDispatcher();

  function closeModal() {
    dispatch('close');
    return true; // 브라우저의 기본 동작 계속
  }

  onMount(() => {
    document.body.classList.add('modal-open');

    return () => {
      document.body.classList.remove('modal-open');
    };
  });
</script>

<style>
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 9999;
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }

  .modal-image {
    max-width: 100%;
    max-height: 80vh;
    margin-bottom: 10px;
  }

  .modal-close {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
  }

  .modal-close button {
    margin-left: auto;
  }
</style>

{#if imagePath}
  <div class="modal">
    <div class="modal-close">
      <button on:click={closeModal}>닫기</button>
    </div>
    <img class="modal-image" src={imagePath} alt="이미지">
  </div>
{/if}
