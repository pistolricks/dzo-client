import {Component} from "solid-js";
import {ProfileDetailProps} from "~/lib/store";



const UserDetails: Component<ProfileDetailProps> = props => {

    const name = () => props.name;
    const username = () => props.username;
    const email = () => props.email;
    const phone = () => props.phone ?? "(714) 555-5559";

    return (

        <dl class="container content-center grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">Name</dt>
                <dd class="mt-1 text-sm text-gray-900">{name()}</dd>
            </div>
            <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">Username</dt>
                <dd class="mt-1 text-sm text-gray-900">{username()}</dd>
            </div>
            <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">Email</dt>
                <dd class="mt-1 text-sm text-gray-900">{email()}</dd>
            </div>
            <div class="sm:col-span-1">
                <dt class="text-sm font-medium text-gray-500">Phone</dt>
                <dd class="mt-1 text-sm text-gray-900">{phone()}</dd>
            </div>
        </dl>

    );
};

export default UserDetails;