import NotificationsItems from "../notifcations-items/notifications-items.component";

export default function NotificationsDropdown ({notificationsOpen}) {
    return(
        <div className={`absolute lg:right-0 top-16 lg:w-80 w-fit text-sm ${notificationsOpen ? "" : "hidden"}`}>
            <div className="flex flex-col bg-primary-color-full drop-shadow-primary rounded-2xl p-3 pb-5">
                <NotificationsItems/>
            </div>
        </div>
    );
}