import {A} from "@solidjs/router";
import {Component, createEffect, Show} from "solid-js";
import Drawer from "@corvu/drawer";
import {UserCircle} from "~/components/svg";
import Breadcrumbs from "~/components/layouts/partials/breadcrumbs";
import SideNavMenu from "~/components/layouts/partials/side-nav-menu";
import {SessionUser} from "~/lib/session";
import { SideDrawerContent } from "~/components/ui/dialogs/side-drawer";


type PROPS = {
    user: SessionUser | undefined;
    path?: string;
}
const Nav: Component<PROPS> = props => {

    const user = () => props.user;
    const path = () => props.path;
    const active = (routePath: string) =>
        routePath == path() ? "border-gray-normal" : "border-transparent hover:border-gray-dim";


    createEffect(() => console.log('user', props.user))
    return (
        <>

            <header class={"w-full bg-gray-ui opacity-70 sticky top-0 z-50"}>
                <nav class="container items-center flex justify-between  h-16" aria-label="Global">
                    <div class="flex justify-between items-center w-full text-gray-normal">
                        <ul class="flex justify-start items-center">
                            <li class={`${active("/")}`}>
                                <A href="/">{import.meta.env.VITE_APP_NAME}</A>
                            </li>
                        </ul>
                        <ul class="flex justify-end items-center">
                            <Show
                                fallback={
                                    <>
                                        <li class={`border-b-1 ${active("/login")} mx-1.5 sm:mx-6`}>
                                            <A href={'/login'}>Login</A>
                                        </li>
                                        <li class={`border-b-1 ${active("/register")} mx-1.5 sm:mx-6`}>
                                            <A href={'/register'}>Register</A>
                                        </li>
                                    </>
                                }
                                when={user()?.email}>
                                <Drawer.Trigger contextId={'sd1'} as={"button"}>
                                    <UserCircle class={'size-8'}/>
                                </Drawer.Trigger>
                            </Show>
                        </ul>
                    </div>
                </nav>
                <div class={'bg-gray-app border-b border-gray-normal'}>
                    <div class="container w-full">
                        <Breadcrumbs path={path()}/>
                    </div>
                </div>
            </header>
            <SideDrawerContent contextId={'sd1'}>
                <SideNavMenu user={user()}/>
            </SideDrawerContent>
        </>
    );
}

export default Nav;


