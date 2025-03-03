import {Component} from "solid-js";
import {CONTENT} from "~/lib/store";
import ImageContent from "~/components/ui/image";
import {PhotoIcon, XMark} from "~/components/svg";
import Dialog from "@corvu/dialog";
import {Button} from "~/components/ui/button";
import {DialogContent} from "~/components/ui/dialogs/base-dialog";

type PROPS = {
    content?: CONTENT
    contextId: string
}

const DesktopDialogContent: Component<PROPS> = props => {

    const content = () => props.content;
    const contextId = () => props.contextId;

    return (
        <DialogContent contextId={contextId()} class="sm:max-w-[80dvw]">
            <ImageContent
                src={`http://localhost:4000/${content()?.src}`}
                alt={content()?.name}
                imgClass={'pointer-events-none h-full w-full object-contain group-hover:opacity-75 rounded-sm'}
                rootClass={'h-full max-h-[78dvh] w-full'}
                fallbackClass={'animate pulse h-full w-full'}
            >
                <PhotoIcon class={'w-full h-full'}/>
            </ImageContent>

            <Dialog.Description class={'flex justify-end items-center mt-2'} contextId={contextId()}>
                <Dialog.Close contextId={contextId()} as={Button<"button">} size={'icon'}>
                    <XMark class={'stroke-sky-8 fill-sky-4'}/></Dialog.Close>
            </Dialog.Description>
        </DialogContent>
    );
};

export default DesktopDialogContent;