// This context is related to the mobile version of the sidebar component.
import { createContext, useState } from "react";

export const SidebarContext = createContext({
    isSidebarOpen: false,
    setIsSidebarOpen: () => {},
});

export const SidebarContextProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const value = { isSidebarOpen, setIsSidebarOpen };

    return(
        <SidebarContext.Provider value={value}>
            {children} 
        </SidebarContext.Provider>
    )
};