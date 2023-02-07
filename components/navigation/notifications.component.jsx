import { SlBell } from 'react-icons/sl';

export default function Notifications() {
    return(
        <div className="relative mr-5 top-2 h-full cursor-pointer" title="You have 10 new notifications">
            <span className="absolute right-[-8px] text-[9px] bg-[#2C3EDC] rounded-full p-[5px]">10</span>
            <SlBell size={28}/>
        </div>
    );
}