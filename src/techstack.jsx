import TechBox from "./techbox.jsx";
import TechStackData from "./assets/TechStackData.js";

export default function TechStack() {

    const data = TechStackData;

    return (
        <div className="text-major-1 w-67.5 pb-3 ">
            <h1 className=" text-lg uppercase pb-2">tech stack</h1>
            {/*categories*/}
            <div className="w-67.5 pb-2 text-lg flex flex-row justify-between ">
                <div className="py-0.5 px-2 h-3 rounded-sm flex items-center bg-dark-2 text-minor-1">Frontend development</div>
                <div className="py-0.5 px-2 h-3 rounded-sm flex items-center bg-dark-1">Currently learning & plans </div>
                <div className="py-0.5 px-2 h-3 rounded-sm flex items-center bg-dark-1">Technical Stack & Tools</div>
            </div>



        {/*    displayed boxes*/}
           <div className="w-67.5 gap-1 flex flex-row  flex-wrap ">
               {data.map((item, index) => (
                   <TechBox key={index} data={item} />
               ))}
           </div>

        </div>

    )
}