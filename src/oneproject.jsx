import GitHubIcon from "./assets/githubIcon.svg";
import LinkIcon from "./assets/linkIcon.svg";


export default function OneProject({data,len}) {




    function isEven(n) {
        n = Number(n);
        return n === 0 || !!(n && !(n%2));
    }
    let idEven = isEven(data.id);
    let lenEven = isEven(len)


    // transition duration-300 hover:scale-103

    return (
        <div className={
            lenEven ?
                (idEven ?
                    "w-67.5 flex justify-between p-1 rounded-lg text-major-1  bg-dark-3 flex-row transition duration-300 hover:scale-103 "
                    : "w-67.5 flex justify-between p-1 rounded-lg text-major-1 bg-dark-3 flex-row-reverse transition duration-300 hover:scale-103")
                :
                (idEven ?
                    "w-67.5 flex justify-between p-1 rounded-lg text-major-1  bg-dark-3 flex-row-reverse transition duration-300 hover:scale-103 "
                    : "w-67.5 flex justify-between p-1 rounded-lg text-major-1 bg-dark-3 flex-row transition duration-300 hover:scale-103")

        }>
            {/*pic*/}
            <div className="w-32 h-18 ">
                <img src={data.imgsrc} alt={data.prname} className=" w-32 h-18 rounded-lg object-cover object-center "/>
            </div>


            {/*desc*/}
            <div className="w-32 h-18 flex flex-col justify-between py-1">
                {/*title and links container*/}
                <div>
                    <div className=" w-32 flex flex-row justify-between items-center ">
                        <h1 className="text-2xl ">{data.prname}</h1>
                        {/*links container*/}
                        <div className=" flex flex-row items-center justify-evenly w-4 gap-1 h-3">
                            <span><img src={GitHubIcon} alt="GitIcon" className="size-1.25"/></span>
                            <span><img src={LinkIcon} alt="MailIcon" className="size-1.25"/></span>
                        </div>
                    </div>
                    <h2 className="text-minor-1"> {data.description}</h2>
                </div>
                {/*technologies wrapper*/}
                <div className="text-sm text-blue-1">
                    <span> {data.technologies} </span>

                </div>
            </div>
        </div>
    )

}