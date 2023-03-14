import PageSubNavigation from "@/components/page-template/page-subnavigation.component";
import CollaborationCard from "@/components/collaboration-items/collaboration-card.component";

export default function Collaboration() {
    return(
        <div className="lg:mt-0 mt-20 lg:p-0 p-5">
            <PageSubNavigation title="Collaboration"/>
            <CollaborationCard/>
        </div>
    );
}