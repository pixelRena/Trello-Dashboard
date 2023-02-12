import CardTemplate from "@/components/card-template/card-template.component";
import PageSubNavigation from "@/components/page-template/page-subnavigation.component";
import Button from "@/components/buttons/button.component";
import ProgressBar from "@/components/progressbar/progressbar.component";
import DashboardRecentActivity from "@/components/dashboard-items/dashboard-recent-activity.component";
import Chart  from "chart.js/auto";
import { Bar } from 'react-chartjs-2';
import { SlQuestion } from "react-icons/sl";

// To be removed
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

export default function Dashboard () {

    const data = {
      labels: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
      datasets: [
        {
          // Label for bars
          label: "Active Members",
          // Data or value of your each variable
          data: [0,2,5,4,1,1,0],
          // Color of each bar
          backgroundColor: "rgba(0,0,0,0.8)",
          // Border color of each bar
          borderColor: "#fff",
          borderWidth: 0.5,
        },
      ],
    }

    const options={
      maintainAspectRatio: false,
      scales: {
        y: 
          {
            ticks: {
              precision: 0,
              beginAtZero: true,
              color: "#fff"
            },
            grid: { color: "#000", borderColor: "#000"}
          },
        x:
          {
            ticks: {
              color: "#fff"
            },
            grid: { color: "#000", borderColor: "#000"}
          },
      },
      plugins: {
        legend: {
            display: false,
          labels: {
            fontSize: 15,
          },
        },
      }
    }

    return(
        <div className="h-[90vh] overflow-y-auto overflow-visible p-5">
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
                    <Bar data={data} options={options} style={{color: "white", height: "100px"}}/>
                </CardTemplate>
            </div>

        </div>
    );
}