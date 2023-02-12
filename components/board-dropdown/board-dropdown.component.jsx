import { BiChevronDown } from "react-icons/bi";
import { useState } from "react";
import BoardItems from "../board-items/board-items.component";

export default function BoardDropdown() {
    const [boardDropdown, setBoardDropdown] = useState(false);
    const boardname = "Trellometrics.com";
    
    return(
        <div className="relative font-extralight w-full">
            <div className={`absolute rounded-2xl ${boardDropdown && "bg-primary-color-full"}`}>
                <button className={`pt-1 pr-2 pl-2 text-l border-b-[1px] border-transparent ${!boardDropdown &&  "hover:border-white"}`} onClick={() => setBoardDropdown(!boardDropdown)}>Current Board: {boardname} <BiChevronDown className="inline" size={25}/></button>
                <div className={`relative board-dropdown pt-1 pb-1 ${!boardDropdown && "hidden"}`}>
                    <div className="pr-2 pl-2 font-medium">Select a board:</div>
                    <BoardItems/>
                </div>
            </div>
        </div>
    );
}