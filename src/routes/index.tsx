import {A, AccessorWithLatest} from "@solidjs/router";
import UserList from "~/components/users/list";
import {USER}   from "~/lib/store";

import { createAsync } from "@solidjs/router";
import {getStorageUsers} from "~/lib/users";



export const route = {
    preload(){
        getStorageUsers();
    }
}

export default function Home() {
    
    const users: AccessorWithLatest<USER[]|undefined> = createAsync(async () => getStorageUsers());
    

    return (
        <main class="text-center mx-auto p-4">
            <h1 class="max-6-xs text-6xl text-red-7 font-thin uppercase my-16">
                SS FE
            </h1>
            <UserList users={users()}/>
            <A class={"mt-4 w-full h-24 text-red-7"} href={"/users/create"}>New User</A>
        </main>
    );
}
