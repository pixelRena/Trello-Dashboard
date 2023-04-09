import PrivacyPolicy from "@/components/modals/privacy-policy.component";

export default function SignIn() {

    return(
        <div className="flex flex-col justify-center items-center h-screen w-full">
            <div className="bg-white/[.70] p-5 flex justify-center items-center flex-col text-gray-800 gap-5 rounded-2xl lg:w-1/4">
                <img className="m-auto" src="/favicon.svg" alt="favicon"/>
                <div className="text-2xl font-light">Sign into Trellometrics</div>
                <div className="border-t border-zinc-400 w-3/6"/>
                <div className="w-full">
                    <button className="p-2 px-5 bg-white shadow-md rounded-full w-full enabled:hover:bg-white/[.70] disabled:opacity-50" title="Unavailable" disabled>
                    <img className="inline mr-1" src="/icons/icons8-trello.svg" width="30"/>Login with Trello</button>
                </div>
                <div className="font-light text-xs">
                    <PrivacyPolicy/>
                </div>
            </div>
        </div>
    );
};