import { useContext } from "react";
import { useRouter } from "next/router";
import { BoardContext } from "@/context/board.context";
import { BiChevronDown } from "react-icons/bi";
import BoardItems from "../board-dropdown-items/board-items.component";
import ListItems from "../board-dropdown-items/list-items.component";
import CardItems from "../board-dropdown-items/card-items.component";

export default function BoardDropdown() {
    const router = useRouter();
    const { 
        isBoardOpen, setIsBoardOpen, 
        isListOpen, setIsListOpen, 
        isCardOpen, setIsCardOpen } = useContext(BoardContext);
    // To be removed with api implementation
    const boardName = "Trellometrics.com";
    const listName = "Doing";
    const cardName = "Fix UI Glitch";
    
    return(
        <div className="hidden font-extralight w-full text-center lg:relative lg:block">
            <div className="absolute flex flex-col lg:gap-5 w-full lg:w-fit lg:flex-row">
                <div className={`${isBoardOpen && "rounded-2xl bg-primary-color backdrop-blur-2xl"}`}>
                    <button className={`pt-1 ml-2 mr-2 text-l border-b-[1px] border-transparent ${!isBoardOpen &&  "lg:hover:border-white"}`} onClick={() => setIsBoardOpen(!isBoardOpen)} onBlur={() => setIsBoardOpen(false)}>Current Board: {boardName} <BiChevronDown className="inline" size={25}/></button>
                    <div className={`relative board-dropdown pt-1 pb-1 ${!isBoardOpen && "hidden"}`}>
                        <div className="pr-2 pl-2 font-medium">Select a board:</div>
                        <BoardItems/>
                    </div>
                </div>
                { router.pathname === "/projects" && (
                    <>
                    <div className={`${isListOpen && "rounded-2xl bg-primary-color backdrop-blur-2xl"}`}>
                        <button className={`pt-1 ml-2 mr-2 text-l border-b-[1px] border-transparent ${!isListOpen &&  "lg:hover:border-white"}`} onClick={() => setIsListOpen(!isListOpen)} onBlur={() => setIsListOpen(false)}>Current List: {listName} <BiChevronDown className="inline" size={25}/></button>
                        <div className={`relative list-dropdown pt-1 pb-1 ${!isListOpen && "hidden"}`}>
                            <div className="pr-2 pl-2 font-medium">Select a list:</div>
                            <ListItems/>
                        </div>
                    </div>
                    <div className={`${isCardOpen && "rounded-2xl bg-primary-color backdrop-blur-2xl"}`}>
                        <button className={`pt-1 ml-2 mr-2 text-l border-b-[1px] border-transparent ${!isCardOpen &&  "lg:hover:border-white"}`} onClick={() => setIsCardOpen(!isCardOpen)} onBlur={() => setIsCardOpen(false)}>Current Card: {cardName} <BiChevronDown className="inline" size={25}/></button>
                        <div className={`relative list-dropdown pt-1 pb-1 ${!isCardOpen && "hidden"}`}>
                            <div className="pr-2 pl-2 font-medium">Select a card:</div>
                            <CardItems/>
                        </div>
                    </div>
                    </>
                    )
                }
            </div>
        </div>
    );
}