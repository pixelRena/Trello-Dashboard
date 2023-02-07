import NotificationsItems from "../notifcations-items/notifications-items.component";

export default function NotificationsDropdown ({notificationsOpen}) {
    return(
        <div className={`absolute right-0 w-80 text-sm ${notificationsOpen ? "" : "hidden"}`}>
            <div className="flex flex-col bg-primary-color rounded-2xl p-3 pb-5">
                <NotificationsItems/>
            </div>
        </div>
    );
}