import PageSubNavigation from "@/components/page-template/page-subnavigation.component";
import AnalyticsCard from "@/components/analytics-items/analytics-card.component";

export default function TestPageName() {
    return(
        <div className="lg:mt-0 mt-20 lg:p-0 p-5">
            <PageSubNavigation title="Analytics"/>
            {/* <AnalyticsCard/> */}
        </div>
    )
}