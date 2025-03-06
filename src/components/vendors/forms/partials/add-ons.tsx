import {createSignal} from "solid-js";


export default function AddOns() {

    const [getStick,setStick] = createSignal<boolean>(false)
    const [getHeight, setHighlight] = createSignal<boolean>(true)

    return (
        <div class="py-6">
            <div class="text-lg font-bold text-gray-800 mb-5">
                <span class="text-indigo-500">3.</span> Select add-ons and pay
            </div>
            <div class="space-y-4">
                <button
                    class={`w-full text-left py-3 px-4 border rounded-sm ${getStick() ? 'border-indigo-500 ring-2 ring-indigo-200' : 'border-gray-200'
                    }`}
                    onClick={(e) => {
                        e.preventDefault();
                       setStick(!getStick());
                    }}
                >
                    <div class="flex justify-between items-center">
                        <div>
                            <div class="text-sm text-gray-800 font-medium mb-1">Stick your post to stay on top (+$79)</div>
                            <div class="text-sm text-gray-500 italic">4x more views</div>
                        </div>
                        <div class="shrink-0 rounded-full border border-gray-200 ml-3">
                            {getStick() ? (
                                <svg class="fill-indigo-500" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 15h-4v-4a1 1 0 0 0-2 0v4h-4a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2Z" />
                                </svg>
                            ) : (
                                <svg x-show="checked" class="fill-teal-500" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m20.28 12.28-6.292 6.294-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0-1.414-1.414Z" />
                                </svg>
                            )}
                        </div>
                    </div>
                </button>
                <button
                    class={`w-full text-left py-3 px-4 border rounded-sm ${getHeight() ? 'border-indigo-500 ring-2 ring-indigo-200' : 'border-gray-200'
                    }`}
                    onClick={(e) => {
                        e.preventDefault();
                        setHighlight(!getHeight());
                    }}
                >
                    <div class="flex justify-between items-center">
                        <div>
                            <div class="text-sm text-gray-800 font-medium mb-1">Highlight your post in indigo (+$49)</div>
                            <div class="text-sm text-gray-500 italic">2x more views</div>
                        </div>
                        <div class="shrink-0 rounded-full border border-gray-200 ml-3">
                            {getHeight() ? (
                                <svg class="fill-indigo-500" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 15h-4v-4a1 1 0 0 0-2 0v4h-4a1 1 0 0 0 0 2h4v4a1 1 0 0 0 2 0v-4h4a1 1 0 0 0 0-2Z" />
                                </svg>
                            ) : (
                                <svg x-show="checked" class="fill-teal-500" width="32" height="32" xmlns="http://www.w3.org/2000/svg">
                                    <path d="m20.28 12.28-6.292 6.294-2.293-2.293a1 1 0 0 0-1.414 1.414l3 3a1 1 0 0 0 1.414 0l7-7a1 1 0 0 0-1.414-1.414Z" />
                                </svg>
                            )}
                        </div>
                    </div>
                </button>
            </div>
            <div class="mt-6">
                <button class="btn w-full text-white bg-indigo-500 hover:bg-indigo-600 shadow-xs">Pay Now - $349</button>
            </div>
            <div class="mt-4">
                <div class="text-xs text-gray-500">
                    By clicking pay you agree to our{' '}
                    <a class="underline" href="#0">
                        Terms of Service
                    </a>{' '}
                    and{' '}
                    <a class="underline" href="#0">
                        Privacy Policy
                    </a>
                    .
                </div>
            </div>
        </div>
    )
}
