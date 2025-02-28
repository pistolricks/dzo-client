import {Component, JSXElement, Show} from "solid-js";

type PROPS = {
    title?: string
    imageSrc?: string
    hideLogo?: boolean
    children?: JSXElement
}

const FormLayout: Component<PROPS> = props => {

    const hideLogo = () => props.hideLogo ?? false;
    const title = () => props.title ?? '';
    const imageSrc = () => props.imageSrc ?? import.meta.env.VITE_APP_LOGO;

    return (
        <div class="flex h-full min-h-full flex-col justify-center">
            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                <Show when={!hideLogo()}>
                    <img class="mx-auto h-24 w-auto rounded"
                         src={imageSrc()} alt="logo"/>
                </Show>
                <h2 class="mt-4 text-center text-2xl/9 tracking-tight text-gray-11 uppercase">
                    {title()}
                </h2>
            </div>

            <div class="mt-6 sm:mx-auto sm:w-full sm:max-w-sm mb-4 container">
                {props.children}
            </div>
        </div>
    );
};

export default FormLayout;