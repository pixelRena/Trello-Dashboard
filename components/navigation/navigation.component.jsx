import SearchBar from "../searchbar/searchbar.component";
import UserDropdown from "../user-dropdown/user-dropdown.component";
import Notifications from "../notifications/notifications.component";

export default function Navigation() {
    return(
        <nav className="lg:bg-transparent lg:relative bg-[#9988FF] w-full fixed lg:p-0 p-5 pr-5 pl-5 flex flex-row justify-between z-[15]"> 
            <SearchBar/>
            <ul className="flex flex-row">  
                <Notifications/>
                <UserDropdown/>
            </ul>
        </nav>
    );
}