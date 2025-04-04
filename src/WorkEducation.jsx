
import OneJob from "./OneJob.jsx";
// import {useState} from "react";
import Education from "./Education.jsx";
import WorkHistory from "./assets/WorkHistory.js";




export default function WorkEducation() {

    // const [workEdu, setWorkEdu] = useState(1);
    const data2 = WorkHistory

    return (

        <section className="4k:w-100 1440p:w-80 xl:w-67.5 lg:w-60 md:w-45 sm:w-37 w-20 text-major-1">
        {/*    Category container*/}
            <h2 tabIndex="90" className="4k:text-2xl 1440p:text-xl sm:text-lg uppercase text-major-1 pb-2 font-semibold">Work History & Education</h2>
            <div className="flex lg:flex-row flex-col items-top justify-between 4k:w-100 1440p:w-80 xl:w-67.5 lg:w-60 md:w-45 sm:w-37 w-25 ">

                <div className="4k:w-48 1440p:w-38 lg:w-32 md:w-45 sm:w-37 w-20">
                    {data2.map((item, index) => (
                        <OneJob key={index} data={item} />
                    ))}
                </div>
                <div className=" lg:border-s-1 lg:border-breakline-1 h-auto lg:mx-1 mb-2"></div>
                <hr className="lg:hidden md:w-45 sm:w-37 w-20 border-breakline-1"/>
                <div className=" 4k:w-48 1440p:w-38 lg:w-32 md:w-45 sm:w-37 w-20">
                    <Education data={data2} />
                </div>

            </div>




            {/*/!*jobs container*!/*/}
            {/*{workEdu === 1 ?*/}
            {/*    // if true (Work history)*/}
            {/*    <div className="flex flex-col py-3 ">*/}
            {/*        {data2.map((item, index) => (*/}
            {/*            <OneJob key={index} data={item} />*/}
            {/*        ))}*/}
            {/*    </div>*/}

            {/*    // If false (education)*/}
            {/*    : <Education/>}*/}




        </section>
    )
}
//     const [workEdu, setWorkEdu] = useState(1);
//
// <div className="flex flex-row items-center justify-around  border border-dark-2 rounded-lg ">
//
//
//     <div
//         onClick={() => setWorkEdu(1)}
//         className={workEdu ?
//             "4k:w-50 1440p:w-40 xl:w-33.75 lg:w-30 md:w-22.5 sm:w-33.5 w-12.5 4k:h-4 1440p:h-3 h-2 flex justify-center items-center rounded-s-lg 4k:text-2xl 1440p:text-xl text-lg text-major-1 bg-dark-3 hover:cursor-pointer" :
//             "4k:w-50 1440p:w-40 xl:w-33.75 lg:w-30 md:w-22.5 sm:w-33.5 w-12.5 4k:h-4 1440p:h-3 h-2 flex justify-center items-center rounded-s-lg 4k:text-2xl 1440p:text-xl text-lg bg-dark-1 transition duration-300 hover:bg-dark-2 hover:text-minor-1 hover:cursor-pointer"
//         }>
//         Work History
//     </div>
//
//
//     <div
//         onClick={() => setWorkEdu(0)}
//         className={!workEdu ?
//             "4k:w-50 1440p:w-40 xl:w-33.75 lg:w-30 md:w-22.5 sm:w-33.5 w-12.5 4k:h-4 1440p:h-3 h-2 flex justify-center items-center rounded-e-lg 4k:text-2xl 1440p:text-xl text-lg text-major-1 bg-dark-3 hover:cursor-pointer" :
//             "4k:w-50 1440p:w-40 xl:w-33.75 lg:w-30 md:w-22.5 sm:w-33.5 w-12.5 4k:h-4 1440p:h-3 h-2 flex justify-center items-center rounded-e-lg 4k:text-2xl 1440p:text-xl text-lg bg-dark-1 transition duration-300 hover:bg-dark-2 hover:text-minor-1 hover:cursor-pointer" }>
//         Education
//     </div>
// </div>

// {workEdu === 1 ?
//     // if true (Work history)
//     <div className="flex flex-col py-3 ">
//         {data2.map((item, index) => (
//             <OneJob key={index} data={item} />
//         ))}
//     </div>
//
//     // If false (education)
//     : <Education/>}


