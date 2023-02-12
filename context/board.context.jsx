import { createContext, useState } from "react";

export const BoardContext = createContext({
    isBoardOpen: false,
    setIsBoardOpen: () => {},
});

export const BoardContextProvider = ({ children }) => {
    const [isBoardOpen, setIsBoardOpen] = useState(false);
    const value = { isBoardOpen, setIsBoardOpen };

    return(
        <BoardContext.Provider value={value}>
            {children}
        </BoardContext.Provider>
    )
}