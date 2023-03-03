import { createContext, useState } from "react";

export const BoardContext = createContext({
    isBoardOpen: false,
    setIsBoardOpen: () => {},
    isListOpen: false,
    setIsListOpen: () => {},
    isCardOpen: false,
    setIsCardOpen: () => {},
});

export const BoardContextProvider = ({ children }) => {
    const [isBoardOpen, setIsBoardOpen] = useState(false);
    const [isListOpen, setIsListOpen] = useState(false);
    const [isCardOpen, setIsCardOpen] = useState(false);
    const value = { isBoardOpen, setIsBoardOpen, isListOpen, setIsListOpen, isCardOpen, setIsCardOpen };

    return(
        <BoardContext.Provider value={value}>
            {children}
        </BoardContext.Provider>
    )
}