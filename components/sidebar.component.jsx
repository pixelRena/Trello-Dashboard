import Link from "next/link";
import { useState } from "react";
import { FiInfo } from "react-icons/fi";
import { SlOptionsVertical } from "react-icons/sl";
import { HiOutlineDocument, HiOutlineShare, HiOutlineUserGroup } from "react-icons/hi";

export default function Sidebar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return(
    <>
    <button className="fixed text-black bottom-0 rounded-md bg-white w-full p-3 lg:hidden" 
    onClick={() => setMenuOpen(!menuOpen)}>
        MENU
    </button>
    <aside className={`defaultBackground lg:flex overflow-x-hidden flex-col lg:w-56 w-full h-screen px-4 py-8 overflow-y-auto ${menuOpen ? "" : "hidden"}`}>
        <div className="text-center m-auto">
            <span className="font-bold lg:text-xl text-2xl">Trellometrics</span>
            <img className="m-auto mt-5" src="/favicon.svg" alt="favicon"/>
        </div>

        <div className="flex flex-col lg:justify-between text-2xl lg:text-base justify-start flex-1 mt-6 m-auto">
            <nav>
                <Link className="flex items-center px-4 py-2 hover:bg-white/25 transition ease-in-out duration-300 rounded-md mb-3" href="#dashboard" onClick={() => setMenuOpen(false)}>
                    <SlOptionsVertical size={22}/>
                    <span className="mx-4">Dashboard</span>
                </Link>

                <Link className="flex items-center px-4 py-2 hover:bg-white/25 transition ease-in-out duration-300 rounded-md  mb-3" href="#" onClick={() => setMenuOpen(false)}>
                    <HiOutlineDocument size={22}/>
                    <span className="mx-4">Projects</span>
                </Link>

                <Link className="flex items-center px-4 py-2 hover:bg-white/25 transition ease-in-out duration-300 rounded-md  mb-3" href="#" onClick={() => setMenuOpen(false)}>
                    <HiOutlineShare size={22}/>
                    <span className="mx-4">Analytics</span>
                </Link>

                <Link className="flex items-center px-4 py-2 hover:bg-white/25 transition ease-in-out duration-300 rounded-md  mb-3" href="#" onClick={() => setMenuOpen(false)}>
                    <HiOutlineUserGroup size={22}/>
                    <span className="mx-4">Collaboration</span>
                </Link>
            </nav>

            <Link href="#" className="flex items-center px-4 py-2 hover:bg-white/25 transition ease-in-out duration-300 rounded-md " onClick={() => setMenuOpen(false)}>
                <FiInfo size={22}/>
                <span className="mx-4">Support</span>
            </Link>
        </div>
    </aside>
    </>
    )
}