import Link from "next/link";
import SideBarButtonMobile from "./buttons/sidebar-button-mobile.component";
import { useRouter } from "next/router";
import { SidebarContext } from "@/context/sidebar.context";
import { useContext } from "react";
import { FiInfo } from "react-icons/fi";
import { SlOptionsVertical } from "react-icons/sl";
import { HiOutlineDocument, HiOutlineShare, HiOutlineUserGroup } from "react-icons/hi";

export default function Sidebar() {
    const {setIsSidebarOpen, isSidebarOpen} = useContext(SidebarContext);
    const router = useRouter();

    return(
    <>
    <SideBarButtonMobile/>
    <aside className={`h-full z-20 lg:bg-primary-color bg-primary-color-full lg:flex fixed overflow-x-hidden flex-col lg:w-56 w-full px-4 py-8 overflow-y-auto ${isSidebarOpen ? "" : "hidden"}`}>
        <div className="text-center m-auto">
            <span className="font-bold lg:text-xl text-2xl">Trellometrics</span>
            <img className="m-auto mt-5" src="/favicon.svg" alt="favicon"/>
        </div>

        <div className="flex flex-col lg:justify-between text-2xl lg:text-base justify-start flex-1 mt-6 m-auto">
            <nav>
                <Link className="flex items-center px-4 py-2 hover:bg-white/25 transition ease-in-out duration-300 rounded-md mb-3" href="/dashboard" onClick={() => setIsSidebarOpen(false)}>
                    <SlOptionsVertical color={router.pathname === "/dashboard" && "#2C3EDC"} size={22}/>
                    <span className="mx-4">Dashboard</span>
                </Link>

                <Link className="flex items-center px-4 py-2 hover:bg-white/25 transition ease-in-out duration-300 rounded-md  mb-3" href="/projects" onClick={() => setIsSidebarOpen(false)}>
                    <HiOutlineDocument color={router.pathname === "/projects" && "#2C3EDC"} size={22}/>
                    <span className="mx-4">Projects</span>
                </Link>

                <Link className="flex items-center px-4 py-2 hover:bg-white/25 transition ease-in-out duration-300 rounded-md  mb-3" href="/statistics" onClick={() => setIsSidebarOpen(false)}>
                    <HiOutlineShare color={router.pathname === "/statistics" && "#2C3EDC"} size={22}/>
                    <span className="mx-4">Analytics</span>
                </Link>

                <Link className="flex items-center px-4 py-2 hover:bg-white/25 transition ease-in-out duration-300 rounded-md  mb-3" href="/collaboration" onClick={() => setIsSidebarOpen(false)}>
                    <HiOutlineUserGroup color={router.pathname === "/collaboration" && "#2C3EDC"} size={22}/>
                    <span className="mx-4">Collaboration</span>
                </Link>
            </nav>

            <Link href="#" className="flex items-center px-4 py-2 hover:bg-white/25 transition ease-in-out duration-300 rounded-md " onClick={() => setIsSidebarOpen(false)}>
                <FiInfo size={22}/>
                <span className="mx-4">Support</span>
            </Link>
        </div>
    </aside>
    </>
    )
}