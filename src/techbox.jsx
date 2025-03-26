import ReactIcon from "../public/reacticon.svg";

export default function TechBox({data}) {
    return (
        <div className="w-16 h-6 rounded-lg flex items-center justify-between text-major-1 bg-dark-2">
            {/*image container  put bg color as variable*/}
            <div className="size-4.5 m-1 rounded-lg  bg-dark-3" >
                <img src={data.icon} alt="React Icon" />
            </div>
            {/*container*/}
            <div className=" flex flex-col w-9 h-6 justify-center gap-0.5" >
            {/*name */}
                <h2> {data.name}</h2>
            {/*desc*/}
                <h3 className="text-xs text-minor-1"> {data.description}</h3>
            </div>
        </div>
    )

}

