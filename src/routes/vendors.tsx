import {Component, ParentProps} from "solid-js";

const VendorsLayout: Component<ParentProps> = props => {

    return (
        <div class={'h-full w-full relative'}>
            {props.children}
        </div>
    );
};

export default VendorsLayout;