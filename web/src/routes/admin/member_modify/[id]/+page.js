// @ts-nocheck
export const prerender = true;

import {fetchData} from "$lib/common";

export async function load({ params }) {
    const data = await fetchData("/api/userDetail?id="+params.id,'');
        return {
            res: data
        };

}
