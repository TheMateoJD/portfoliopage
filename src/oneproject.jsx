
export default function OneProject({png}) {

    return (
        <div className="w-67.5 flex flex-row justify-between text-major-1 ">
            {/*pic*/}
            <div className="w-32 h-18 ">
                <img src={png} alt="Gear Project" className="rounded-lg"/>
            </div>


            {/*desc*/}
            <div className="w-32 h-18 flex flex-col justify-between py-1">
                {/*title and links container*/}
                <div>
                    <div className=" w-32 flex flex-row justify-between items-center ">
                        <h1 className="text-2xl "> Gear Ratio Calculator</h1>
                        {/*links container*/}
                        <div className=" flex flex-row items-center justify-evenly w-4 gap-1 h-3">
                            <span>G</span>
                            <span>P</span>
                        </div>
                    </div>
                    <h2 className="text-minor-1"> Web application that is related to my hobby.
                        After giving information of wheel size, transmision gear ratios,
                        and some additional info, the app gives u theoretical speeds on each gear.
                    Responsive design working on mobile aswell.// bmw clone page po polsku niestety</h2>
                </div>
                {/*technologies wrapper*/}
                <div className="text-sm text-blue-1">
                    <span>React </span>
                    <span>CSS3</span>
                </div>
            </div>
        </div>
    )

}