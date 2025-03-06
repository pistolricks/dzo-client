export default function Newsletter() {
    return (
        <div class="relative text-center px-4 py-6 group">
            <div
                class="absolute inset-0 rounded-xl bg-gray-50 border border-gray-200 -rotate-1 group-hover:rotate-0 transition duration-150 ease-in-out -z-10"
                aria-hidden="true"
            />
            <div class="font-nycd text-xl text-indigo-500 mb-1">Land your dream job</div>
            <div class="text-2xl font-bold mb-5">Get a weekly email with the latest startup jobs.</div>
            <form class="inline-flex max-w-sm">
                <div class="flex flex-col sm:flex-row justify-center max-w-xs mx-auto sm:max-w-none">
                    <input type="email" class="form-input py-1.5 w-full mb-2 sm:mb-0 sm:mr-2" placeholder="Your email" aria-label="Your email" />
                    <button class="btn-sm text-white bg-indigo-500 hover:bg-indigo-600 shadow-xs whitespace-nowrap" type="submit">
                        Join Newsletter
                    </button>
                </div>
            </form>
        </div>
    )
}