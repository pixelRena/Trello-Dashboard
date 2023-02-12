import PageSubNavigation from "@/components/page-template/page-subnavigation.component";
import DashboardCards from "@/components/dashboard-items/dashboard-cards.component";

export default function Dashboard () {

    return(
        <div className="h-[90vh] overflow-y-auto overflow-visible p-5">
            <PageSubNavigation title="Overview"/>
            <DashboardCards/>
        </div>
    );
}