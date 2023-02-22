import { useContext } from "react";
import { UserContext } from "@/context/user.context";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import PlaceholderAvatar from '../../test/placeholder_avatar.jpg';

export default function UserDropdown() {
    const { isUserOpen, setIsUserOpen } = useContext(UserContext);

    return(
        <div className="relative">
            <button className={`relative ${isUserOpen ? "" : "bg-primary-color"} z-[16] rounded-2xl lg:px-2 lg:py-1 p-3 w-full`} type="button" onClick={() => setIsUserOpen(!isUserOpen)}>
                <div className="h-full lg:inline align-middle mr-2 hidden">
                    <div className="w-[25px] h-[25px] lg:w-[35px] lg:h-[35px] shadow-primary rounded-full bg-cover inline-block bg-center h-screen bg-no-repeat" style={{"backgroundImage": `url(${PlaceholderAvatar.src})`}}></div>
                </div>
                <div className="inline">
                    <span className="text-white">Alice Doe</span>
                    <svg className="w-4 h-4 ml-2 inline" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                </div>
            </button>
            <div className={`absolute w-full pb-3 pr-3 pl-3 top-0 pt-12 z-[14] rounded-2xl drop-shadow-primary leading-8 ${isUserOpen ? "bg-primary-color backdrop-blur-2xl" : "hidden"}`}>
                <div>
                    <button className="block"><IoSettingsOutline className="inline mr-4" size={22}/>Settings</button>
                    <button className="block"><IoIosLogOut className="inline mr-4" size={22}/>Sign Out</button>
                </div>
            </div>
        </div>
    );
}
