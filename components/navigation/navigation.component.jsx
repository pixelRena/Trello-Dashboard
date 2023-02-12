import SearchBar from "../searchbar/searchbar.component";
import UserDropdown from "../user-dropdown/user-dropdown.component";
import Notifications from "../notifications/notifications.component";

export default function Navigation() {
    return(
        <nav className="relative flex flex-row justify-between z-[15]"> 
            <SearchBar/>
            <ul className="flex flex-row">  
                <Notifications/>
                <UserDropdown/>
            </ul>
        </nav>
    );
}