export default function ChatroomInput() {
    return(
        <div className="flex items-end h-full">
            <div className="relative flex flex-row items-center bottom-0 w-full border rounded-full border-white pr-2">
                <label className="hidden" htmlFor="messageBox">Enter your message here</label>
                <input id="message-box" type="text" className="text-sm w-full bg-transparent border-none text-white placeholder-white focus:ring-0" placeholder="Type your message ..."/>
                <div className="">
                    <button className="px-6 text-white rounded-full bg-active-color hover:bg-blue-700">Search</button>
                </div>
            </div>
        </div>
    );
}