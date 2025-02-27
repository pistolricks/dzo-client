import { css } from 'styled-system/css'

import { A } from '@solidjs/router'
import { Component, createEffect, Show } from 'solid-js'
import { USER } from '~/lib/store'
import Drawer from '@corvu/drawer'
import { UserCircle } from '~/components/svg'
import Breadcrumbs from '~/components/layouts/partials/breadcrumbs'
import SideNavMenu from '~/components/layouts/partials/side-nav-menu'
import { SessionUser } from '~/lib/session'

type PROPS = {
    user: SessionUser | undefined
    path?: string
}
const Nav: Component<PROPS> = (props) => {
    const user = () => props.user
    const path = () => props.path
    const active = (routePath: string) =>
        routePath == path() ? 'border-gray-normal' : css({ borderColor: 'transparent' })

    createEffect(() => console.log('user', props.user))
    return (
        <>
            <header class={css({ w: 'full', pos: 'sticky', top: '0', zIndex: '50' })}>
                <nav
                    class={css({
                        w: 'container',
                        maxW: 'container',
                        alignItems: 'center',
                        display: 'flex',
                        justifyContent: 'space-between',
                        h: '16',
                    })}
                    aria-label="Global"
                >
                    <div class={css({ display: 'flex', justifyContent: 'space-between', alignItems: 'center', w: 'full' })}>
                        <ul class={css({ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' })}>
                            <li class={`${active('/')}`}>
                                <A href="/">
                                    <img class={css({ rounded: 'rounded' })} src={'/logo.jpg'} alt={'logo'} />
                                </A>
                            </li>
                        </ul>
                        <ul class={css({ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' })}>
                            <Show
                                fallback={
                                    <>
                                        <li class={`border-b-1 ${active('/login')} mx-1.5 sm:mx-6`}>
                                            <A href={'/login'}>Login</A>
                                        </li>
                                        <li class={`border-b-1 ${active('/register')} mx-1.5 sm:mx-6`}>
                                            <A href={'/register'}>Register</A>
                                        </li>
                                    </>
                                }
                                when={user()?.email}
                            >
                                <Drawer.Trigger contextId={'sd1'} as={'button'}>
                                    <UserCircle class={'size-8'} />
                                </Drawer.Trigger>
                            </Show>
                        </ul>
                    </div>
                </nav>
                <div class={css({ borderBottomWidth: '1px' })}>
                    <div class={css({ w: 'full', maxW: 'container' })}>
                        <Breadcrumbs path={path()} />
                    </div>
                </div>
            </header>
            <Drawer.Content contextId={'sd1'} class={css({ w: 'screen', sm: { maxW: 'lg' } })}>
                <SideNavMenu user={user()} />
            </Drawer.Content>
        </>
    )
}

export default Nav
