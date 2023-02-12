import { createContext, useState } from "react";

export const UserContext = createContext({
    isUserOpen: false,
    setIsUserOpen: () => {},
})

export const UserContextProvider = ({ children }) => {
    const [isUserOpen, setIsUserOpen] = useState(false);
    const value = { isUserOpen, setIsUserOpen };

    return(
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    )
}