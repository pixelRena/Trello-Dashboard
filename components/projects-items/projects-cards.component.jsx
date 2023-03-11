import CardTemplate from "@/components/card-template/card-template.component";
import ProjectsInfoCardTemplate from "@/components/card-template/projects-info-card-template.component";
import { AiOutlineArrowDown } from "react-icons/ai";
// To be removed
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';

export default function ProjectsCards() {
    return(
        <div className="lg:m-auto mt-24 flex flex-col-reverse lg:flex-row gap-x-7 h-full w-full justify-around">
                <div className="flex flex-col py-3 gap-6 w-full">
                    <CardTemplate title="Checklist" additionalClasses="h-full">
                        <form className="h-full flex flex-col justify-between">
                            <div>
                                <input className="form-checkbox bg-transparent rounded-none border-2 border-white outline-none checked:border-white checked:bg-transparent h-5 w-5  focus:ring-transparent focus:border-none focus:outline-none focus:text-transparent hover:text-white/[.4]" type="checkbox"/>
                                <label className="font-normal pl-2">Fix magnifying glass on search input is floating</label>
                            </div>
                            <div>
                                <input className="form-checkbox bg-transparent rounded-none border-2 border-white outline-none checked:border-white checked:bg-transparent h-5 w-5  focus:ring-transparent focus:border-none focus:outline-none focus:text-transparent hover:text-white/[.4]" type="checkbox"/>
                                <label className="font-normal pl-2">Modal not popping up on notification bell click</label>
                            </div>
                            <div>
                                <input className="form-checkbox bg-transparent rounded-none border-2 border-white outline-none checked:border-white checked:bg-transparent h-5 w-5  focus:ring-transparent focus:border-none focus:outline-none focus:text-transparent hover:text-white/[.4]" type="checkbox"/>
                                <label className="font-normal pl-2">Dashboard "Avg Task Completion" statistics are not appearing</label>
                            </div>
                        </form>
                    </CardTemplate>
                    <CardTemplate title="Activity Report">
                        <div className="font-extralight">How much activity has taken place in this card.</div>
                        <div className="w-[300px] h-[250px] bg-contain bg-center bg-no-repeat" style={{backgroundImage:`url(images/NBcharts-lineChats.png)`}}></div>
                    </CardTemplate>
                </div>

                
                <div className="flex flex-col py-3 gap-4 w-full lg:w-[70%] justify-between">
                    <CardTemplate title="Activity Feed" additionalClasses="h-full" additionalContentClasses="flex flex-col justify-between"> 
                        <div><span className="italic font-medium">Feb 1</span> Aya checked off 'Fix magnifying glass...'</div>
                        <div><span className="italic font-medium">Jan 25</span> Aya moved this card to Doing</div>
                        <div><span className="italic font-medium">Jan 20</span> Serena created ‘Checklist’</div>
                    </CardTemplate>
                    <div className="flex flex-col gap-4">
                        <CardTemplate title="Card Completion">
                            <div className="m-auto w-[130px]">
                                <CircularProgressbar value={33} text={"33%"}
                                    strokeWidth={6}
                                    styles={buildStyles({
                                        textSize: "1rem",
                                        textColor: "#fff",
                                        pathColor: 70 < 20 ? "#FF5C5C" : 70 < 50 ? "#FFC05C" : "#71EB84",
                                        trailColor: "#fff",
                                    })}/>
                            </div>
                        </CardTemplate>
                        <CardTemplate title="Activity Statistics" additionalContentClasses="-pt-5">
                                <span className="text-red-800 font-medium"><AiOutlineArrowDown className="inline"/>-33%</span>
                                <div>Task completion progress has decreased over the following week</div>
                        </CardTemplate>
                    </div>
                </div>


                <div className="flex flex-col py-3 gap-5 w-full lg:w-[90%] justify-around">
                    <div className="flex flex-col justify-start gap-3 h-full">
                        <ProjectsInfoCardTemplate title="Due Date">
                            February 5, 2023
                        </ProjectsInfoCardTemplate>
                        <ProjectsInfoCardTemplate title="Label(s)">
                            Frontend, Bug
                        </ProjectsInfoCardTemplate>
                        <ProjectsInfoCardTemplate title="Created">
                            January 20, 2023
                        </ProjectsInfoCardTemplate>
                        <ProjectsInfoCardTemplate title="Status">
                            <span className="text-green-400 not-italic">On-track</span>
                        </ProjectsInfoCardTemplate>
                    </div>
                    <CardTemplate title="Description">
                        There are a couple of bug fixes that  have been causing instability when trying to check statistics. Bug fixes are listed in the checklist.
                    </CardTemplate>
                    <CardTemplate title="Members Assigned (2)">
                        <div className="flex flex-row w-full items-center gap-x-3 pb-2">
                            <div className="rounded-full w-[45px] h-[45px] bg-white"></div>
                            <div>Aya Lewis</div>
                        </div>
                        <div className="flex flex-row w-full items-center gap-x-3">
                            <div className="rounded-full w-[45px] h-[45px] bg-white"></div>
                            <div>David Baker</div>
                        </div>
                    </CardTemplate>
                </div>
                
        </div>
    )
}