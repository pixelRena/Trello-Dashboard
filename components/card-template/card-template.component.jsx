export default function CardTemplate ({title, width, children}) {
    return(
        <div className={`p-4 flex flex-col bg-primary-color drop-shadow-primary rounded-2xl`} style={{width: width}}>
            <header className="text-lg pb-5">{title}</header>
            <div className="font-extralight">{children}</div>
        </div>
    );
}