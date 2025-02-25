import {Component, type ComponentProps, splitProps} from "solid-js";
import {cn} from "~/lib/utils";


export const ChevronLeft: Component<{
    class?: string;
}> = props => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor"
         class={props.class ?? 'size-6'}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5"/>
    </svg>
)


export const ChevronDown: Component<{
    class?: string;
}> = props => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor"
         class={props.class ?? 'size-6'}>
        <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
    </svg>
)

export const PositionIcon: Component<{
    class?: string;
}> = props => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1} stroke="currentColor"
         class={props.class ?? 'size-6'}>
        <circle cx="12" cy="12" r="4"></circle>
        <path
            d="M13 4.069V2h-2v2.069A8.01 8.01 0 0 0 4.069 11H2v2h2.069A8.008 8.008 0 0 0 11 19.931V22h2v-2.069A8.007 8.007 0 0 0 19.931 13H22v-2h-2.069A8.008 8.008 0 0 0 13 4.069zM12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6z"></path>
    </svg>
)
export const CompassIcon: Component<{
    class?: string;
}> = props => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor"
         class={props.class ?? 'size-6'}>
        <path d="M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm3 13-8 2 2-8 8-2-2 8z"></path>
        <circle cx="12" cy="12" r="2"></circle>
    </svg>
)

export const UploadCloud: Component<{
    class?: string;
}> = props => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor"
         class={props.class ?? 'size-6'}>
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 16.5V9.75m0 0 3 3m-3-3-3 3M6.75 19.5a4.5 4.5 0 0 1-1.41-8.775 5.25 5.25 0 0 1 10.233-2.33 3 3 0 0 1 3.758 3.848A3.752 3.752 0 0 1 18 19.5H6.75Z"/>
    </svg>
)

export const UserCircle: Component<{
    class?: string;
}> = props => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
         class={props.class ?? 'size-6'}>
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
    </svg>
)

export const SpinnerIcon: Component<{
    class?: string;
}> = props => (
    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-labelledby="title-04a desc-04a"
         aria-live="polite" aria-busy="true" class={`${props.class ?? "size-6"} animate animate-spin`}>
        <title id="title-04a">Spinner</title>
        <desc id="desc-04a">Loading...</desc>
        <circle cx="12" cy="12" r="10" class="stroke-slate-200" stroke-width="4"/>
        <path
            d="M12 22C14.6522 22 17.1957 20.9464 19.0711 19.0711C20.9464 17.1957 22 14.6522 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2"
            class="stroke-emerald-500" stroke-width="4"/>
    </svg>

)


export const BackspaceIcon: Component<{
    class?: string;
}> = props => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
         class={props.class ?? 'size-6'}>
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 9.75 14.25 12m0 0 2.25 2.25M14.25 12l2.25-2.25M14.25 12 12 14.25m-2.58 4.92-6.374-6.375a1.125 1.125 0 0 1 0-1.59L9.42 4.83c.21-.211.497-.33.795-.33H19.5a2.25 2.25 0 0 1 2.25 2.25v10.5a2.25 2.25 0 0 1-2.25 2.25h-9.284c-.298 0-.585-.119-.795-.33Z"/>
    </svg>
)


export const XMark: Component<{
    class?: string;
}> = props => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor"
         class={props.class ?? 'size-6'}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12"/>
    </svg>
)

export const MagnifyingGlass: Component<{
    class?: string;
}> = props => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor"
         class={props.class ?? 'size-6'}>
        <path stroke-linecap="round" stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"/>
    </svg>
)
export const MagnifyingGlassCircle: Component<{
    class?: string;
}> = props => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor"
         class={props.class ?? 'size-6'}>
        <path stroke-linecap="round" stroke-linejoin="round"
              d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"/>
    </svg>
)

export const MapIcon: Component<{
    class?: string;
}> = props => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor"
         class={props.class ?? 'size-6'}>
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"/>
    </svg>
)


export const MapPin: Component<{
    class?: string;
}> = props => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor"
         class={props.class ?? 'size-6'}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"/>
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"/>

    </svg>
)


export const Power: Component<{
    class?: string;
}> = props => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor"
         class={props.class ?? 'size-6'}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9"/>
    </svg>
)

export const PhotoIcon: Component<{
    class?: string;
}> = props => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor"
         class={props.class ?? 'size-6'}>
        <path stroke-linecap="round" stroke-linejoin="round"
              d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"/>
    </svg>
)

