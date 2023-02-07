import SearchBar from "./searchbar.component";
import UserDropdown from "./user-dropdown.component";
import Notifications from "./notifications.component";

export default function Navigation() {
    return(
        <div className="flex flex-row justify-between"> 
            <SearchBar/>
            <div className="flex flex-row">  
                <Notifications/>
                <UserDropdown/>
            </div>
        </div>
    );
}