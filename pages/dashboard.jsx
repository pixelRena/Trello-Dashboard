import CardTemplate from "@/components/card-template/card-template.component";
import PageSubNavigation from "@/components/page-template/page-subnavigation.component";
import Button from "@/components/buttons/button.component";
import ProgressBar from "@/components/progressbar/progressbar.component";
import DashboardRecentActivity from "@/components/dashboard-items/dashboard-recent-activity.component";
// import { CanvasJSChart } from "canvasjs-react-charts";
import { SlQuestion } from "react-icons/sl";

// To be removed
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

export default function Dashboard () {


    const options = {
        title: {
          text: ""
        },
        backgroundColor: "transparent",
        axisX: {
            labelFontColor: "#fff",
            lineColor: "#fff",
        },
        axisY: {
            labelFontColor: "#fff",
            lineColor: "#fff",
            gridColor: "#fff",
            maximum: 5,
        },
        data: [{				
                  type: "column",
                  dataPoints: [
                      { label: "Sun",  y: 2  },
                      { label: "Mon", y: 1  },
                      { label: "Tues", y: 2  },
                      { label: "Weds",  y: 5  },
                      { label: "Thurs",  y: 2  },
                      { label: "Fri",  y: 0  },
                      { label: "Sat",  y: 1  }
                  ]
         }]
    }

    return(
        <div className="h-[90vh] overflow-y-auto overflow-visible">
            <PageSubNavigation title="Overview"/>
            <div className="relative flex flex-row pt-3 pb-3 gap-2 ">
                <CardTemplate additionalClasses="text-sm 2xl:text-lg" additionalContentClasses="flex flex-col justify-between" title="Description">
                <div>
                    Trellometrics is the key to quick and seamless
                    viewing and analyzing the data for your boards
                    on trello.
                </div>
                <div>#BetterWorkflow</div>
                </CardTemplate>
                <CardTemplate additionalClasses="text-sm 2xl:text-lg" title="Cards (20)" additionalContentClasses="justify-around flex flex-col">
                    <div>
                        <div className="pb-2">Completed <span className="float-right">13</span></div>
                        <ProgressBar max={25} value={15} type="good"/>
                    </div>
                    <div>
                        <div className="pb-2">Remaining <span className="float-right">7</span></div>
                        <ProgressBar max={100} value={15}/>
                    </div>
                    <div className="self-end">
                        <Button>View Cards</Button>
                    </div>
                </CardTemplate>
                <CardTemplate additionalClasses="text-2xl" title="Cycle Time">
                    <div className="m-auto w-4/6">
                        <CircularProgressbar value={70} text={"5 days"}
                            strokeWidth={6}
                            styles={buildStyles({
                                textSize: "1rem",
                                textColor: "#fff",
                                pathColor: 70 < 20 ? "#FF5C5C" : 70 < 50 ? "#FFC05C" : "#71EB84",
                                trailColor: "#fff",
                            })}/>
                    </div>
                    <hgroup title="Cycle Time average measures the amount of time it takes for cards to be completed from the moment the card is created and compares to when it is finished. The less days it takes, the better. You can use this metric to analyze how fast or slow progress is moving.">
                        <SlQuestion className="float-right"/>
                    </hgroup>
                </CardTemplate>
                <CardTemplate additionalClasses="text-2xl" title="Lead Time">
                    <div className="m-auto w-4/6">
                        <CircularProgressbar value={90} text={"2 days"}
                            strokeWidth={6}
                            styles={buildStyles({
                                textSize: "1rem",
                                textColor: "#fff",
                                pathColor: 70 < 20 ? "#FF5C5C" : 70 < 50 ? "#FFC05C" : "#71EB84",
                                trailColor: "#fff",
                            })}/>
                    </div>
                    <hgroup title="Lead Time average measures the amount of time it takes for cards to be completed from the moment it is worked on compared to when it is finished. The less days it takes, the better. You can use this metric to analyze how fast or slow progress is moving.">
                        <SlQuestion className="float-right"/>
                    </hgroup>
                </CardTemplate>
            </div>
            <div className="relative flex flex-row pt-3 pb-3 gap-2">
                <CardTemplate additionalClasses="text-sm 2xl:text-lg w-fit" title="Recent Activity">
                    <DashboardRecentActivity/>
                </CardTemplate>
                <CardTemplate additionalClasses="text-sm 2xl:text-lg" title="Active Members (5 members)">
                    {/* <CanvasJSChart options={options} containerProps={{ width: '100%', height: '300px' }} /> */}
                </CardTemplate>
            </div>

        </div>
    );
}