export const PlusIcon: Component<{
    class?: string;
}> = props => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor"
         class={props.class ?? 'size-6'}>
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15"/>
    </svg>
)

export const BuildingOffice2Icon: Component<{
    class?: string;
}> = props => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor"
         class={props.class ?? 'size-6'}>
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z"/>
    </svg>
)

export const ChatIcon: Component<{
    class?: string;
}> = props => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor"
         class={props.class ?? 'size-6'}>
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z"/>
    </svg>
)

export const EnvelopeIcon: Component<{
    class?: string;
}> = props => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor"
         class={props.class ?? 'size-6'}>
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"/>
    </svg>
)


export const CallIcon: Component<{
    class?: string;
}> = props => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor"
         class={props.class ?? 'size-6'}>
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"/>
    </svg>
)


export const GlobeIcon: Component<{
    class?: string;
}> = props => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor"
         class={props.class ?? 'size-6'}>
        <path stroke-linecap="round" stroke-linejoin="round"
              d="m6.115 5.19.319 1.913A6 6 0 0 0 8.11 10.36L9.75 12l-.387.775c-.217.433-.132.956.21 1.298l1.348 1.348c.21.21.329.497.329.795v1.089c0 .426.24.815.622 1.006l.153.076c.433.217.956.132 1.298-.21l.723-.723a8.7 8.7 0 0 0 2.288-4.042 1.087 1.087 0 0 0-.358-1.099l-1.33-1.108c-.251-.21-.582-.299-.905-.245l-1.17.195a1.125 1.125 0 0 1-.98-.314l-.295-.295a1.125 1.125 0 0 1 0-1.591l.13-.132a1.125 1.125 0 0 1 1.3-.21l.603.302a.809.809 0 0 0 1.086-1.086L14.25 7.5l1.256-.837a4.5 4.5 0 0 0 1.528-1.732l.146-.292M6.115 5.19A9 9 0 1 0 17.18 4.64M6.115 5.19A8.965 8.965 0 0 1 12 3c1.929 0 3.716.607 5.18 1.64"/>
    </svg>
)


export const RatingIcon: Component<{
    class?: string;
}> = props => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor"
         class={props.class ?? 'size-6'}>
        <path fill-rule="evenodd"
              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
              clip-rule="evenodd"/>
    </svg>
)


