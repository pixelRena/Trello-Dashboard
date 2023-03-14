import { useState } from "react";
import CardTemplate from "@/components/card-template/card-template.component";
import ChatroomInput from "@/components/inputs/chatroom-input.component";
import Calendar from 'react-calendar';
import Timeline from "../timeline-items/timeline.component";

export default function CollaborationCard() {
    const [value, onValueChange] = useState(new Date());
    return(
            <div className="flex flex-col-reverse gap-2 lg:flex-row lg:gap-10">
                <div className="flex flex-col lg:flex-col pt-3 pb-3 gap-2">
                    <div className="flex flex-col lg:flex-col h-full gap-5">
                        <CardTemplate title="Chatroom" additionalClasses="h-full">
                            <ChatroomInput/>
                        </CardTemplate>
                        <CardTemplate title="Activity Feed" additionalContentClasses="flex flex-col gap-5">
                            <Timeline>
                                <div className="timeline-data">
                                    <div>Checklist: Fix Magnifying Glass</div>
                                    <div>Thurs</div> 
                                    <div>Aya marked the checklist item <q>Updating the search bar UI</q> complete</div>
                                </div>
                                <div className="timeline-data">
                                    <div>Card: UI Glitches</div>
                                    <div>Wed 1/25 5:32pm</div> 
                                    <div>Aya moved this card to <q>Doing</q></div>
                                </div>
                                <div className="timeline-data">
                                    <div>Checklist: UI Glitches</div>
                                    <div>Fri 1/20 11:00am</div>
                                    <div>Serena created the Checklist <q>Images in Grid</q> </div>
                                </div>
                                <div className="timeline-data">
                                    <div>Card: Dark/Light Mode</div>
                                    <div>Weds 1/18 9:10am</div> 
                                    <div>David moved this card to Completed</div>
                                </div>
                                <div className="timeline-data">
                                    <div>Members Joined</div>
                                    <div>Sun 1/15 12:33pm</div>
                                    <div>Sarah Brown joined the board</div>
                                </div>  
                            </Timeline>
                        </CardTemplate>
                    </div>
                </div>

                <div className="flex flex-col pt-3 pb-3 gap-2 ">
                    <CardTemplate title="Calendar" additionalClasses="overflow-auto h-[300px] overflow-auto">
                        <Calendar
                            className="text-white rounded-lg"
                            value={value}
                            minDate={new Date(2023, 0, 1)}
                            maxDate={value}
                            minDetail="year"
                            maxDetail="month"
                            next2Label={null}
                            prev2Label={null}
                        />
                    </CardTemplate>
                    <CardTemplate title="URGENT" additionalClasses="h-fit">
                    <div className="bg-white/[.80] text-black p-3 m-1 rounded-xl backdrop-blur-3xl hover:bg-white">Remove serverless functionality card is 2 days past the deadline.</div>
                    <div className="bg-white/[.80] text-black p-3 m-1 rounded-xl backdrop-blur-3xl hover:bg-white">10 cards are not assigned to anyone.</div>
                    </CardTemplate>
                    <CardTemplate title="Card(s): Need Attention" additionalClasses="h-fit">
                        <div className="bg-white/[.80] text-black p-3 m-1 rounded-xl backdrop-blur-3xl hover:bg-white">Set Up Hosting & Domain</div>
                        <div className="bg-white/[.80] text-black p-3 m-1 rounded-xl backdrop-blur-3xl hover:bg-white">Update content outline</div>
                    </CardTemplate>
                </div>

                <div className="flex w-full flex-col pt-3 pb-3 gap-2 w-fit">
                    <CardTemplate title="Top Collaborator" additionalClasses="h-fit" additionalContentClasses="flex flex-col">
                        <div>
                            <img className="inline mr-2" src="/images/award.svg"/>
                            <span className="font-medium text-2xl">Aya Lewis</span>
                        </div>
                        <div>
                            <span className="font-normal text-lg">Completed 2 cards and turned in cards on time</span>
                        </div>
                    </CardTemplate>
                    <CardTemplate title="Active Members (4)" additionalClasses="h-[90%] overflow-auto">
                        <div className="flex flex-row w-full items-center gap-x-3 pb-2">
                            <div className="rounded-full w-[45px] h-[45px] bg-white"></div>
                            <div>Aya Lewis</div>
                        </div>
                        <div className="flex flex-row w-full items-center gap-x-3 pb-2">
                            <div className="rounded-full w-[45px] h-[45px] bg-white"></div>
                            <div>David Baker</div>
                        </div>
                        <div className="flex flex-row w-full items-center gap-x-3 pb-2">
                            <div className="rounded-full w-[45px] h-[45px] bg-white"></div>
                            <div>Michael Lewis</div>
                        </div>
                        <div className="flex flex-row w-full items-center gap-x-3">
                            <div className="rounded-full w-[45px] h-[45px] bg-white"></div>
                            <div>Serena D.</div>
                        </div>
                    </CardTemplate>
                    <CardTemplate title="Inactive Members (1)" additionalClasses="h-full">
                        <div className="flex flex-row w-full items-center gap-x-3">
                            <div className="rounded-full w-[45px] h-[45px] bg-white"></div>
                            <div>Sarah Brown</div>
                        </div>
                    </CardTemplate>
                </div>
            </div>
    );
}