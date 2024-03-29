export default function SearchBar() {
    return(
        <form className="relative h-fit">
            <label className="hidden" htmlFor="searchInput">Search Bar</label>
            <input className="w-[30vw] font-extralight bg-white/[.80] border-0 ring-0 outline-0 backdrop-blur-2xl rounded-2xl p-4 text-black focus:bg-white lg:w-[22vw] hover:bg-white focus:ring-0 focus:outline-0 focus:border-0 lg:p-3" type="text" id="searchInput" placeholder="Search tasks ..."/>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-black opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
        </form>
    );
}