export const mapPin = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width={1.5} stroke="currentColor"
         class={props.class ?? 'size-6'}>
        <path stroke-linecap="round" stroke-linejoin="round"
              d="M9 6.75V15m6-6v8.25m.503 3.498 4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 0 0-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0Z"/>
    </svg>`


type IconProps = ComponentProps<"svg">

const Icon = (props: IconProps) => {
    const [, rest] = splitProps(props, ["class"])
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class={cn("size-4", props.class)}
            {...rest}
        />
    )
}

export function IconLogo(props: IconProps) {
    return (
        <Icon viewBox="0 0 24 24" {...props}>
            <path
                d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/>
            <path d="m3.3 7 8.7 5 8.7-5"/>
            <path d="M12 22V12"/>
        </Icon>
    )
}

// ICONS

export function IconAlertTriangle(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M12 9v4"/>
            <path
                d="M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z"/>
            <path d="M12 16h.01"/>
        </Icon>
    )
}

export function IconArchive(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M3 4m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v0a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"/>
            <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10"/>
            <path d="M10 12l4 0"/>
        </Icon>
    )
}

export function IconArrowDown(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M12 5l0 14"/>
            <path d="M18 13l-6 6"/>
            <path d="M6 13l6 6"/>
        </Icon>
    )
}

export function IconArrowRight(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M5 12l14 0"/>
            <path d="M13 18l6 -6"/>
            <path d="M13 6l6 6"/>
        </Icon>
    )
}

export function IconArrowUp(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M12 5l0 14"/>
            <path d="M18 11l-6 -6"/>
            <path d="M6 11l6 -6"/>
        </Icon>
    )
}

export function IconBell(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M10 5a2 2 0 1 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"/>
            <path d="M9 17v1a3 3 0 0 0 6 0v-1"/>
        </Icon>
    )
}

export function IconBold(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M7 5h6a3.5 3.5 0 0 1 0 7h-6z"/>
            <path d="M13 12h1a3.5 3.5 0 0 1 0 7h-7v-7"/>
        </Icon>
    )
}

export function IconBrandApple(props: IconProps) {
    return (
        <Icon {...props}>
            <path
                d="M8.286 7.008c-3.216 0 -4.286 3.23 -4.286 5.92c0 3.229 2.143 8.072 4.286 8.072c1.165 -.05 1.799 -.538 3.214 -.538c1.406 0 1.607 .538 3.214 .538s4.286 -3.229 4.286 -5.381c-.03 -.011 -2.649 -.434 -2.679 -3.23c-.02 -2.335 2.589 -3.179 2.679 -3.228c-1.096 -1.606 -3.162 -2.113 -3.75 -2.153c-1.535 -.12 -3.032 1.077 -3.75 1.077c-.729 0 -2.036 -1.077 -3.214 -1.077z"/>
            <path d="M12 4a2 2 0 0 0 2 -2a2 2 0 0 0 -2 2"/>
        </Icon>
    )
}

export function IconBrandGithub(props: IconProps) {
    return (
        <Icon stroke="none" fill="currentColor" {...props}>
            <path
                d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"/>
            {/* <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /> */}
        </Icon>
    )
}

export function IconBrandGoogle(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M20.945 11a9 9 0 1 1 -3.284 -5.997l-2.655 2.392a5.5 5.5 0 1 0 2.119 6.605h-4.125v-3h7.945z"/>
        </Icon>
    )
}

export function IconBrandInstagram(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M4 4m0 4a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z"/>
            <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"/>
            <path d="M16.5 7.5l0 .01"/>
        </Icon>
    )
}

export function IconLock(props: IconProps) {
    return (
        <Icon {...props}>
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"/>
        </Icon>
    )
}

export function IconBrandPaypal(props: IconProps) {
    return (
        <Icon {...props}>
            <path
                d="M10 13l2.5 0c2.5 0 5 -2.5 5 -5c0 -3 -1.9 -5 -5 -5h-5.5c-.5 0 -1 .5 -1 1l-2 14c0 .5 .5 1 1 1h2.8l1.2 -5c.1 -.6 .4 -1 1 -1zm7.5 -5.8c1.7 1 2.5 2.8 2.5 4.8c0 2.5 -2.5 4.5 -5 4.5h-2.6l-.6 3.6a1 1 0 0 1 -1 .8l-2.7 0a.5 .5 0 0 1 -.5 -.6l.2 -1.4"/>
        </Icon>
    )
}

export function IconBrandReddit(props: IconProps) {
    return (
        <Icon {...props}>
            <path
                d="M12 8c2.648 0 5.028 .826 6.675 2.14a2.5 2.5 0 0 1 2.326 4.36c0 3.59 -4.03 6.5 -9 6.5c-4.875 0 -8.845 -2.8 -9 -6.294l-1 -.206a2.5 2.5 0 0 1 2.326 -4.36c1.646 -1.313 4.026 -2.14 6.674 -2.14z"/>
            <path d="M12 8l1 -5l6 1"/>
            <path d="M19 4m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
            <circle cx="9" cy="13" r=".5" fill="currentColor"/>
            <circle cx="15" cy="13" r=".5" fill="currentColor"/>
            <path d="M10 17c.667 .333 1.333 .5 2 .5s1.333 -.167 2 -.5"/>
        </Icon>
    )
}

export function IconBrandTypescript(props: IconProps) {
    return (
        <Icon {...props}>
            <path
                d="M15 17.5c.32 .32 .754 .5 1.207 .5h.543c.69 0 1.25 -.56 1.25 -1.25v-.25a1.5 1.5 0 0 0 -1.5 -1.5a1.5 1.5 0 0 1 -1.5 -1.5v-.25c0 -.69 .56 -1.25 1.25 -1.25h.543c.453 0 .887 .18 1.207 .5"/>
            <path d="M9 12h4"/>
            <path d="M11 12v6"/>
            <path d="M21 19v-14a2 2 0 0 0 -2 -2h-14a2 2 0 0 0 -2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2 -2z"/>
        </Icon>
    )
}

export function IconBrandVercel(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M3 19h18l-9 -15z" fill="currentColor"/>
        </Icon>
    )
}

export function IconBrandX(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M4 4l11.733 16h4.267l-11.733 -16z"/>
            <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772"/>
        </Icon>
    )
}

export function IconBrandYoutube(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M2 8a4 4 0 0 1 4 -4h12a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-12a4 4 0 0 1 -4 -4v-8z"/>
            <path d="M10 9l5 3l-5 3z"/>
        </Icon>
    )
}

export function IconCalendar(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z"/>
            <path d="M16 3v4"/>
            <path d="M8 3v4"/>
            <path d="M4 11h16"/>
            <path d="M11 15h1"/>
            <path d="M12 15v3"/>
        </Icon>
    )
}

export function IconCheck(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M5 12l5 5l10 -10"/>
        </Icon>
    )
}

export function IconChevronDown(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M6 9l6 6l6 -6"/>
        </Icon>
    )
}

export function IconChevronLeft(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M15 6l-6 6l6 6"/>
        </Icon>
    )
}

export function IconChevronRight(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M9 6l6 6l-6 6"/>
        </Icon>
    )
}

export function IconChevronUp(props: IconProps) {
    return (
        <Icon {...props}>
            <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
            <path d="M6 15l6 -6l6 6"/>
        </Icon>
    )
}

export function IconChevronsLeft(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M11 7l-5 5l5 5"/>
            <path d="M17 7l-5 5l5 5"/>
        </Icon>
    )
}

export function IconChevronsRight(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M7 7l5 5l-5 5"/>
            <path d="M13 7l5 5l-5 5"/>
        </Icon>
    )
}

export function IconCircle(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/>
        </Icon>
    )
}

export function IconCircleCheck(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/>
            <path d="M9 12l2 2l4 -4"/>
        </Icon>
    )
}

export function IconCircleHelp(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/>
            <path d="M12 16v.01"/>
            <path d="M12 13a2 2 0 0 0 .914 -3.782a1.98 1.98 0 0 0 -2.414 .483"/>
        </Icon>
    )
}

export function IconCircleOff(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M20.042 16.045a9 9 0 0 0 -12.087 -12.087m-2.318 1.677a9 9 0 1 0 12.725 12.73"/>
            <path d="M3 3l18 18"/>
        </Icon>
    )
}

export function IconCirclePlus(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/>
            <path d="M9 12h6"/>
            <path d="M12 9v6"/>
        </Icon>
    )
}

export function IconClock(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"/>
            <path d="M12 7v5l3 3"/>
        </Icon>
    )
}

export function IconCloud(props: IconProps) {
    return (
        <Icon {...props}>
            <path
                d="M6.657 18c-2.572 0 -4.657 -2.007 -4.657 -4.483c0 -2.475 2.085 -4.482 4.657 -4.482c.393 -1.762 1.794 -3.2 3.675 -3.773c1.88 -.572 3.956 -.193 5.444 1c1.488 1.19 2.162 3.007 1.77 4.769h.99c1.913 0 3.464 1.56 3.464 3.486c0 1.927 -1.551 3.487 -3.465 3.487h-11.878"/>
        </Icon>
    )
}

export function IconCommand(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M7 9a2 2 0 1 1 2 -2v10a2 2 0 1 1 -2 -2h10a2 2 0 1 1 -2 2v-10a2 2 0 1 1 2 2h-10"/>
        </Icon>
    )
}

export function IconCopy(props: IconProps) {
    return (
        <Icon {...props}>
            <path
                d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"/>
            <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"/>
        </Icon>
    )
}

export function IconCreditCard(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z"/>
            <path d="M3 10l18 0"/>
            <path d="M7 15l.01 0"/>
            <path d="M11 15l2 0"/>
        </Icon>
    )
}

export function IconDesktop(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"/>
            <path d="M7 20h10"/>
            <path d="M9 16v4"/>
            <path d="M15 16v4"/>
        </Icon>
    )
}

export function IconDots(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M5 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
            <path d="M19 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
        </Icon>
    )
}

export function IconDotsVertical(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
            <path d="M12 19m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
            <path d="M12 5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
        </Icon>
    )
}

export function IconDownload(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2"/>
            <path d="M7 11l5 5l5 -5"/>
            <path d="M12 4l0 12"/>
        </Icon>
    )
}

export function IconExternalLink(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M12 6h-6a2 2 0 0 0 -2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-6"/>
            <path d="M11 13l9 -9"/>
            <path d="M15 4h5v5"/>
        </Icon>
    )
}

export function IconEyeOff(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M10.585 10.587a2 2 0 0 0 2.829 2.828"/>
            <path
                d="M16.681 16.673a8.717 8.717 0 0 1 -4.681 1.327c-3.6 0 -6.6 -2 -9 -6c1.272 -2.12 2.712 -3.678 4.32 -4.674m2.86 -1.146a9.055 9.055 0 0 1 1.82 -.18c3.6 0 6.6 2 9 6c-.666 1.11 -1.379 2.067 -2.138 2.87"/>
            <path d="M3 3l18 18"/>
        </Icon>
    )
}

export function IconFile(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M14 3v4a1 1 0 0 0 1 1h4"/>
            <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"/>
        </Icon>
    )
}

export function IconForward(props: IconProps) {
    return (
        <Icon {...props}>
            <polyline points="15 17 20 12 15 7"/>
            <path d="M4 18v-2a4 4 0 0 1 4-4h12"/>
        </Icon>
    )
}

export function IconFullscreen(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M3 7V5a2 2 0 0 1 2-2h2"/>
            <path d="M17 3h2a2 2 0 0 1 2 2v2"/>
            <path d="M21 17v2a2 2 0 0 1-2 2h-2"/>
            <path d="M7 21H5a2 2 0 0 1-2-2v-2"/>
            <rect width="10" height="8" x="7" y="8" rx="1"/>
        </Icon>
    )
}

export function IconHash(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M5 9l14 0"/>
            <path d="M5 15l14 0"/>
            <path d="M11 4l-4 16"/>
            <path d="M17 4l-4 16"/>
        </Icon>
    )
}

export function IconHome(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M5 12l-2 0l9 -9l9 9l-2 0"/>
            <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"/>
            <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6"/>
        </Icon>
    )
}

export function IconInbox(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/>
            <path d="M4 13h3l3 3h4l3 -3h3"/>
        </Icon>
    )
}

export function IconItalic(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M11 5l6 0"/>
            <path d="M7 19l6 0"/>
            <path d="M14 5l-4 14"/>
        </Icon>
    )
}

export function IconLaptop(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M3 19l18 0"/>
            <path d="M5 6m0 1a1 1 0 0 1 1 -1h12a1 1 0 0 1 1 1v8a1 1 0 0 1 -1 1h-12a1 1 0 0 1 -1 -1z"/>
        </Icon>
    )
}

export function IconLoader(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M12 6l0 -3"/>
            <path d="M16.25 7.75l2.15 -2.15"/>
            <path d="M18 12l3 0"/>
            <path d="M16.25 16.25l2.15 2.15"/>
            <path d="M12 18l0 3"/>
            <path d="M7.75 16.25l-2.15 2.15"/>
            <path d="M6 12l-3 0"/>
            <path d="M7.75 7.75l-2.15 -2.15"/>
        </Icon>
    )
}

export function IconMail(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"/>
            <path d="M3 7l9 6l9 -6"/>
        </Icon>
    )
}

export function IconMessages(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2z"/>
            <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"/>
        </Icon>
    )
}

export function IconMinus(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M5 12l14 0"/>
        </Icon>
    )
}

export function IconMobile(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M6 5a2 2 0 0 1 2 -2h8a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-8a2 2 0 0 1 -2 -2v-14z"/>
            <path d="M11 4h2"/>
            <path d="M12 17v.01"/>
        </Icon>
    )
}

export function IconMoon(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"/>
        </Icon>
    )
}

export function IconPencil(props: IconProps) {
    return (
        <Icon {...props}>
            <path
                d="m2.695 14.762-1.262 3.155a.5.5 0 0 0 .65.65l3.155-1.262a4 4 0 0 0 1.343-.886L17.5 5.501a2.121 2.121 0 0 0-3-3L3.58 13.419a4 4 0 0 0-.885 1.343Z"/>
        </Icon>
    )
}

export function IconReply(props: IconProps) {
    return (
        <Icon {...props}>
            <polyline points="9 17 4 12 9 7"/>
            <path d="M20 18v-2a4 4 0 0 0-4-4H4"/>
        </Icon>
    )
}

export function IconReplyAll(props: IconProps) {
    return (
        <Icon {...props}>
            <polyline points="7 17 2 12 7 7"/>
            <polyline points="12 17 7 12 12 7"/>
            <path d="M22 18v-2a4 4 0 0 0-4-4H7"/>
        </Icon>
    )
}

export function IconPlus(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M12 5l0 14"/>
            <path d="M5 12l14 0"/>
        </Icon>
    )
}

export function IconRocket(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M4 13a8 8 0 0 1 7 7a6 6 0 0 0 3 -5a9 9 0 0 0 6 -8a3 3 0 0 0 -3 -3a9 9 0 0 0 -8 6a6 6 0 0 0 -5 3"/>
            <path d="M7 14a6 6 0 0 0 -3 6a6 6 0 0 0 6 -3"/>
            <path d="M15 9m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"/>
        </Icon>
    )
}

export function IconSearch(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0"/>
            <path d="M21 21l-6 -6"/>
        </Icon>
    )
}

export function IconSelector(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M8 9l4 -4l4 4"/>
            <path d="M16 15l-4 4l-4 -4"/>
        </Icon>
    )
}

export function IconSend(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M10 14l11 -11"/>
            <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"/>
        </Icon>
    )
}

export function IconSettings(props: IconProps) {
    return (
        <Icon {...props}>
            <path
                d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"/>
            <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"/>
        </Icon>
    )
}

export function IconShoppingCart(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M6 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
            <path d="M17 19m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0"/>
            <path d="M17 17h-11v-14h-2"/>
            <path d="M6 5l14 1l-1 7h-13"/>
        </Icon>
    )
}

export function IconSidebarOpen(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"/>
            <path d="M9 4v16"/>
            <path d="M14 10l2 2l-2 2"/>
        </Icon>
    )
}

export function IconSmile(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0"/>
            <path d="M9 10l.01 0"/>
            <path d="M15 10l.01 0"/>
            <path d="M9.5 15a3.5 3.5 0 0 0 5 0"/>
        </Icon>
    )
}

export function IconStar(props: IconProps) {
    return (
        <Icon {...props}>
            <path
                d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"/>
        </Icon>
    )
}

export function IconSun(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/>
            <path d="M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"/>
        </Icon>
    )
}

export function IconTablet(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M18 3a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2z"/>
            <path d="M9 18h6"/>
        </Icon>
    )
}

export function IconTerminal(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M5 7l5 5l-5 5"/>
            <path d="M12 19l7 0"/>
        </Icon>
    )
}

export function IconTimer(props: IconProps) {
    return (
        <Icon {...props}>
            <line x1="10" x2="14" y1="2" y2="2"/>
            <line x1="12" x2="15" y1="14" y2="11"/>
            <circle cx="12" cy="14" r="8"/>
        </Icon>
    )
}

export function IconTrash(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M4 7l16 0"/>
            <path d="M10 11l0 6"/>
            <path d="M14 11l0 6"/>
            <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12"/>
            <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3"/>
        </Icon>
    )
}

export function IconUnderline(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M7 5v5a5 5 0 0 0 10 0v-5"/>
            <path d="M5 19h14"/>
        </Icon>
    )
}

export function IconUpdates(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M20 11a8.1 8.1 0 0 0 -15.5 -2m-.5 -4v4h4"/>
            <path d="M4 13a8.1 8.1 0 0 0 15.5 2m.5 4v-4h-4"/>
            <path d="M12 9l0 3"/>
            <path d="M12 15l.01 0"/>
        </Icon>
    )
}

export function IconUser(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"/>
            <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/>
        </Icon>
    )
}

export function IconUsers(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M9 7m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"/>
            <path d="M3 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            <path d="M21 21v-2a4 4 0 0 0 -3 -3.85"/>
        </Icon>
    )
}

export function IconX(props: IconProps) {
    return (
        <Icon {...props}>
            <path d="M18 6l-12 12"/>
            <path d="M6 6l12 12"/>
        </Icon>
    )
}

export function IconFunnel(props: IconProps) {
    return (
        <Icon {...props}>
            <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z"/>
        </Icon>
    )
}

export function SearchIcon(props: IconProps) {
    return (
        <Icon {...props}>
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.3-4.3"/>

        </Icon>
    )
}

export function IconLayout(props: IconProps) {
    return (
        <Icon {...props}>

            <rect width="18" height="18" x="3" y="3" rx="2"/>
            <path d="M9 3v18"/>
        </Icon>
    )
}

export function IconMapPin(props: IconProps) {
    return (
        <Icon {...props}>
            <path fill-rule="evenodd"
                  d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                  clip-rule="evenodd"/>
        </Icon>
    )
}