import { useContext } from "react";
import { BoardContext } from "@/context/board.context";
import { BiChevronDown } from "react-icons/bi";
import BoardItems from "../board-items/board-items.component";

export default function isBoardOpen() {
    const { isBoardOpen, setIsBoardOpen } = useContext(BoardContext);
    // To be removed with api implementation
    const boardName = "Trellometrics.com";
    
    return(
        <div className="relative font-extralight w-full">
            <div className={`absolute rounded-2xl ${isBoardOpen && "bg-primary-color-full"}`}>
                <button className={`pt-1 pr-2 pl-2 text-l border-b-[1px] border-transparent ${!isBoardOpen &&  "hover:border-white"}`} onClick={() => setIsBoardOpen(!isBoardOpen)}>Current Board: {boardName} <BiChevronDown className="inline" size={25}/></button>
                <div className={`relative board-dropdown pt-1 pb-1 ${!isBoardOpen && "hidden"}`}>
                    <div className="pr-2 pl-2 font-medium">Select a board:</div>
                    <BoardItems/>
                </div>
            </div>
        </div>
    );
}