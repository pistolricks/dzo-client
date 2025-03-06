import {Component, createEffect} from "solid-js";
import {useSubmission} from "@solidjs/router";
import {logoutUserHandler} from "~/lib/users";
import {Button} from "../../ui/button";
import Drawer from "@corvu/drawer";
import {useLayoutContext} from "~/context/layout-provider";

type PROPS = {}

const LogoutUserForm: Component<PROPS> = props => {
    const submission = useSubmission(logoutUserHandler);
    const {storedCurrentUser, setCurrentUser} = useLayoutContext();
    createEffect(() => {
        if(submission.result) {
           setCurrentUser()
        }

        console.log(storedCurrentUser)

    })

    return (
        <>
            <form class={''} action={logoutUserHandler} method="post">
                <Drawer.Trigger contextId={'sd1'} as={"div"}>
                    <Button as={"button"} variant={"ghost"} size={"wd"} type={"submit"}>LOGOUT</Button>
                </Drawer.Trigger>
            </form>
        </>
    );
};

export default LogoutUserForm;