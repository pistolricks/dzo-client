import {Component, ParentProps} from "solid-js";
import {useLayoutContext} from "~/context/layout-provider";

type PROPS = ParentProps

const CategoryLayout: Component<PROPS> = props => {

    const {getHeight} = useLayoutContext();

    return (

        <div style={{
            height: getHeight() + 'px'
        }} class="relative container mx-auto overflow-y-auto scrollbar-hide space-y-2 p-2">
            {props.children}
        </div>

    );
};

export default CategoryLayout;