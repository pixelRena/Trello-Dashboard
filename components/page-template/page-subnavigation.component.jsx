import BoardDropdown from "../board-dropdown/board-dropdown.component";
import { BsGearFill } from 'react-icons/bs';

export default function PageSubNavigation ({title}) {
    return(
        <div className="relative pt-4 flex z-10 justify-between lg:flex-row lg:mt-7 lg:mb-1">
            <header className="text-2xl font-bold mr-4">{title}</header>
            <BoardDropdown/>
            <button className="p-2 text-black rounded-full bg-white shadow-md lg:hidden">
                <BsGearFill size={20}/>
            </button>
        </div>
    );
}