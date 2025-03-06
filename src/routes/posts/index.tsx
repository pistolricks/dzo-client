import {Component, JSXElement} from "solid-js";
import PostsList from "~/components/vendors/posts/posts-list";
import PostAJob from "~/components/vendors/forms/post-a-job";
import {useLayoutContext} from "~/context/layout-provider";

type PROPS = {

    children?: JSXElement;
}

const Posts: Component<PROPS> = props => {

    return (<div class={'container h-full w-full py-4 space-y-2'}><PostsList/></div>);
};

export default Posts;