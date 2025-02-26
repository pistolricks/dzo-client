import {Component, createMemo, JSXElement} from "solid-js";
import {Button} from "~/components/ui/button";
import {Bases, Sizes, Variants} from "~/lib/utils";
import {useLayoutContext} from "~/context/layout-provider";
import ResponsiveNav from "~/components/ui/dialogs/responsive-nav";
import {useLocation} from "@solidjs/router";
import Popover from "@corvu/popover";

type PROPS = {
    title?: string | JSXElement
    titleClass?: string;
    variant?: Variants;
    size?: Sizes;
    base?: Bases;
    sectionClass?: string;
    childClass?: string;
    children?: JSXElement

}

const FooterMenu: Component<PROPS> = props => {
    const {getIsDesktop} = useLayoutContext()

    const title = () => props.title ?? "Menu";
    const titleClass = () => props.titleClass ?? "uppercase";
    const variant = () => props.variant ?? "default";
    const size = () => props.size ?? "sm";

    const base = () => props.base ?? 'default'

    const sectionClass = () => props.sectionClass ?? "flex items-center justify-between w-full  space-x-2";
    const childClass = () => props.childClass ?? "items-center flex";
    const children = () => props.children;

    const location = useLocation();
    const path = () => location.pathname;

    const splitPath = createMemo(() => {
        let s = path()?.replace(import.meta.env.VITE_DEV_DOMAIN, "")
        let split = s?.split("/")
        console.log("split", split?.[1])
        return split
    })

    return (
        <ResponsiveNav title={splitPath()?.[1]}>
            <footer
                class={'bg-slate-ui fixed  inset-x-0 bottom-0 w-screen mx-auto px-4 rounded-none border-gray-normal h-16 flex items-center'}>
                <div class={sectionClass()}>
                    <Popover.Trigger
                        as={Button<"button">}
                        class={titleClass()} variant={variant()} base={base()} size={size()}>
                        {title()}
                        <span class="sr-only">{title()}</span>
                    </Popover.Trigger>


                    <div class={childClass()}>
                        {children()}
                    </div>
                </div>
            </footer>
        </ResponsiveNav>
    );
};

export default FooterMenu;