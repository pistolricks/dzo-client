import {Component} from "solid-js";
import {ProfileDetailProps} from "~/lib/store";



const ProfileDetails: Component<ProfileDetailProps> = props => {

    const name = () => props.name;
    const username = () => props.username;
    const email = () => props.email;
    const phone = () => props.phone ?? "(714) 555-5559";
    const imageSrc = () => props.imageSrc;
    const coverSrc = () => props.coverSrc;
    const reviews = () => props.reviews;
    const friends = () => props.friends;
    const events = () => props.events;
    const locations = () => props.locations;

    return (

        <dl class="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
            <div class="sm:col-span-2 py-2 border-b border-gray-200">
                <dt class="text-sm font-medium text-gray-500">Headline</dt>
                <dd class="mt-1 max-w-prose space-y-5 text-sm text-gray-900">
                    <p></p>
                </dd>
            </div>
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

export default ProfileDetails;