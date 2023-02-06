import Link from "next/link";
import { FiInfo } from "react-icons/fi";
import { SlOptionsVertical } from "react-icons/sl";
import { HiOutlineDocument, HiOutlineShare, HiOutlineUserGroup } from "react-icons/hi";

export default function Sidebar() {
    return(
    <aside className="flex flex-col w-56 h-screen px-4 py-8 overflow-y-auto">
        <div className="text-center m-auto">
            <span className="font-bold text-xl">Trellometrics</span>
            <img className="m-auto mt-5" src="/favicon.svg" alt="favicon"/>
        </div>

        <div className="flex flex-col justify-between flex-1 mt-6">
            <nav>
                <Link className="flex items-center px-4 py-2 hover:bg-white/25 transition ease-in-out duration-300 rounded-md mb-3" href="#">
                    <SlOptionsVertical size={22}/>
                    <span className="mx-4">Dashboard</span>
                </Link>

                <Link className="flex items-center px-4 py-2 hover:bg-white/25 transition ease-in-out duration-300 rounded-md  mb-3" href="#">
                    <HiOutlineDocument size={22}/>
                    <span className="mx-4">Projects</span>
                </Link>

                <Link className="flex items-center px-4 py-2 hover:bg-white/25 transition ease-in-out duration-300 rounded-md  mb-3" href="#">
                    <HiOutlineShare size={22}/>
                    <span className="mx-4">Analytics</span>
                </Link>

                <Link className="flex items-center px-4 py-2 hover:bg-white/25 transition ease-in-out duration-300 rounded-md  mb-3" href="#">
                    <HiOutlineUserGroup size={22}/>
                    <span className="mx-4">Collaboration</span>
                </Link>
            </nav>

            <Link href="#" className="flex items-center px-4 py-2 hover:bg-white/25 transition ease-in-out duration-300 rounded-md ">
                <FiInfo size={22}/>
                <span className="mx-4">Support</span>
            </Link>
        </div>

        <style jsx>
        {
            `
            aside {
                background: linear-gradient(134.07deg, rgba(108, 102, 174, 0.55) 23.13%, rgba(196, 73, 158, 0.55) 122.17%);
            }
            `
        }
        </style>

    </aside>
    )
}