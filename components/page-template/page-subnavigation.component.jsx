import BoardDropdown from "../board-dropdown/board-dropdown.component";

export default function PageSubNavigation ({title}) {
    return(
        <div className="relative lg:mt-3 mb-8 lg:mb-5 flex flex-col lg:flex-row z-10">
            <header className="text-2xl font-bold mr-4">{title}</header>
            <BoardDropdown/>
        </div>
    );
}