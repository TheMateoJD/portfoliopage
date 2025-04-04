
export default function TechBox({data}) {

    let tabvalue= 13 +data.id

    // 14 - 32

    return (
        <div   className="4k:w-24 1440p:w-18.5 xl:w-16 lg:w-19 md:w-22 sm:w-18

         h-6 rounded-lg flex items-center justify-between text-major-1 bg-dark-2 transition duration-300 hover:scale-103 hover:cursor-pointer hover:bg-dark-3">
            {/*image container  put bg color as variable*/}
            <a tabIndex={tabvalue} href={data.techlink} target="_blank" className="flex items-center justify-between  ">
                <div className="md:size-3.5 sm:size-3.5 size-2.5 m-1 rounded-lg  bg-dark-3" >
                    <img src={data.icon} alt={data.name} className="rounded-lg"/>
                </div>
                {/*container*/}
                <div className=" hidden sm:flex flex-col w-9 h-6 justify-center gap-0.5 " >
                    {/*name */}
                    <h2 className="text-lg "> {data.name}</h2>
                    {/*desc*/}
                    <h3 className="text-sm text-minor-1 "> {data.description}</h3>
                </div>

            </a>
        </div>
    )

}

