import {Component, createEffect, createSignal, ParentProps, Show} from "solid-js";
import SideDrawer from "~/components/ui/dialogs/side-drawer";
import Nav from "~/components/layouts/partials/nav";
import {AccessorWithLatest, createAsync, useLocation} from "@solidjs/router";
import {USER} from "~/lib/store";
import {getUser} from "~/lib/users";
import {useLayoutContext} from "~/context/layout-provider";
import {clientOnly} from "@solidjs/start";
const WsClient = clientOnly(() => import("~/components/ws/ws-client"));

type PROPS = ParentProps
export const route = {
    preload() {
        getUser();
    }
}
const AppLayout: Component<PROPS> = props => {

    const {getHeight} = useLayoutContext();
    const children = () => props.children;

    const user: AccessorWithLatest<USER | undefined> = createAsync(async () => getUser());

    const location = useLocation();
    const [getPath, setPath] = createSignal<string | undefined>()

    console.log('name', user()?.name)


    createEffect(() => {
        setPath(() => location.pathname)

    })

    return (
        <SideDrawer>
            <Show when={getPath()}>
               {/* <WsClient initialSocketUrl={'ws://localhost:4000'}/> */}
                <Nav user={user()} path={getPath()}/>
            </Show>
            <main
                style={{
                    height: getHeight() + 'px'
                }}>
                {children()}
            </main>
        </SideDrawer>
    );
};

export default AppLayout;