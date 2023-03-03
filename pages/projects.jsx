import PageSubNavigation from "@/components/page-template/page-subnavigation.component";
import CardTemplate from "@/components/card-template/card-template.component";
import ProjectsInfoCardTemplate from "@/components/card-template/projects-info-card-template.component";

export default function Projects() {
    return(
        <div className="lg:mt-0 mt-20 lg:p-0 p-5">
            <PageSubNavigation title="Projects"/>
            <div className="flex flex-col lg:flex-row pt-3 pb-3 gap-2">
                <CardTemplate title="Checklist" additionalClasses="w-fit">
                    <form className="h-full flex flex-col justify-between">
                        <div>
                            <input className="form-checkbox bg-transparent rounded-none border-2 border-white outline-none checked:border-white checked:bg-transparent h-5 w-5  focus:ring-transparent focus:border-none focus:outline-none focus:text-transparent hover:text-white/[.4]" type="checkbox"/>
                            <label className="font-normal pl-2">Fix magnifying glass on search input is floating</label>
                        </div>
                        <div>
                            <input className="form-checkbox bg-transparent rounded-none border-2 border-white outline-none checked:border-white checked:bg-transparent h-5 w-5  focus:ring-transparent focus:border-none focus:outline-none focus:text-transparent hover:text-white/[.4]" type="checkbox"/>
                            <label className="font-normal pl-2">Modal not popping up on notification bell click</label>
                        </div>
                        <div>
                            <input className="form-checkbox bg-transparent rounded-none border-2 border-white outline-none checked:border-white checked:bg-transparent h-5 w-5  focus:ring-transparent focus:border-none focus:outline-none focus:text-transparent hover:text-white/[.4]" type="checkbox"/>
                            <label className="font-normal pl-2">Dashboard "Avg Task Completion" statistics are not appearing</label>
                        </div>
                    </form>
                </CardTemplate>
                <CardTemplate title="Activity Feed" additionalContentClasses="flex flex-col justify-between" additionalClasses="w-fit">
                    <div><span className="italic font-medium">Feb 1</span> Aya checked off 'Fix magnifying glass...'</div>
                    <div><span className="italic font-medium">Jan 25</span> Aya moved this card to Doing</div>
                    <div><span className="italic font-medium">Jan 20</span> Serena created ‘Checklist’</div>
                </CardTemplate>
                <div className="flex flex-col gap-y-2 w-2/5">
                    <ProjectsInfoCardTemplate title="Due Date">
                        <div>February 5, 2023</div>
                    </ProjectsInfoCardTemplate>
                    <ProjectsInfoCardTemplate title="Label(s)">
                        <div>Frontend, Bug</div>
                    </ProjectsInfoCardTemplate>
                    <ProjectsInfoCardTemplate title="Created">
                        <div>January 20, 2023</div>
                    </ProjectsInfoCardTemplate>
                    <ProjectsInfoCardTemplate title="Status">
                        <div className="text-green-400 not-italic">On-track</div>
                    </ProjectsInfoCardTemplate>
                </div>
            </div>
        </div>
    )
};