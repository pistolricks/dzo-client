import {Component, createSignal} from "solid-js";
import {ProfileDetailProps, VENDOR} from "~/lib/store";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "~/components/ui/tabs"

import {Avatar, AvatarFallback, AvatarImage} from "~/components/ui/avatar";
import {handleInitials} from "~/lib/utils";
import UserDetails from "~/components/profiles/user-details";
import ReviewDetails from "~/components/profiles/review-details";
import EventDetails from "~/components/profiles/event-details";
import {useAction} from "@solidjs/router";
import {getUserDetailsHandler} from "~/lib/users";


const UserProfile: Component<ProfileDetailProps> = props => {
    const name = () => props.name;
    const username = () => props.username;
    const email = () => props.email;
    const imageSrc = () => props.imageSrc;
    const coverSrc = () => props.coverSrc ?? "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";
    const reviews = () => props.reviews ?? [];
    const friends = () => props.friends ?? [];
    const events = () => props.events ?? [];
    const locations = () => props.locations ?? [];

    const submit = useAction(getUserDetailsHandler);

    const [getVendor, setVendor] = createSignal<VENDOR>()

    const onSubmit = async () => {
        const formData = new FormData();
        let e = email();
        if (!e) return
        formData.append('email', e)

        let res = await submit(formData)

        setVendor(res.vendor)
        console.log("vendor", getVendor())
    }


    return (
        <article class={'bg-white w-full h-full overflow-y-auto md:overflow-hidden'}>
            <div>
                <div>
                    <img class="h-32 w-full object-cover lg:h-48"
                         src={coverSrc()}
                         alt=""/>
                </div>
                <div class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

                    <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                        <div class="flex">

                            <Avatar class={'size-24 ring-4 ring-white sm:size-32'}>
                                <AvatarImage src={imageSrc()}/>
                                <AvatarFallback>{handleInitials(name())}</AvatarFallback>
                            </Avatar>


                        </div>
                        <div
                            class="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">
                            <div class="mt-6 min-w-0 flex-1 sm:hidden 2xl:block">
                                <h1 class="truncate text-2xl font-bold text-gray-900">{name()}</h1>
                            </div>

                        </div>
                    </div>
                    <div class="mt-6 hidden min-w-0 flex-1 sm:block 2xl:hidden">
                        <h1 class="truncate text-2xl font-bold text-gray-900">{name()}</h1>
                    </div>
                </div>
            </div>


                <Tabs defaultValue="account" class="container   mx-auto mt-6 sm:mt-2 2xl:mt-5">
                    <TabsList class="-mb-px  flex space-x-8 bg-transparent border-b border-gray-200 pb-4 rounded-none">
                        <TabsTrigger
                            class={'whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 shadow-none data-[selected]:shadow-none data-[selected]:border-pink-500 rounded-none'}
                            value="profile">
                            Profile
                        </TabsTrigger>
                        <TabsTrigger
                            onClick={onSubmit}
                            class={'whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 shadow-none data-[selected]:shadow-none data-[selected]:border-pink-500 rounded-none'}
                            value="vendor">
                            My Service
                        </TabsTrigger>
                        <TabsTrigger
                            class={'whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 shadow-none data-[selected]:shadow-none data-[selected]:border-pink-500 rounded-none'}
                            value="reviews">
                            Reviews
                        </TabsTrigger>
                        <TabsTrigger
                            class={'whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 shadow-none data-[selected]:shadow-none data-[selected]:border-pink-500 rounded-none'}
                            value="events">
                            Events
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value="profile"
                                 class={'mx-auto px-4 sm:px-6 lg:px-8 pb-6 h-full min-h-[57dvh] md:h-[57dvh] md:overflow-y-auto'}>
                        <UserDetails {...props}/>
                    </TabsContent>
                    <TabsContent value="vendor"
                                 class={'mx-auto  pb-6 h-full min-h-[57dvh] md:h-[57dvh] md:overflow-y-auto'}>

                    </TabsContent>
                    <TabsContent value="reviews"
                                 class={'mx-auto  pb-6 h-full min-h-[57dvh] md:h-[57dvh] md:overflow-y-auto'}>
                        <ReviewDetails list={reviews()}/>
                    </TabsContent>

                    <TabsContent value="events"
                                 class={'mx-auto  pb-6 h-full min-h-[57dvh] md:h-[57dvh] md:overflow-y-auto'}>
                        <EventDetails list={events()}/>
                    </TabsContent>

                </Tabs>



        </article>
    );
};

export default UserProfile;