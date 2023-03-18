import CardTemplate from "@/components/card-template/card-template.component";
import ProgressBar from "@/components/progressbar/progressbar.component";
import Chart  from "chart.js/auto";
import { Line } from 'react-chartjs-2';
import { options, weekLabels, lineChartBackgroundColor } from "@/utils/chart-settings/chart.options";
import { AiOutlineArrowUp } from "react-icons/ai";
// To be removed
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import Button from "../buttons/button.component";

export default function AnalyticsCard() {
    // const cycleData = {
    //     labels: weekLabels,
    //     datasets: [
    //     {
    //         backgroundColor: lineChartBackgroundColor,
    //         label: "Cycle Time (Days)",
    //         data: [0, 3, 2, 6, 2, 2, 1],
    //         fill: true,
    //         borderColor: 'rgb(75, 192, 192)',
    //         pointHoverRadius: 5,
    //         pointRadius: 5,
    //     }],
    // }

    // const leadData = {
    //     labels: weekLabels,
    //     datasets: [
    //     {
    //         backgroundColor: lineChartBackgroundColor,
    //         label: "Lead Time (Days)",
    //         data: [3, 1, 1, 1, 2, 3, 4],
    //         fill: true,
    //         borderColor: 'rgb(75, 192, 192)',
    //         pointHoverRadius: 5,
    //         pointRadius: 5,
    //     }],
    // }

    return(
        <div className="flex flex-col gap-2 lg:flex-row lg:gap-10 w-full">
        {/* <div className=" flex flex-col lg:flex-col pt-3 pb-3 gap-5 w-full">
            <CardTemplate additionalClasses="text-2xl 2xl:text-lg" additionalContentClasses="flex flex-col" title="Board Activity">
                <div>
                    <span className="font-bold text-green-400">+4</span> New Activity
                </div>
                <div>
                    <span className="font-bold text-green-400">+1</span> Completed Card(s)
                </div>
                <div>
                    <span className="font-bold">-0</span> Card(s) Created
                </div>
            </CardTemplate>
            <CardTemplate title="Completion Status" additionalContentClasses="flex flex-col">
                <div className="text-green-400 font-medium"><AiOutlineArrowUp className="inline"/>+23%</div>
                <div>Card Completion progress has increased over the following week</div>
            </CardTemplate>
            <CardTemplate title="Cycle Time" additionalContentClasses="flex flex-col">
                <div className="absolute hidden top-5 right-5 lg:flex flex-row gap-4">
                    <Button current>This Week</Button>
                    <Button>This Month</Button>
                    <Button>This Year</Button>
                </div>
                <div>Displays how the time it takes for cards to be completed from start of creation date to finish</div>
                <div className="w-[99%] h-[100%]">
                    <Line id="line-cycle-time" data={cycleData} options={options}/>
                </div>
            </CardTemplate>
            <CardTemplate title="Lead Time" additionalClasses="flex flex-col h-full">
                <div className="absolute hidden top-5 right-5 lg:flex flex-row gap-4">
                    <Button current>This Week</Button>
                    <Button>This Month</Button>
                    <Button>This Year</Button>
                </div>
                <div>Displays the time it takes for cards to be completed when it is first worked on (first action) to finish</div>
                <div className="w-[99%] h-[100%]">
                    <Line id="line-lead-time" data={leadData} options={options}/>
                </div>
            </CardTemplate>
        </div> */}


        {/* <div className=" flex flex-col lg:flex-col pt-3 pb-5 gap-5 w-full">
            <CardTemplate title="Board Age" additionalContentClasses="flex flex-row justify-center gap-4">
                <div className="w-[30%]">
                <CircularProgressbar value={70} text={"33 days"}
                    strokeWidth={6}
                    styles={buildStyles({
                        textSize: "1rem",
                        textColor: "#fff",
                        pathColor: 70 < 20 ? "#FF5C5C" : 70 < 50 ? "#FFC05C" : "#71EB84",
                        trailColor: "#fff",
                    })}/>
                </div>
                <div className="flex flex-col text-3xl self-center gap-2">
                    <div>Fairly New</div>
                    <div>Status: <span className="text-green-400">Open</span></div>
                </div>
            </CardTemplate>
            <CardTemplate title="Members Utilization">
                <div className="flex flex-row gap-5">
                    <div className="text-green-400 font-medium"><AiOutlineArrowUp className="inline"/>+5%</div>
                    <div className="w-80">On average, performance has increased slightly compared to last week</div>
                </div>
            </CardTemplate>
                
            <div className="font-extrabold text-3xl text-center">Card Statistics</div>
            <div className="flex flex-row gap-5 h-full">
                <CardTemplate title="Milestones">
                    <div className="m-auto w-5/6 lg:w-4/6">
                            <CircularProgressbar value={10} text={"10%"}
                            strokeWidth={6}
                            styles={buildStyles({
                            textSize: "1rem",
                            textColor: "#fff",
                            pathColor: 70 < 20 ? "#FF5C5C" : 70 < 50 ? "#FFC05C" : "#71EB84",
                            trailColor: "#fff",
                        })}/>
                    </div>
                </CardTemplate>
                <CardTemplate>
                    <div className="pb-2">On Track <span className="float-right">15 <span className="opacity-80">{'(75%)'}</span></span></div>
                    <ProgressBar max={20} value={15} type="good"/>

                    <div className="pb-2">At Risk <span className="float-right">3 <span className="opacity-80">{'15%)'}</span></span></div>
                    <ProgressBar max={20} value={3} type="bad"/>

                    <div className="pb-2">Not Assigned <span className="float-right">10 <span className="opacity-80">{'(50%)'}</span></span></div>
                    <ProgressBar max={20} value={10}/>

                    <div>Done <span className="float-right">2 <span className="opacity-80">{'(10%)'}</span></span></div>
                    <ProgressBar max={20} value={2}/>
                </CardTemplate>
            </div>

            <div className="flex flex-row gap-5 h-full">
                <CardTemplate title="Total Cards">
                    <div className="font-extrabold text-8xl text-center ">20</div>
                </CardTemplate>
                <CardTemplate title="To Do Cards">
                    <div className="font-extrabold text-8xl text-center ">13</div>
                </CardTemplate>
            </div>

            <div className="flex flex-row gap-5 h-full">
                <CardTemplate title="Doing Cards">
                    <div className="font-extrabold text-8xl text-center ">5</div>
                </CardTemplate>
                <CardTemplate title="Done Cards">
                    <div className="font-extrabold text-8xl text-center ">2</div>
                </CardTemplate>
            </div>
        </div> */}
    </div>
    );
}