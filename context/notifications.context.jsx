import { createContext, useState } from "react";

export const NotificationsContext = createContext({
    isNotificationsOpen: false,
    setIsNotificationsOpen: () => {},
})

export const NotificationsContextProvider = ({ children }) => {
    const [isNotificationsOpen, setIsNotificationsOpen] = useState(false);
    const value = { isNotificationsOpen, setIsNotificationsOpen };

    return(
     <NotificationsContext.Provider value={value}>
        {children}
     </NotificationsContext.Provider> 
    )
}

