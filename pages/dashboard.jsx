import CardTemplate from "@/components/card-template/card-template.component";
import PageSubNavigation from "@/components/page-template/page-subnavigation.component";

export default function Dashboard () {
    return(
        <>
            <PageSubNavigation title="Overview"/>
            <CardTemplate title="Description" width="25%">
            Trellometrics is the key to quick and seamless
            viewing and analyzing the data for your boards
            on trello. 
            <br/><br/>
            #BetterWorkflow
            </CardTemplate>
        </>
    );
}