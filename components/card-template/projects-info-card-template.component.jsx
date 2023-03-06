export default function ProjectsInfoCardTemplate({title, children}) {
    return(
        <div className="p-3 gap-10 flex flex-row items-center justify-between w-full bg-primary-color drop-shadow-primary rounded-full">
            <header className="text-lg">{title}</header>
            <div className="italic">{children}</div>
        </div>
    );
};