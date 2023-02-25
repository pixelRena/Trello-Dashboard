import NotificationsItems from "../notifcations-items/notifications-items.component";

export default function NotificationsDropdown ({isNotificationsOpen}) {
    return(
        <div className={`absolute lg:right-0 top-10 lg:w-80 w-fit text-sm ${isNotificationsOpen ? "" : "hidden"}`} >
            <div className="flex flex-col bg-primary-color backdrop-blur-3xl drop-shadow-primary rounded-2xl p-3 pb-5">
                <NotificationsItems/>
            </div>
        </div>
    );
}