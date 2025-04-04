import TechBox from "./techbox.jsx";
import TechStackData from "./assets/TechStackData.js";
import {useState} from "react";

export default function TechStack() {

    const [cat, setCat] = useState("Frontend");
    const data = TechStackData;
    // filtering categories

    function categoryFilter(data){
        if (data.category == cat){
            return true;
        }
    }
    // sending filtered object to map generate
    const data2 = data.filter(categoryFilter);







    return (
        <section className="text-major-1  4k:w-100 1440p:w-80  xl:w-67.5 lg:w-60 md:w-45 sm:w-37 w-20  pb-3 ">
            <h1  className="4k:text-2xl 1440p:text-xl sm:text-lg uppercase pb-2 font-semibold" >tech stack</h1>
            {/*categories*/}
            <div className= "4k:w-100 1440p:w-80  xl:w-67.5 lg:w-60 md:w-45 sm:w-37 w-20 4k:text-2xl 1440p:text-xl  lg:text-lg md:text-sm text-base sm:gap-0 gap-0.5 pb-2 flex sm:flex-row flex-col justify-between ">
                <div tabIndex="11"
                    onClick={() => setCat("Frontend")}
                    className=
                        { cat === "Frontend" ?
                            "py-0.5 px-2 h-3 rounded-sm flex items-center bg-dark-3 text-minor-1 hover:cursor-pointer " :
                            "py-0.5 px-2 h-3 rounded-sm flex items-center bg-dark-1 transition duration-300  hover:bg-dark-2 hover:text-minor-1 hover:cursor-pointer " }>
                    Frontend Development
                </div>
                <div tabIndex="12"
                    onClick={() => setCat("Learning")}
                    className=
                        { cat === "Learning" ?
                            "py-0.5 px-2 h-3 rounded-sm flex items-center bg-dark-3 text-minor-1 hover:cursor-pointer " :
                            "py-0.5 px-2 h-3 rounded-sm flex items-center bg-dark-1 transition duration-300  hover:bg-dark-2 hover:text-minor-1 hover:cursor-pointer" }>
                    Currently Learning & Plans
                </div>
                <div tabIndex="13"
                    onClick={() => setCat("Unrelated")}
                    className=
                        { cat === "Unrelated" ?
                            "py-0.5 px-2 h-3 rounded-sm flex items-center bg-dark-3 text-minor-1 hover:cursor-pointer " :
                            "py-0.5 px-2 h-3 rounded-sm flex items-center bg-dark-1 transition duration-300  hover:bg-dark-2 hover:text-minor-1 hover:cursor-pointer" }>
                    Technical Stack & Tools
                </div>


            </div>



        {/*    displayed boxes*/}
           <div className="4k:w-100 1440p:w-80 xl:w-67.5 lg:w-60 md:w-45 sm:w-37 w-20 4k:gap-1 1440p:gap-2 sm:gap-1 gap-0.5 flex flex-row flex-wrap   ">
               {data2.map((item, id) => (

                   <TechBox key={id} data={item} />

               ))}
           </div>

        </section>

    )
}

