import OneProject from "./oneproject.jsx";

import GearProject from "../public/gearproject.png"
import BMWProject from "../public/CloneBMWpage.png"
import ProjectsData from "./assets/ProjectsData.js";


export default function Projects(){
    const data3 = ProjectsData;


        return (
            // projects wrapper
            <main className="4k:w-100 1440p:w-80 xl:w-67.5 lg:w-60 md:w-45 sm:w-37 w-20 pb-5 ">
                <h2 className="4k:text-2xl 1440p:text-xl sm:text-lg uppercase text-major-1 pb-2 font-semibold">Featured projects</h2>
                {/*projects component wrapper*/}
                <section className="flex flex-col-reverse gap-2 ">
                    {data3.map((item, index) => (
                        <OneProject key={index} data={item} len={data3.length}



                        />
                    ))}
                </section>
            </main>
    )
}