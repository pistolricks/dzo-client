import Dialog from '@corvu/dialog'
import type {Component, ParentProps} from 'solid-js'

type PROPS = ParentProps & { contextId?: string }
const BaseDialog: Component<PROPS> = props => {

    const children = () => props.children;


    return (
        <Dialog contextId={props.contextId}>
            {children()}
            <Dialog.Portal contextId={props.contextId}>
               {/* <Dialog.Overlay contextId={props.contextId}/>*/}
                <Dialog.Trigger contextId={props.contextId}>
                   Close
                </Dialog.Trigger>

            </Dialog.Portal>
        </Dialog>
    )
}

export default BaseDialog