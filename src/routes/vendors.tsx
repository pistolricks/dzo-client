import {Component, ParentProps} from "solid-js";

const VendorsLayout: Component<ParentProps> = props => {

    return (
        <div class={'h-full w-full'}>
            {props.children}
        </div>
    );
};

export default VendorsLayout;