import {Component, createEffect, createSignal, ParentProps, Show} from 'solid-js'
import SideDrawer from '~/components/ui/dialogs/side-drawer'
import Nav from '~/components/layouts/partials/nav'
import {createAsync, useLocation} from '@solidjs/router'
import {getUser} from '~/lib/users'
import {useLayoutContext} from '~/context/layout-provider'
import {clientOnly} from '@solidjs/start'
import CommandMenu from "~/components/ui/command/command-menu";

const WsClient = clientOnly(() => import('~/components/ws/ws-client'))

type PROPS = ParentProps
export const route = {
    preload() {
        getUser()
    },
}
const AppLayout: Component<PROPS> = (props) => {
    const {getHeight, setCurrentUser, storedCurrentUser} = useLayoutContext()
    const user = createAsync(async () => getUser())

    const children = () => props.children
    const location = useLocation()
    const [getPath, setPath] = createSignal<string | undefined>()

    console.log('name', user()?.name)

    createEffect(() => {
        if (!user()?.name) {
            setCurrentUser({
                id: undefined,
                name: undefined,
                email: undefined,
                activated: undefined,
                created_at: undefined,
                token: undefined,
                expiry: undefined,
                folder: undefined,
            })
        }

        if (!storedCurrentUser && user()?.name) {
            let usr = user();
            if (!usr) return
            setCurrentUser(usr)
        }

        if (storedCurrentUser?.folder !== user()?.folder) {
            let usr = user();
            if (!usr) return
            setCurrentUser(usr)
        }

        console.log('storedCurrentUser', storedCurrentUser)
        setPath(() => location?.pathname)
    })

    return (
        <SideDrawer contextId={'sd1'}>
            <Show when={getPath()}>
                {/* <WsClient initialSocketUrl={'ws://localhost:4000'}/> */}
                <Nav user={user()} path={getPath()}/>
            </Show>
            <main
                style={{
                    height: getHeight() + 'px',
                }}
            >
                {children()}
            </main>
        </SideDrawer>
    )
}

export default AppLayout
