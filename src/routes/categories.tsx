import {Component, ParentProps} from "solid-js";

const CategoriesLayout: Component<ParentProps> = props => {

    return (
        <div class={'h-full w-full'}>
            {props.children}
        </div>
    );
};

export default CategoriesLayout;