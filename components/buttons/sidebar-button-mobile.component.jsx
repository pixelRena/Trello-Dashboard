import { useContext } from "react";
import { SidebarContext } from "@/context/sidebar.context";
import { HiMenu, HiOutlineX } from "react-icons/hi";

export default function SideBarButtonMobile() {
    const {isSidebarOpen, setIsSidebarOpen} = useContext(SidebarContext);

    return(
        <button className="fixed z-50 text-black bottom-2 right-2 rounded-full bg-white p-3 lg:hidden" 
        onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
            {
                !isSidebarOpen ? 
                <HiMenu className="mx-auto" size={25}/>
                :
                <HiOutlineX className="mx-auto" size={25}/>
            }
        </button>
    )
} 