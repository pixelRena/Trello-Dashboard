export default function Button({children, current}) {
    return(
        <button className={`${current && 'bg-white text-neutral-800'} rounded-lg text-[13px] font-normal border-white pr-3 pl-3 border-[1px] hover:bg-white hover:text-black`}>{children}</button>
    );
}