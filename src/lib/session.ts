import {useSession} from "vinxi/http";
import {USER} from "~/lib/db";
import {AUTHENTICATION_TOKEN} from "~/lib/index";
import {handleUserName} from "~/lib/utils";
import {Feature} from "~/lib/store";


export type SessionUser = {
    id?: number
    name?: string
    email?: string
    display_name?: string
    activated?: boolean;
    created_at?: string;
    token?: string
    expiry?: string
    folder?: string,
    current_location?: Feature | undefined
}


export function getSession() {
    "use server";
    return useSession({
        password: import.meta.env.VITE_SESSION_SECRET ?? "areallylongsecretthatyoushouldreplace"
    });
}

export async function updateSessionUser(user: USER, authentication_token: AUTHENTICATION_TOKEN, folder: string) {
    "use server";
    try {
        const session = await getSession();
        await session.update((d: SessionUser) => {
            d.id = user?.id;
            d.name = user?.name;
            d.email = user?.email;
            d.display_name = handleUserName(user?.name)
            d.activated = user?.activated;
            d.created_at = user?.created_at;
            d.token = authentication_token?.token;
            d.expiry = authentication_token?.expiry;
            d.folder = folder
        });

    } catch (err) {
        return err as Error;
    }
}

export async function updateSessionCurrentLocation(user: SessionUser, currentLocation: Feature, authentication_token: AUTHENTICATION_TOKEN) {
    "use server";
    try {
        const session = await getSession();
        await session.update((d: SessionUser) => {
            d.id = user?.id;
            d.name = user?.name;
            d.email = user?.email;
            d.display_name = user?.display_name;
            d.activated = user?.activated;
            d.created_at = user?.created_at;
            d.token = authentication_token?.token;
            d.expiry = authentication_token?.expiry;
            d.folder = user?.folder;
            d.current_location = currentLocation
        });

    } catch (err) {
        return err as Error;
    }
}


export async function getSessionUser(): Promise<USER | undefined> {
    "use server";
    const session = await getSession();

    const user = {
        id: session.data.id,
        name: session.data.name,
        email: session.data.email,
        display_name: session.data.display_name,
        activated: session.data.activated,
        created_at: session.data.created_at,
        folder: session.data.folder,
        current_location: session.data?.current_location
    }

    if (user.email === "") return undefined;

    return user;
}

export async function getSessionToken(): Promise<AUTHENTICATION_TOKEN | undefined> {
    "use server";
    const session = await getSession();

    const token = {
        token: session.data.token,
        expiry: session.data.expiry
    }

    if (!token.token) return undefined;
    return token;
}

export async function getSessionFolder(): Promise<string | undefined> {
    "use server";
    const session = await getSession();

    const folderName: string = session.data.folder;

    if (!folderName) return undefined;
    return folderName;
}

export async function getSessionLocation(): Promise<Feature | undefined> {
    "use server";
    const session = await getSession();

    const currentLocation = session.data?.current_location;

    if (!currentLocation) return undefined;
    return currentLocation;
}

export async function clearSessionUser() {
    "use server";
    try {
        const session = await getSession();
        await session.update((d: SessionUser) => {
            d.id = undefined;
            d.name = undefined;
            d.email = undefined;
            d.display_name = undefined;
            d.activated = undefined;
            d.created_at = undefined;
            d.token = undefined;
            d.expiry = undefined;
            d.folder = undefined;
            d.current_location = undefined;
        });

    } catch (err) {
        return err as Error;
    }
}