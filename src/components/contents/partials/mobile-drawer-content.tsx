import {DrawerContent} from "~/components/ui/dialogs/base-drawer";
import DrawerPrimitive from "@corvu/drawer";
import {Button} from "~/components/ui/button";
import {ChevronDown} from "~/components/svg";
import {CONTENT} from "~/lib/store";
import {Component} from "solid-js";


const MobileDrawerContent: Component<{ content?: CONTENT, contextId: string }> = props => {
    const content = () => props.content;
    const contextId = () => props.contextId;
    return (
            <DrawerContent side={'bottom'} contextId={contextId()}>
            <img
                src={`http://localhost:4000/${content()?.src}`}
                alt=""
                class="pointer-events-none h-full max-h-[81.5dvh] w-full object-contain group-hover:opacity-75 rounded-sm"/>
            <DrawerPrimitive.Description class={'p-4 text-pretty'} contextId={contextId()}>
                {content()?.original}
            </DrawerPrimitive.Description>

            <div class={'flex justify-end items-center p-1'}>
                <DrawerPrimitive.Close contextId={contextId()} as={Button<"button">} size={'icon'}
                                       variant="outline">
                    <ChevronDown/>
                </DrawerPrimitive.Close>
            </div>
            </DrawerContent>
    )
}

export default MobileDrawerContent;