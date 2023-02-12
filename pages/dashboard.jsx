import PageSubNavigation from "@/components/page-template/page-subnavigation.component";
import DashboardCards from "@/components/dashboard-items/dashboard-cards.component";

export default function Dashboard () {

    return(
        <div className="lg:mt-0 mt-20 lg:p-0 p-5">
            <PageSubNavigation title="Overview"/>
            <DashboardCards/>
        </div>
    );
}