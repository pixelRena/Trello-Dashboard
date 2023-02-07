import { useState } from "react";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import PlaceholderAvatar from '../../test/placeholder_avatar.jpg';

export default function UserDropdown() {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    return(
        <div className={`relative rounded-2xl ${dropdownOpen ? "defaultBackground" : ""}`}>
            <button className={`${dropdownOpen ? "" : "defaultBackground"} rounded-2xl p-2 w-full`} type="button" onClick={() => setDropdownOpen(!dropdownOpen)}>
                <div className="h-full inline align-middle mr-2">
                    <div className="w-[35px] h-[35px] shadow-[0_0_4px_1px_rgba(0,0,0,0.4)] rounded-full bg-cover inline-block bg-center h-screen bg-no-repeat" style={{"backgroundImage": `url(${PlaceholderAvatar.src})`}}></div>
                </div>
                Serena Dean
                <svg className="w-4 h-4 ml-2 inline" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            <div className={`relative pb-3 pr-3 pl-3 leading-8 ${dropdownOpen ? "" : "hidden"}`}>
                <ul>
                    <li className="cursor-pointer"><IoSettingsOutline className="inline mr-4" size={22}/>Settings</li>
                    <li className="cursor-pointer"><IoIosLogOut className="inline mr-4" size={22}/>Sign Out</li>
                </ul>
            </div>
        </div>
    );
}