import Dialog from "@corvu/dialog";
import {A, RouteSectionProps} from "@solidjs/router";
import {lazy} from "solid-js";
import BaseDialog from "~/components/ui/dialogs/base-dialog";

export default function About(props: RouteSectionProps) {
    return (
        <div class="text-center mx-auto text-gray-700 p-4">
            <h1 class="max-6-xs text-6xl text-sky-700 font-thin uppercase my-16">About Page</h1>

            <p class="mt-8">
                Visit{" "}
                About
            </p>
            <p class="my-4">
                <A href="/" class="text-sky-600 hover:underline">
                    Home
                </A>
                {" - "}
                <span>About Page</span>
            </p>


            <BaseDialog contextId={'about-1'}>
               <Dialog.Trigger class={'absolute bottom-0 left-0 p-10'} contextId={'about-1'}>
                   About
               </Dialog.Trigger>

                <Dialog.Content class={'absolute bottom-0'} contextId={'about-1'}>

                    At Dzo, we’re revolutionizing the way you advertise your services by offering you a completely free platform to showcase your skills and reach a wider audience.

                    What We Offer:

                    Zero Cost Advertising: Say goodbye to expensive ads. Signing up and listing your services is 100% free. Any Service, Anytime: Whether you’re a plumber, tutor, hairdresser, fitness coach, or any other service provider, our platform welcomes you!

                    Direct Customer Connections: Customers can easily contact you with the information you provide—no middlemen or hidden fees.
                </Dialog.Content>
            </BaseDialog>
        </div>
    );
}
