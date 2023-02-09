import SearchBar from "./searchbar.component";
import UserDropdown from "./user-dropdown.component";
import Notifications from "./notifications.component";

export default function Navigation() {
    return(
        <nav className="flex flex-row justify-between"> 
            <SearchBar/>
            <ul className="flex flex-row">  
                <Notifications/>
                <UserDropdown/>
            </ul>
        </nav>
    );
}