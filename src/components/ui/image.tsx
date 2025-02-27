import {Component, createMemo, createSignal, JSXElement} from "solid-js";
import { Image } from "@kobalte/core/image";

type PROPS = {
    src?: string;
    alt?: string;
    rootClass?: string;
    imgClass?: string;
    fallbackClass?: string;
    delay?: number;
    children?: JSXElement;
}

const ImageContent: Component<PROPS> = props => {

    const src = () => props.src;
    const alt = () => props.alt;
    const rootClass = () => props.rootClass;
    const imgClass = () => props.imgClass;
    const fallbackClass = () => props.fallbackClass;
    const delay = () => props.delay ?? 600;
    const children  = () => props.children;

    const [getStatus, setStatus] = createSignal<"idle" | "loading" | "loaded" | "error">("idle")

    const status = createMemo(() => {console.log(getStatus()); return getStatus()})

    return (
        <Image fallbackDelay={delay()} onLoadingStatusChange={(e) => setStatus(e)} class={rootClass()}>
            <Image.Img
                class={imgClass()}
                src={src()}
                alt={alt()}
            />
            <Image.Fallback class={fallbackClass()}>{children() ?? `${status()}`}</Image.Fallback>
        </Image>
    );
};

export default ImageContent;