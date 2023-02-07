import { SlBell } from 'react-icons/sl';
import { useState } from "react";
import NotificationsDropdown from "../notifications-dropdown/notifications-dropdown.component";

export default function Notifications() {
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    return(
        <div className="relative mr-5 top-2 h-full" title="You have 10 new notifications">
            <button className="cursor-pointer" type="button" onClick={() => setNotificationsOpen(!notificationsOpen)}>
                <span className="absolute right-[-8px] text-[9px] bg-active-color rounded-full p-[5px]">10</span>
                <SlBell size={28}/>
            </button>
            <NotificationsDropdown notificationsOpen={notificationsOpen}/>
        </div>
    );
}