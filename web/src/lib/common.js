
 /**
 * @param {any} index
 * @param {any[]} initialData
 */
 export function moveRowUp(index, initialData) {
    console.log(index)
    console.log(initialData)
    if (index > 0) {
        const newData = [...initialData];
        const temp = newData[index];
        newData[index] = newData[index - 1];
        newData[index - 1] = temp;
        return newData;
    }
    return initialData;
}

/**
 * @param {any} index
 * * @param {any[]} initialData
 */
export function moveRowDown(index, initialData) {
    console.log(index)
    console.log(initialData)
    if (index < initialData.length - 1) {
        const newData = [...initialData];
        const temp = newData[index];
        newData[index] = newData[index + 1];
        newData[index + 1] = temp;
        return newData;
    }
    return initialData;
}

/**
 * @param {any} index
 * * @param {any[]} initialData
 */
export function moveRowX(index, initialData) {
    const newData = [...initialData];
    newData.splice(index, 1);
    return newData;
}


import { env } from "$env/dynamic/public";
const IMG_HOST = env.PUBLIC_IMG_HOST;
const BACKEND_HOST = env.PUBLIC_BACKEND_HOST;

// filepath에 '/uploads/' 문자열이 포함되어 있는지 확인하는 함수
  /**
     * @param {any} filepath
     */
export  function getReturnValue(filepath) {
    if (filepath.includes('/uploads/')) {
      return `${BACKEND_HOST}${filepath}`;
    } else {
      return `${IMG_HOST}${filepath}`;
    }
  }