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
        <div className="text-major-1 w-67.5 pb-3 ">
            <h1 className=" text-lg uppercase pb-2">tech stack</h1>
            {/*categories*/}
            <div className="w-67.5 pb-2 text-lg flex flex-row justify-between ">
                <div
                    onClick={() => setCat("Frontend")}
                    className=
                        { cat === "Frontend" ?
                            "py-0.5 px-2 h-3 rounded-sm flex items-center bg-dark-3 text-minor-1 hover:cursor-pointer " :
                            "py-0.5 px-2 h-3 rounded-sm flex items-center bg-dark-1 transition duration-300  hover:bg-dark-2 hover:text-minor-1 hover:cursor-pointer " }>
                    Frontend Development
                </div>
                <div
                    onClick={() => setCat("Learning")}
                    className=
                        { cat === "Learning" ?
                            "py-0.5 px-2 h-3 rounded-sm flex items-center bg-dark-3 text-minor-1 hover:cursor-pointer " :
                            "py-0.5 px-2 h-3 rounded-sm flex items-center bg-dark-1 transition duration-300  hover:bg-dark-2 hover:text-minor-1 hover:cursor-pointer" }>
                    Currently Learning & Plans
                </div>
                <div
                    onClick={() => setCat("Unrelated")}
                    className=
                        { cat === "Unrelated" ?
                            "py-0.5 px-2 h-3 rounded-sm flex items-center bg-dark-3 text-minor-1 hover:cursor-pointer " :
                            "py-0.5 px-2 h-3 rounded-sm flex items-center bg-dark-1 transition duration-300  hover:bg-dark-2 hover:text-minor-1 hover:cursor-pointer" }>
                    Technical Stack & Tools
                </div>


            </div>



        {/*    displayed boxes*/}
           <div className="w-67.5 gap-1 flex flex-row  flex-wrap ">
               {data2.map((item, index) => (
                   <TechBox key={index} data={item} />
               ))}
           </div>

        </div>

    )
}

