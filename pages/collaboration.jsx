import { useState } from "react";
import CardTemplate from "@/components/card-template/card-template.component";
import PageSubNavigation from "@/components/page-template/page-subnavigation.component";
import ChatroomInput from "@/components/inputs/chatroom-input.component";
import Calendar from 'react-calendar';

export default function Collaboration() {
    const [value, onChange] = useState(new Date());
    return(
        <div className="lg:mt-0 mt-20 lg:p-0 p-5">
            <PageSubNavigation title="Collaboration"/>
            <div className="flex flex-col-reverse gap-2 lg:flex-row lg:gap-10">
                <div className="flex flex-col w-full lg:flex-col pt-3 pb-3 gap-2">
                    <div className="flex flex-col  lg:flex-col h-full gap-10">
                        <CardTemplate title="Chatroom" additionalClasses="h-full">
                            <ChatroomInput/>
                        </CardTemplate>
                        <CardTemplate title="Activity Feed"  additionalContentClasses="flex flex-col gap-5">
                            <div>
                                <span className="font-medium italic">Weds</span> Aya checked off Fix magnifying glass... in <span className="font-medium"><q>Fix UI Glitches</q></span>
                            </div>
                            <div>
                                <span className="font-medium italic">1/25</span> Aya moved <span className="font-medium"><q>Fix UI Glitches</q></span> card to <span className="font-medium">Doing</span>
                            </div>
                            <div>
                                <span className="font-medium italic">1/20</span> Serena created <span className="font-medium"><q>Checklist</q></span> for <span className="font-medium"><q>Fix UI Glitches</q></span>
                            </div>
                            <div>
                                <span className="font-medium italic">1/18</span> David moved <span className="font-medium"><q>Dark & Light Mode</q></span> card to <span className="font-medium">Completed</span>
                            </div>
                            <div>
                                <span className="font-medium italic">1/15</span> Sarah Brown joined the board
                            </div>
                        </CardTemplate>
                    </div>
                </div>

                <div className="flex flex-col pt-3 pb-3 gap-2 w-fit">
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

                <div className="flex w-full flex-col pt-3 pb-3 gap-2">
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
        </div>
    );
}