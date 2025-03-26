import TechBox from "./techbox.jsx";

export default function TechStack() {

    return (
        <div className="text-major-1 w-67.5 h-20 ">
            <h1 className=" text-lg uppercase pb-2">tech stack</h1>
            {/*categories*/}
            <div className="w-67.5 pb-2 text-lg flex flex-row justify-between ">
                <div className="py-0.5 px-2 h-3 rounded-sm flex items-center bg-dark-2 text-minor-1">Frontend</div>
                <div className="py-0.5 px-2 h-3 rounded-sm flex items-center bg-dark-1">Styling</div>
                <div className="py-0.5 px-2 h-3 rounded-sm flex items-center bg-dark-1">Project Management</div>
                <div className="py-0.5 px-2 h-3 rounded-sm flex items-center bg-dark-1">Backend</div>
                <div className="py-0.5 px-2 h-3 rounded-sm flex items-center bg-dark-1">Unrelated Software</div>
            </div>

        {/*    displayed boxes*/}
           <div className="w-67.5 flex flex-row justify-between ">
               <TechBox  />
               <TechBox  />
               <TechBox  />
               <TechBox  />
           </div>

        </div>

    )
}