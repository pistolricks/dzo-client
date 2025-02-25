import {Component, JSXElement, Match, Switch} from "solid-js";
import {A} from "@solidjs/router";

type PROPS = {
    title: string;
    description: string;
    imageSrc?: string;
    class?: string;
    href?: string;
    onClick?: () => void;
    children?: JSXElement;
}

const FriendCard: Component<PROPS> = props => {

    const title = () => props.title;
    const description = () => props.description;
    const imageSrc = () => props.imageSrc;
    const className = () => props.class ?? ''
    const children = () => props.children;
    const href = () => props.href ?? '#';
    const onClick = () => props.onClick;

    return (
        <A
            onClick={onClick()}
            href={href()}
            class={`relative flex items-center space-x-3 rounded-lg border border-gray-300 bg-gray-100 px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-pink-500 focus-within:ring-offset-2 hover:border-gray-400 ${className()} `}>
            <div class="shrink-0">
                <Switch>
                    <Match when={imageSrc()}>
                        <img class="size-10 rounded-full"
                             src={imageSrc()}
                             alt=""/>
                    </Match>
                    <Match when={children()}>
                        {children()}
                    </Match>
                </Switch>
            </div>
            <div class="min-w-0 flex-1">
                <div class="focus:outline-none">
                    <span class="absolute inset-0" aria-hidden="true"></span>
                    <p class="text-sm font-medium text-gray-900">{title()}</p>
                    <p class="text-wrap text-sm text-gray-500">{description()}</p>
                </div>
            </div>
        </A>
    );
};

export default FriendCard;