export default function CardTemplate ({title, children, additionalClasses, additionalContentClasses}) {
    return(
        <div className={`p-4 flex flex-col w-full bg-primary-color drop-shadow-primary rounded-2xl ${additionalClasses}`}>
            {title && <header className="text-lg pb-2 lg:pb-5">{title}</header>}
            <div className={`font-extralight h-full ${additionalContentClasses}`}>{children}</div>
        </div>
    );
}