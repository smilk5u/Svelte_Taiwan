import { writable } from 'svelte/store';

const isBrowser = typeof window !== 'undefined';

let initialValue = 0;
let initialValue2 = 0;
let initialValue3 = 0;
let cetegorySeq = 0;
let subMeneSort = 0;

if (isBrowser) {
  const storedValue = localStorage.getItem('selectedMainMenuSort');
  initialValue = storedValue !== null ? parseInt(storedValue) : 0;

  const storedValue2 = localStorage.getItem('selectedMenuSeq');
  initialValue2 = storedValue2 !== null ? parseInt(storedValue2) : 0;

  const storedValue3 = localStorage.getItem('selectedMenuSubSeq');
  initialValue3 = storedValue3 !== null ? parseInt(storedValue3) : 0;

  const storedValue4 = localStorage.getItem('selectedCetegorySeq');
  cetegorySeq = storedValue4 !== null ? parseInt(storedValue4) : 0;

  const storedValue5 = localStorage.getItem('selectedSubMenuSort');
  subMeneSort = storedValue5 !== null ? parseInt(storedValue5) : 0;
}

export const selectedMainMenuSort = writable(initialValue);
export const selectedMenuSeq = writable(initialValue2);
export const selectedMenuSubSeq = writable(initialValue3);
export const selectedCetegorySeq = writable(cetegorySeq);
export const selectedSubMenuSort = writable(subMeneSort);

selectedMainMenuSort.subscribe(value => {
  if (isBrowser) {
    localStorage.setItem('selectedMainMenuSort', value.toString());
  }
});

selectedMenuSeq.subscribe(value => {
  if (isBrowser) {
    localStorage.setItem('selectedMenuSeq', value.toString());
  }
});

selectedMenuSubSeq.subscribe(value => {
  if (isBrowser) {
    localStorage.setItem('selectedMenuSubSeq', value.toString());
  }
});

selectedCetegorySeq.subscribe(value => {
  if (isBrowser) {
    localStorage.setItem('selectedCetegorySeq', value.toString());
  }
});

selectedSubMenuSort.subscribe(value => {
  if (isBrowser) {
    localStorage.setItem('selectedSubMenuSort', value.toString());
  }
});