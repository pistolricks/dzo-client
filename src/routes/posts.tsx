import {Component, JSXElement} from "solid-js";
import {Image} from "@kobalte/core";
import {useLayoutContext} from "~/context/layout-provider"; // Fix: Remove or correct import if unused.

const PostLayout: Component<{
    children: JSXElement;
}> = props => {
    const {getHeight} = useLayoutContext()

    const children = () => props.children;

    return (
        <div class={'container'}>
            {/* Content */}
            <div
                style={{
                    height: getHeight() + 'px'
                }}
                class="w-full flex justify-center items-center overflow-y-auto scrollbar-hide relative">

                            {children()}

                    </div>

            {/* Right side */}
            <div class="fixed right-0 top-0 bottom-0 hidden lg:block lg:w-1/2 overflow-hidden" aria-hidden="true">
                {/* Bg */}
                <div class="absolute inset-0 bg-linear-to-b from-indigo-100 to-white pointer-events-none -z-10" aria-hidden="true" />

                {/* Illustration */}
                <div class="hidden md:block absolute right-0 pointer-events-none -z-10" aria-hidden="true">
                    <Image.Root>
                        <img src="logo.jpg" class="max-w-none" alt="Page Illustration" loading="eager" />
                    </Image.Root>
                </div>

                {/* Quotes */}
                <div class="absolute inset-0 flex flex-col justify-center">
                    <div class="px-5 sm:px-6 py-8">
                        <div class="w-full max-w-xl mx-auto">
                            <div class="space-y-3 group">
                                {/* Testimonial */}
                                <div class="p-4 bg-sky-50 border border-sky-200 rounded-xl opacity-30 hover:opacity-100 transition duration-150 ease-in-out">
                                    <div class="flex items-center space-x-5">
                                        <div class="relative shrink-0">
                                            <Image.Root>
                                                <img class="rounded-full" src="logo.jpg" width={88} height={88} alt="Testimonial 04" />
                                            </Image.Root>

                                            <svg class="absolute top-0 right-0 fill-indigo-400" width="26" height="17" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 16.026h8.092l6.888-16h-4.592L0 16.026Zm11.02 0h8.092L26 .026h-4.65l-10.33 16Z" />
                                            </svg>
                                        </div>
                                        <figure>
                                            <blockquote class="font-bold m-0 pb-1">
                                                <p>Listing our jobs through JobBoard was simple, quick, and helped us find amazing candidates.</p>
                                            </blockquote>
                                            <figcaption class="text-sm font-medium">
                                                Lisa Smith, developer at{' '}
                                                <a class="text-sky-500 hover:underline" href="#0">
                                                    AppyYou
                                                </a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                                {/* Testimonial */}
                                <div class="p-4 bg-sky-50 border border-sky-200 rounded-xl hover:opacity-100 transition duration-150 ease-in-out">
                                    <div class="flex items-center space-x-5">
                                        <div class="relative shrink-0">
                                            <Image.Root>
                                                <img class="rounded-full" src="logo.jpg" width={88} height={88} alt="Testimonial 04" />
                                            </Image.Root>
                                            <svg class="absolute top-0 right-0 fill-indigo-400" width="26" height="17" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 16.026h8.092l6.888-16h-4.592L0 16.026Zm11.02 0h8.092L26 .026h-4.65l-10.33 16Z" />
                                            </svg>
                                        </div>
                                        <figure>
                                            <blockquote class="font-bold m-0 pb-1">
                                                <p>Listing our jobs through JobBoard was simple, quick, and helped us find amazing candidates.</p>
                                            </blockquote>
                                            <figcaption class="text-sm font-medium">
                                                Mark Mills, developer at{' '}
                                                <a class="text-sky-500 hover:underline" href="#0">
                                                    App.com
                                                </a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                                {/* Testimonial */}
                                <div class="p-4 bg-sky-50 border border-sky-200 rounded-xl opacity-30 hover:opacity-100 transition duration-150 ease-in-out">
                                    <div class="flex items-center space-x-5">
                                        <div class="relative shrink-0">
                                            <Image.Root>
                                                <img class="rounded-full" src="logo.jpg" width={88} height={88} alt="Testimonial 04" />
                                            </Image.Root>
                                            <svg class="absolute top-0 right-0 fill-indigo-400" width="26" height="17" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 16.026h8.092l6.888-16h-4.592L0 16.026Zm11.02 0h8.092L26 .026h-4.65l-10.33 16Z" />
                                            </svg>
                                        </div>
                                        <figure>
                                            <blockquote class="font-bold m-0 pb-1">
                                                <p>Listing our jobs through JobBoard was simple, quick, and helped us find amazing candidates.</p>
                                            </blockquote>
                                            <figcaption class="text-sm font-medium">
                                                Lisa Smith, developer at{' '}
                                                <a class="text-sky-500 hover:underline" href="#0">
                                                    AppyYou
                                                </a>
                                            </figcaption>
                                        </figure>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}