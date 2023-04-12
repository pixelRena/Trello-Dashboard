import BoardDropdown from "../board-dropdown/board-dropdown.component";
import { useContext } from "react";
import { BoardContext } from "@/context/board.context";
import { BsGearFill } from 'react-icons/bs';

// * Modal opens for changing board - overview page
// * Modal opens for changing card and items - projects page
// * Only appears for mobile
export default function PageSubNavigation ({title}) {
    const { isModalOpen, setIsModalOpen } = useContext(BoardContext);

    return(
        <div className="relative pt-4 flex z-10 justify-between lg:flex-row lg:mt-7 lg:mb-1">
            <header className="text-2xl font-bold mr-4">{title}</header>
            <BoardDropdown/>
            <button className="p-2 text-black rounded-full bg-white shadow-md lg:hidden" onClick={() => setIsModalOpen(!isModalOpen)}>
                <BsGearFill size={20}/>
            </button>
        </div>
    );
}