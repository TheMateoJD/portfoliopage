
import OneJob from "./OneJob.jsx";
import {useState} from "react";
import Education from "./Education.jsx";
import WorkHistory from "./assets/WorkHistory.js";




export default function WorkEducation() {

    const [workEdu, setWorkEdu] = useState(1);
    const data2 = WorkHistory
    return (

        <div className="w-67.5 text-major-1">
        {/*    Category container*/}
            <div className="flex flex-row items-center justify-around  border border-dark-2 rounded-lg ">
                <div className="w-33.75 h-2 flex justify-center items-center rounded-s-lg text-lg text-major-1 bg-dark-3 ">Work History</div>
                <div className="w-33.75 h-2 flex justify-center items-center rounded-e-lg text-lg text-minor-1 bg-dark-1 ">Education</div>
            </div>
            {/*jobs container*/}



            {workEdu === 1 ?
                // if true (Work history)
                <div className="flex flex-col py-3 ">
                    {data2.map((item, index) => (
                        <OneJob key={index} data={item} />
                    ))}
                </div>

                // If false (education)
                : <Education/>}

            <p>Education part later will be in different tab after i make functionality </p>
            <Education/>



        </div>
    )
}