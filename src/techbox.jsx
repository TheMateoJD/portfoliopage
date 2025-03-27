
export default function TechBox({data}) {
    return (
        <div className="w-16 h-6 rounded-lg flex items-center justify-between text-major-1 bg-dark-2 transition duration-300 hover:scale-103 hover:cursor-pointer hover:bg-dark-3">
            {/*image container  put bg color as variable*/}
            <a href={data.techlink} target="_blank" className="flex items-center justify-between">
                <div className="size-4.5 m-1 rounded-lg  bg-dark-3" >
                    <img src={data.icon} alt={data.name} className="rounded-lg"/>
                </div>
                {/*container*/}
                <div className=" flex flex-col w-9 h-6 justify-center gap-0.5" >
                    {/*name */}
                    <h2 className="text-lg"> {data.name}</h2>
                    {/*desc*/}
                    <h3 className="text-sm text-minor-1"> {data.description}</h3>
                </div>

            </a>
        </div>
    )

}

