import {Component, createMemo, onMount, ParentProps} from "solid-js";
import UserProfile from "~/components/users/profile";
import { ProfileDetailProps } from "~/lib/store";
import {AccessorWithLatest, createAsync, redirect} from "@solidjs/router";
import {USER} from "~/lib/store";
import {getUser} from "~/lib/users";
import {handleUserName} from "~/lib/utils";
import {clientOnly} from "@solidjs/start";




const Profile: Component<ParentProps> = props => {
    const user: AccessorWithLatest<USER | undefined> = createAsync(async () => getUser());



    const profile = createMemo(() => {
       if(user()) {
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