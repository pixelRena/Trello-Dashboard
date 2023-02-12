export default function SearchBar() {
    return(
        <form className="relative h-fit">
            <label className="hidden" htmlFor="searchInput">Search Bar</label>
            <input className="w-[22vw] focus:drop-shadow-primary font-extralight bg-primary-color rounded-2xl p-3" type="text" id="searchInput" placeholder="Search tasks ..."/>
            <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                <svg aria-hidden="true" className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
            </div>
        </form>
    );
}