import SearchBar from "./searchbar.component";
import UserDropdown from "./user-dropdown.component";

export default function Navigation() {
    return(
        <div className="flex flex-row justify-between"> 
            <SearchBar/>
            <div>  
                <UserDropdown/>
            </div>
        </div>
    );
}