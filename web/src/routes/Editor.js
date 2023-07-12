import { writable } from 'svelte/store';

// 초기 데이터 값
const initialEditorData = '';

// writable 스토어 생성
export const editorData = writable(initialEditorData);