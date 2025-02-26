import {Component, createMemo} from "solid-js";
import UserProfile from "~/components/users/profile";
import {ProfileDetailProps} from "~/lib/store";
import {handleUserName} from "~/lib/utils";
import {createAsync, RouteDefinition, useParams} from "@solidjs/router";
import {getUser} from "~/lib/users";
import {getOwnerModels} from "~/lib/owners";

type PROPS = {}

export const route = {
    preload() {
        getOwnerModels()
    }
} satisfies RouteDefinition

const Profile: Component<PROPS> = props => {

    const models = createAsync(async () => getOwnerModels());


    return (
        <div class={'h-full w-full relative'}>
            <UserProfile  {...models()}/>
        </div>
    );
};

export default Profile;