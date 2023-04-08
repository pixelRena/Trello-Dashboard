export default function DashboardRecentActivity() {
    return (
        <div className="h-[40vh] overflow-y-auto">
            <div className="grid gap-4 lg:ml-4">
                <div className="relative lg:pl-4">
                    <div className=" relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-white">
                        <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-green-300 lg:before:outline-2 before:outline-0 before:outline before:outline-white">
                            <h3 className="text-xl font-normal tracking-wide">Comment: Fix UI Glitches</h3>
                            <time className="text-xs tracking-wide uppercase text-gray-300">Wed 2/1 8:12pm</time>
                            <p className="mt-3"><span>Aya said: </span>
                            <q>I think I fixed the bug. It was a simple fix. Just need someone to test it for me.</q></p>
                        </div>

                        <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-pink-500 lg:before:outline-2 before:outline-0 before:outline before:outline-white">
                            <h3 className="text-xl font-normal tracking-wide">Comment: Code Review</h3>
                            <time className="text-xs tracking-wide uppercase text-gray-300">Mon 1/30 12:32pm</time>
                            <p className="mt-3"><span>Serena said: </span>
                            <q>I changed the due date for the UI Glitches</q></p>
                        </div>

                        <div className="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-red-700 lg:before:outline-2 before:outline-0 before:outline before:outline-white">
                            <h3 className="text-xl font-normal tracking-wide">Deadline Update: Code Review</h3>
                            <time className="text-xs tracking-wide uppercase text-gray-300">Mon 1/30 12:28pm</time>
                            <p className="mt-3">Due date updated</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}