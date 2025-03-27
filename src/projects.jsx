import OneProject from "./oneproject.jsx";

import GearProject from "../public/gearproject.png"
import BMWProject from "../public/CloneBMWpage.png"
import ProjectsData from "./assets/ProjectsData.js";


export default function Projects(){
    const data3 = ProjectsData;

    function isEven(n) {
        n = Number(n);
        return n === 0 || !!(n && !(n%2));
    }

        // if even true row reverse
        // if even false row


        return (
            // projects wrapper
            <div className=" w-67.5 pb-5 ">
                <h2 className=" uppercase text-major-1 pb-2">Featured projects</h2>
                {/*projects component wrapper*/}
                <div className="flex flex-col-reverse gap-2 ">
                    {data3.map((item, index) => (
                        <OneProject key={index} data={item} len={data3.length}



                        />
                    ))}
                </div>
            </div>
    )
}