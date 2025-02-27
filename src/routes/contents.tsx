import {Component, ParentProps} from "solid-js";

const ContentsLayout: Component<ParentProps> = props => {

    return (
        <div class={'h-full w-full relative'}>
            {props.children}
        </div>
    );
};

export default ContentsLayout;