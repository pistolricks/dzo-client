import {query, redirect} from "@solidjs/router";
import {baseApi, getUserToken} from "~/lib/server";
import {getUser} from "~/lib/users";
import {getSessionUser, SessionUser} from "~/lib/session";

export const getOwnerModels = query(async () => {
    "use server";
    let token = await getUserToken();
    if (!token) throw redirect("/")

    let userData = (await getSessionUser()) as SessionUser | undefined;

    const response = await fetch(`${baseApi}/owners/${userData?.id}`, {
        headers: {
            Authorization: `Bearer ${token.token}`
        },
    })
    const res: any = await response.json();

    console.log(res.error);
    return res.error ? null : res;
}, "owner")