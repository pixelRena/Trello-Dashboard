import BoardDropdown from "../board-dropdown/board-dropdown.component";

export default function PageSubNavigation ({title}) {
    return(
        <div className="relative mt-3 mb-5 flex flex-row z-10">
            <header className="text-2xl font-bold mr-4">{title}</header>
            <BoardDropdown/>
        </div>
    );
}