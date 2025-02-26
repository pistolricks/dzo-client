import {Component, createMemo, createSignal, onMount, ParentProps} from "solid-js";
import UserProfile from "~/components/users/profile";
import {ProfileDetailProps, USER, VENDOR} from "~/lib/store";
import {AccessorWithLatest, createAsync, useAction} from "@solidjs/router";
import {getUser, getUserDetailsHandler} from "~/lib/users";
import {handleUserName} from "~/lib/utils";

export const route = {
    preload() {
        getUser();
    }
}


const Profile: Component<ParentProps> = props => {
    const user: AccessorWithLatest<USER | undefined> = createAsync(async () => getUser());


    const profile = createMemo(() => {
        if (user()) {
            const profileDetail: ProfileDetailProps = {
                id: user()?.id,
                name: user()?.name,
                email: user()?.email,
                username: handleUserName(user()?.name),
                activated: user()?.activated,
                created_at: user()?.created_at,
            }
            return profileDetail
        }
    })


    return (
        <div class={'h-full w-full'}>
            <UserProfile  {...profile()}/>
        </div>
    );
};

export default Profile;