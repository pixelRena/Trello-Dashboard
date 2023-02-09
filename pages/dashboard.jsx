import Head from "next/head";
import CardTemplate from "@/components/card-template/card-template.component";
import PageSubNavigation from "@/components/page-template/page-subnavigation.component";
import Button from "@/components/buttons/button.component";
import ProgressBar from "@/components/progressbar/progressbar.component";
import DashboardRecentActivity from "@/components/dashboard-items/dashboard-recent-activity.component";

export default function Dashboard () {
    return(
        <>
            <PageSubNavigation title="Overview"/>
            <div className="relative flex flex-row pt-3 pb-3 gap-2">
                    <CardTemplate additionalClasses="text-sm" title="Description">
                    Trellometrics is the key to quick and seamless
                    viewing and analyzing the data for your boards
                    on trello.
                    <br/><br/>
                    #BetterWorkflow
                    </CardTemplate>
                    <CardTemplate additionalClasses="text-sm" title="Cards (20)" additionalContentClasses={"justify-between flex flex-col"}>
                        <div className="pb-2">Completed <span className="float-right">13</span></div>
                        <ProgressBar max={25} value={15} type="good"/>
                        <div className="pt-2 pb-2">Remaining <span className="float-right">7</span></div>
                        <ProgressBar max={100} value={15}/>
                        <div className="pt-5 self-end">
                            <Button>View Cards</Button>
                        </div>
                    </CardTemplate>
                    <CardTemplate additionalClasses="text-2xl" title="Cycle Time">
                        5 days
                    </CardTemplate>
                    <CardTemplate additionalClasses="text-2xl" title="Lead Time">
                        2 days
                    </CardTemplate>
            </div>
            <div className="relative flex flex-row pt-3 pb-3 gap-2">
                    <CardTemplate additionalClasses="text-sm" title="Recent Activity">
                        <DashboardRecentActivity/>
                    </CardTemplate>
                    <CardTemplate additionalClasses="text-sm" title="Active Members">
                    Graph activity
                    </CardTemplate>
            </div>
        </>
    );
}