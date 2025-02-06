import {Component, createEffect, createMemo, Show} from "solid-js";
import {useNavigate, useSubmission} from "@solidjs/router";
import {loginUserHandler} from "~/lib/users";
import {TextField, TextFieldErrorMessage, TextFieldInput} from "~/components/ui/text-field";
import {Button} from "../../ui/button";
import {showToast} from "~/components/ui/toast";
import {ChevronLeft} from "~/components/svg";

type PROPS = {}

const LoginUserForm: Component<PROPS> = props => {
    const submission = useSubmission(loginUserHandler);
    const navigate = useNavigate();


    const results = createMemo(() => {
        return submission.result
    })

    createEffect(() => {
        if (results()?.error) {
            showToast({
                variant: "error",
                title: "Error",
                description: results()?.error
            })
        }
    })

    return (
        <>
            <form class={'space-y-4'} action={loginUserHandler} method="post">
                <TextField>
                    <TextFieldInput type="email" autocomplete={'username'} name="email" placeholder="Email"/>
                    <Show when={results()?.error?.email}>
                        <TextFieldErrorMessage>
                            {results()?.error?.email}
                        </TextFieldErrorMessage>
                    </Show>

                </TextField>
                <TextField>
                    <TextFieldInput type="password" autocomplete={'current-password'} required name="password"
                                    placeholder="Password"/>
                    <Show when={results()?.error?.password}>
                        <TextFieldErrorMessage>
                            {results()?.error?.password}
                        </TextFieldErrorMessage>
                    </Show>
                </TextField>
                <div class={'items-center flex flex-row-reverse space-x-2 space-x-reverse'}>
                    <Button as={"button"} variant={'default'} type={"submit"}>Login</Button>
                    <Button
                        as={"A"}
                        href={'/'}
                        variant={'secondary'}
                        size={"icon"}
                        type={"button"}
                    >
                        <ChevronLeft/>
                    </Button>
                </div>
            </form>
        </>
    );
};

export default LoginUserForm;

