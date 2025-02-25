import {Component, ParentProps} from "solid-js";

const CategoriesLayout: Component<ParentProps> = props => {

    return (
        <>
            {props.children}
        </>
    );
};

export default CategoriesLayout;