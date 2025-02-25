import {action, query, redirect} from "@solidjs/router";
import {baseApi, getUserToken} from "~/lib/server";

export const getVendors = query(async (params?: string) => {
    "use server";
    let token = await getUserToken();
    if (!token) throw redirect("/")

    console.log("Bearer:", token.token)

    const response = await fetch(params ?`${baseApi}/vendors?${params}` : `${baseApi}/vendors`, {
        headers: {
            Authorization: `Bearer ${token.token}`
        },
    })
    const res: any = await response.json();

    console.log('response', res);
    return res;
}, "vendors")


export const getVendor = query(async (id: number) => {
    "use server";
    let token = await getUserToken();
    if (!token) throw redirect("/")

    const response = await fetch(`${baseApi}/vendors/${id}`, {
        headers: {
            Authorization: `Bearer ${token.token}`
        },
    })
    const res: any = await response.json();

    console.log(res);
    return res;
}, "vendor")


export const addVendor = action(async (data: FormData) => {
    "use server";
    let token = await getUserToken();
    if (!token) throw redirect("/")

    const vendorInput = {
        title: String(data.get("title")),
        year: Number(data.get("year")),
        runtime: String(data.get("runtime")) + ' mins',
        genres: [String(data.get("genres"))],
    }

    const response = await fetch(`${baseApi}/vendors`, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token.token}`
        },
        body: JSON.stringify(vendorInput)
    })

    const res: any = await response.json();
    const status: number = response.status;
    console.log("full json response", status)

    if (status === 201) {
        redirectTo("vendors")
    }
    return res;
})

const redirectTo = (path?: string) => {
    let urlPath = `/${path ?? ``}`
    throw redirect(urlPath) 
}