import PageSubNavigation from "@/components/page-template/page-subnavigation.component";
import ProjectsCards from "@/components/projects-items/projects-cards.component";

export default function Projects() {
    return(
        <div className="lg:mt-0 mt-20 lg:p-0 p-5">
            <PageSubNavigation title="Projects"/>
            <ProjectsCards/>
        </div>
    )
};