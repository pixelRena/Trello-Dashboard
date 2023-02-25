import { SlBell } from 'react-icons/sl';
import { useContext } from "react";
import NotificationsDropdown from "../notifications-dropdown/notifications-dropdown.component";
import { NotificationsContext } from "@/context/notifications.context";

export default function Notifications() {
    const { isNotificationsOpen, setIsNotificationsOpen } = useContext(NotificationsContext);

    return(
        <div className="relative mr-5 top-2 h-full" title="You have 10 new notifications">
            <button className="cursor-pointer" type="button" onClick={() => setIsNotificationsOpen(!isNotificationsOpen)}>
                <span className="absolute right-[-8px] text-[9px] bg-active-color rounded-full p-[5px]">10</span>
                <SlBell size={28}/>
            </button>
            <NotificationsDropdown isNotificationsOpen={isNotificationsOpen}/>
        </div>
    );
}