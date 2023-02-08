export default function PageSubNavigation ({title}) {
    return(
        <div className="mt-3 mb-5 flex flex-row justify-between">
            <header className="text-2xl font-bold">{title}</header>
        </div>
    );
}