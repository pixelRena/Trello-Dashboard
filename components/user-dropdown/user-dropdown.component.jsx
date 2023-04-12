import { useContext } from "react";
import { UserContext } from "@/context/user.context";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";

export default function UserDropdown() {
    const { isUserOpen, setIsUserOpen } = useContext(UserContext);

    return(
        <div className="relative">
            <button className={`relative ${isUserOpen ? "" : "bg-primary-color"} z-[16] rounded-2xl lg:px-2 lg:py-1 p-2 w-full`} type="button" onClick={() => setIsUserOpen(!isUserOpen)} 
            onBlur={() => setIsUserOpen(false)}>                
                <div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-700 rounded-full mr-2">
                    <span className="font-medium text-zinc-300">AD</span>
                </div>
                <div className="inline">
                    <span className="text-white">Alice Doe</span>
                    <svg className="w-4 h-4 ml-2 inline" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
            </button>
            <div className={`absolute w-full pb-3 px-2 top-0 pt-12 z-[14] rounded-2xl drop-shadow-primary leading-8 ${isUserOpen ? "bg-primary-color backdrop-blur-2xl" : "hidden"}`}>
                <div>
                    <button className="block hover:opacity-70"><IoSettingsOutline className="inline mr-4" size={22}/>Settings</button>
                    <button className="block hover:opacity-70"><IoIosLogOut className="inline mr-4" size={22}/>Sign Out</button>
                </div>
            </div>
        </div>
    );
}
