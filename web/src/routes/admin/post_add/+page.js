// since there's no dynamic data here, we can prerender it so that it gets
// served as a static asset in production
export const prerender = true;

import { fetchData } from "$lib/api/fetch";

/** @type {import('./$types').PageLoad} */
export async function load() {

    // selectbox 메인메뉴 
    const mainMenuList = await fetchData("/api/mainMenuList?val=sub&combo=1", '');
    const subMenuList = await fetchData("/api/subMenuList?mainSeq=1&combo=1",'');
    const categoryList = await fetchData("/api/categoryList?mainSeq=1&subSeq=5&combo=1",'');
    //const initialData = await fetchData("/api/mainMenuList?val=sub",'');

    return {
        props: {
            mainMenu: mainMenuList,
            subMenu: subMenuList,
            categoryList: categoryList,
           // initialData: initialData
        }
    };
};

