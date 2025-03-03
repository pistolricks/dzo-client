import {Component, Show} from "solid-js";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "~/components/ui/tabs"
import {Button} from "~/components/ui/button"
import {Avatar, AvatarFallback, AvatarImage} from "~/components/ui/avatar";
import {handleInitials} from "~/lib/utils";
import UserDetails from "~/components/profiles/user-details";
import {Feature} from "~/lib/store";
import VendorDetails, { VendorAdvert } from "~/components/profiles/vendor-details";
import {Card} from "~/components/ui/card";
import {useLayoutContext} from "~/context/layout-provider";


const UserProfile: Component<Feature> = props => {
    const {storedCurrentUser, getStoreCollection, setStoreCollection} = useLayoutContext();
    const name = () => storedCurrentUser?.name;
    const imageSrc = () => "";
    const coverSrc = () => "https://images.unsplash.com/photo-1444628838545-ac4016a5418a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80";
    const vendor = () => props.properties?.profile?.vendor;


    return (
        <article class={'bg-white w-full h-full overflow-y-auto md:overflow-hidden'}>
            <div>
                <div>
                    <img class="h-28 w-full object-cover lg:h-48"
                         src={coverSrc()}
                         alt=""/>
                </div>
                <div class="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8">

                    <div class="-mt-26  sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                        <div class="flex">

                            <Avatar class={'size-24 ring-2 ring-white lg:size-32'}>
                                <AvatarImage src={imageSrc()}/>
                                <AvatarFallback>{handleInitials(name())}</AvatarFallback>
                            </Avatar>


                        </div>
                        <div
                            class="mt-6 sm:flex sm:min-w-0 sm:flex-1 sm:items-center sm:justify-end sm:space-x-6 sm:pb-1">


                        </div>
                    </div>

                </div>
            </div>


            <Tabs defaultValue="account" class="container   mx-auto mt-6 sm:mt-2 2xl:mt-5">
                <TabsList class="-mb-px  flex space-x-8 bg-transparent border-b border-gray-200 pb-4 rounded-none">
                    <TabsTrigger
                        class={'whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 shadow-none data-[selected]:shadow-none data-[selected]:border-tomato-11 rounded-none'}
                        value="profile">
                        Profile
                    </TabsTrigger>
                    <TabsTrigger
                        class={'whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 shadow-none data-[selected]:shadow-none data-[selected]:border-tomato-11 rounded-none'}
                        value="vendor">
                        My Service
                    </TabsTrigger>
                    <TabsTrigger
                        class={'whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 shadow-none data-[selected]:shadow-none data-[selected]:border-tomato-11 rounded-none'}
                        value="reviews">
                        Reviews
                    </TabsTrigger>
                    <TabsTrigger
                        class={'whitespace-nowrap border-b-2 border-transparent px-1 py-4 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700 shadow-none data-[selected]:shadow-none data-[selected]:border-tomato-11 rounded-none'}
                        value="events">
                        Events
                    </TabsTrigger>
                </TabsList>
                <TabsContent value="profile"
                             class={'mx-auto px-4 sm:px-6 lg:px-8 pb-6 h-full min-h-[57dvh] md:h-[57dvh] md:overflow-y-auto'}>
                    <UserDetails {...storedCurrentUser}/>
                </TabsContent>
                <TabsContent value="vendor"
                             class={'mx-auto  pb-6 h-full min-h-[57dvh] md:h-[57dvh] md:overflow-y-auto'}>
                    <Show
                        fallback={
                            <Card>
                                <VendorAdvert/>
                            </Card>
                        }
                        when={vendor()} keyed>
                        {(v) => <VendorDetails {...v()}/>}
                    </Show>


                </TabsContent>
                <TabsContent value="reviews"
                             class={'mx-auto  pb-6 h-full min-h-[57dvh] md:h-[57dvh] md:overflow-y-auto'}>
                </TabsContent>

                <TabsContent value="events"
                             class={'mx-auto  pb-6 h-full min-h-[57dvh] md:h-[57dvh] md:overflow-y-auto'}>
                </TabsContent>

            </Tabs>


        </article>
    );
};

export default UserProfile;



