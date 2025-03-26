import OneProject from "./oneproject.jsx";

import GearProject from "../public/gearproject.png"
import BMWProject from "../public/CloneBMWpage.png"

export default function Projects(){

    return (
        // projects wrapper
        <div className=" w-67.5 pb-5 ">
            <h2 className=" uppercase text-major-1 pb-2">Featured projects</h2>
            {/*projects component wrapper*/}
            <div className="flex flex-col gap-2 ">
                <OneProject png={GearProject} />
                <OneProject png={BMWProject} />
            </div>

        </div>
    )
}