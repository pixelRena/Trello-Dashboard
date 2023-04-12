import { Children } from "react";

export default function Timeline(props) {
    return(
        <div className="h-[40vh] overflow-y-auto">
            <div className="grid gap-4 lg:ml-4">
                <div className="relative lg:pl-4">
                    <div className=" relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-white">  
                        {Children.map(props.children, (child) => {
                            if(child.props.className === "timeline-data") {
                                return( <div className="flex pb-2 flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-green-300 lg:before:outline-2 before:outline-0 before:outline before:outline-white lg:pb-auto">
                                <h3 className="text-xl font-normal tracking-wide">{child.props.children[0]}</h3>
                                <time className="text-xs tracking-wide uppercase text-gray-300">{child.props.children[1]}</time>
                                <div className="mt-1">{child.props.children[2]}</div>
                                </div>
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};