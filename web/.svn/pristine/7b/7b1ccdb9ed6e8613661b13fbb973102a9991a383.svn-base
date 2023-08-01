// searchParams.js

import { writable } from 'svelte/store';

export const searchParams = writable({
    pageSize: 10,
    pageNum: 0,
    mainSeq: 0,
    subSeq: 0,
    categorySeq: 0,
    searchOption: '',
    searchKeyword: '',
});

export function resetSearchParams() {
    searchParams.update(params => ({
        ...params,
        mainSeq: 1, 
        subSeq: 0,
        categorySeq: 0,
        searchOption: '',
        searchKeyword: '',
    }));
  }