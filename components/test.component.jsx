// import React from "react";

// export default function Test(props) {
//     return(
//         <div class="h-[40vh] overflow-y-auto">
//             <div class="grid gap-4 lg:ml-4">
//                 <div class="relative lg:pl-4">
//                     <div class=" relative px-4 sm:col-span-8 sm:space-y-8 sm:before:absolute sm:before:top-2 sm:before:bottom-0 sm:before:w-0.5 sm:before:-left-3 before:bg-white">  
//                         {React.Children.map(props.children, (child) => {
//                             if(child.props.className === "timeline-data") {
//                                 return( <div class="flex flex-col sm:relative sm:before:absolute sm:before:top-2 sm:before:w-4 sm:before:h-4 sm:before:rounded-full sm:before:left-[-35px] sm:before:z-[1] before:bg-green-300 lg:before:outline-2 before:outline-0 before:outline before:outline-white">
//                                 <h3 class="text-xl font-normal tracking-wide">{child.props.children[0]}</h3>
//                                 <time class="text-xs tracking-wide uppercase text-gray-300">{child.props.children[1]}</time>
//                                 <p class="mt-3">{child.props.children[2]}</p>
//                                 </div>
//                                 )
//                             }
//                         })}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     )
// }