import CardTemplate from "@/components/card-template/card-template.component";
import PageSubNavigation from "@/components/page-template/page-subnavigation.component";
import ChatroomInput from "@/components/inputs/chatroom-input.component";

export default function Collaboration() {
    return(
        <div className="lg:mt-0 mt-20 lg:p-0 p-5">
            <PageSubNavigation title="Collaboration"/>
            <div className="relative flex flex-col lg:flex-row pt-3 pb-3 gap-2">
                <CardTemplate title="Chatroom">
                    <div></div>
                    <ChatroomInput/>
                </CardTemplate>
            </div>
        </div>
    );
}