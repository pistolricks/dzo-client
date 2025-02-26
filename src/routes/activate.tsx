import {Component, createEffect, lazy, Match, Switch} from "solid-js";
import ActivateUserForm from '~/components/users/forms/activate-user-form';
import FormLayout from "~/components/layouts/form-layout";
import {AccessorWithLatest, createAsync, RouteSectionProps, useNavigate} from "@solidjs/router";
import {USER} from "~/lib/store";
import {getUser} from "~/lib/users";
import {useLayoutContext} from "~/context/layout-provider";

const Activate: Component<RouteSectionProps> = props => {
    const navigate = useNavigate();
    const {storedCurrentUser} = useLayoutContext();

    createEffect(() => {
        if (storedCurrentUser?.activated) {
            navigate('/')
        }
    })

    return (
        <FormLayout>
            <Switch>
                <Match when={!storedCurrentUser?.activated}>
                    <ActivateUserForm/>
                </Match>
                <Match when={!storedCurrentUser}>
                    <ActivateUserForm/>
                </Match>
            </Switch>
        </FormLayout>
    );
};

export default Activate;