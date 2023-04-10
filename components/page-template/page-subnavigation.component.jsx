import BoardDropdown from "../board-dropdown/board-dropdown.component";

export default function PageSubNavigation ({title}) {
    return(
        <div className="relative pt-4 flex flex-col z-10 lg:flex-row lg:mt-7 lg:mb-1">
            <header className="text-2xl font-bold mr-4">{title}</header>
            <BoardDropdown/>
        </div>
    );
}