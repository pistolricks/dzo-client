import Newsletter from "~/components/vendors/partials/newsletter";
import PostItem from './post-item'
import getAllPosts from "~/lib/posts";
import {Component, For, createResource, Switch, Match} from "solid-js";

{/*
Note: This code includes an example of how to fetch data from an external JSON file that is hosted at https://raw.githubusercontent.com/cruip/cruip-dummy/main/job-board-posts.json. To facilitate this, we've included a lib directory in the root which contains a function that can fetch the JSON content. Additionally, we've defined the Post types in the types.d.ts file located in the root.
*/
}


interface Post {
    id: number,
    sticky: boolean,
    title: string,
    name: string,
    image: string,
    tag1: string,
    tag2: string,
    date: string,
}

const PostsList: Component<{}> = () => {
    const [posts] = createResource<Post[]>(getAllPosts);

    return (

                <Switch fallback={<div>Loading...</div>}>
                    <Match when={posts()}>
                        <For each={posts()}>
                            {(post) => (
                                <PostItem {...post} />
                            )}
                        </For>
                    </Match>
                </Switch>

    );
};

export default PostsList;