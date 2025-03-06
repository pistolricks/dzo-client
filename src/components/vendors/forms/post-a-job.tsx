import AddOns from './partials/add-ons'
import Image from "~/components/ui/image";
import {Component} from "solid-js";

export const metadata = {
    title: 'Post a Job - JobBoard',
    description: 'Page description',
}

const PostAJob: Component<{src: string}> = props => {

    const src = () => props.src;

    return (
        <>
            <div class="mb-10">
                <h1 class="text-4xl font-extrabold font-inter mb-2">Post a job on JobBoard</h1>
                <div class="text-gray-500">Find the best talent from around the world on the most exclusive job board on the internet.</div>
            </div>

            {/* Form */}
            <form class="mb-12">
                <div class="divide-y divide-gray-200 -my-6">
                    {/* Group #1 */}
                    <div class="py-6">
                        <div class="text-lg font-bold text-gray-800 mb-5">
                            <span class="text-indigo-500">1.</span> Your company
                        </div>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium mb-1" for="name">
                                    Company Name <span class="text-red-500">*</span>
                                </label>
                                <input id="name" class="form-input w-full" type="text" required placeholder="E.g., Acme Inc." />
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-1" for="email">
                                    Contact Email <span class="text-red-500">*</span>
                                </label>
                                <input id="email" class="form-input w-full" type="email" required />
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-1" for="file">
                                    Company Logo <span class="text-gray-500">(optional)</span>
                                </label>
                                <div class="flex items-center">
                                    <div class="shrink-0 mr-4">
                                        <Image imgClass="object-cover w-16 h-16 rounded-full border border-gray-200" src={src()} alt="Upload" />
                                    </div>
                                    <div>
                                        <input
                                            id="file"
                                            type="file"
                                            class="block w-full text-sm text-gray-500 file:mr-4 file:py-1.5 file:px-3 file:rounded-full file:border-0 file:text-sm file:font-medium file:bg-indigo-500 file:text-white hover:file:bg-indigo-600 transition duration-150 ease-in-out cursor-pointer"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Group #2 */}
                    <div class="py-6">
                        <div class="text-lg font-bold text-gray-800 mb-5">
                            <span class="text-indigo-500">2.</span> The role
                        </div>
                        <div class="space-y-4">
                            <div>
                                <label class="block text-sm font-medium mb-1" for="position">
                                    Position Name <span class="text-red-500">*</span>
                                </label>
                                <input id="position" class="form-input w-full" type="text" required placeholder="E.g., Senior Software Engineer" />
                            </div>
                            <div>
                                <label class="block text-sm text-gray-800 font-medium mb-1" for="role">
                                    Role <span class="text-rose-500">*</span>
                                </label>
                                <select id="role" class="form-select text-sm py-2 w-full" required>
                                    <option>Programming</option>
                                    <option>Design</option>
                                    <option>Management / Finance</option>
                                    <option>Customer Support</option>
                                    <option>Sales / Marketing</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm text-gray-800 font-medium mb-1" for="commitment">
                                    Commitment <span class="text-rose-500">*</span>
                                </label>
                                <select id="commitment" class="form-select text-sm py-2 w-full" required>
                                    <option>Full-time</option>
                                    <option>Part-time</option>
                                    <option>Intership</option>
                                    <option>Contract / Freelance</option>
                                    <option>Co-founder</option>
                                </select>
                            </div>
                            <div>
                                <label class="block text-sm text-gray-800 font-medium mb-1" for="description">
                                    Job Description <span class="text-rose-500">*</span>
                                </label>
                                <textarea id="description" class="form-textarea text-sm py-2 w-full" rows={4} required />
                            </div>
                            <div>
                                <label class="block text-sm font-medium mb-1" for="salary">
                                    Salary <span class="text-gray-500">(optional)</span>
                                </label>
                                <input id="salary" class="form-input w-full" type="text" />
                                <div class="text-xs text-gray-500 italic mt-2">Example: “$100,000 - $170,000 USD”</div>
                            </div>
                        </div>
                    </div>

                    {/* Group #3 */}
                    <AddOns />
                </div>
            </form>
        </>
    )
}
export default PostAJob;