import {Component, ParentProps} from "solid-js";


const AddressesLayout: Component<ParentProps> = props => {

    return (
        <div class={'h-full w-full relative'}>
            {props.children}
        </div>
    );
};

export default AddressesLayout;