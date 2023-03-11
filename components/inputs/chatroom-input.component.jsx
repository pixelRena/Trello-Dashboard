export default function ChatroomInput() {
    return(
        <div className="flex">
            <div className="relative w-full">
                <input type="text" className="text-sm w-full bg-transparent rounded-full border-white text-white placeholder-white focus:shadow focus:outline-none" placeholder="Type your message ..."/>
                <div className="absolute top-2 right-2">
                    <button className="px-6 text-white rounded-full bg-active-color hover:bg-blue-700">Search</button>
                </div>
            </div>
        </div>
    );
}