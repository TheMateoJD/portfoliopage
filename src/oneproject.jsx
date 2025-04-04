import GitHubIcon from "./assets/githubIcon.svg";
import LinkIcon from "./assets/linkIcon.svg";
import React from "../public/reacticon.svg"


export default function OneProject({data,len}) {

// 33
        let tabvalue2= 70-data.id*3
        let tabvalue3= tabvalue2-1
        let tabvalue4= tabvalue3-1


    console.log(tabvalue2,tabvalue3,tabvalue4)


    function isEven(n) {
        n = Number(n);
        return n === 0 || !!(n && !(n%2));
    }
    let idEven = isEven(data.id);
    let lenEven = isEven(len)

    return (
        <article tabIndex={tabvalue4} className={
            lenEven ?
                (idEven ?
                    "4k:w-100 1440p:w-80 xl:w-67.5 lg:w-60 md:w-45 sm:w-37 w-20 flex justify-between p-1 rounded-lg text-major-1  bg-dark-3 sm:flex-row flex-col transition duration-300 hover:scale-103 "
                    : "4k:w-100 1440p:w-80 xl:w-67.5 lg:w-60 md:w-45 sm:w-37 w-20 flex justify-between p-1 rounded-lg text-major-1 bg-dark-3 sm:flex-row-reverse flex-col transition duration-300 hover:scale-103")
            :
            (idEven ?
                    "4k:w-100 1440p:w-80 xl:w-67.5 lg:w-60 md:w-45 sm:w-37 w-20 flex justify-between p-1 rounded-lg text-major-1  bg-dark-3 sm:flex-row-reverse flex-col transition duration-300 hover:scale-103 "
                    : "4k:w-100 1440p:w-80 xl:w-67.5 lg:w-60 md:w-45 sm:w-37 w-20 flex justify-between p-1 rounded-lg text-major-1 bg-dark-3 sm:flex-row transition flex-col duration-300 hover:scale-103")

        }>
            {/*pic*/}
            <div className="4k:w-48 1440p:w-38 xl:w-32 lg:w-28 md:w-21 sm:w-17 4k:h-25 1440p:h-25 sm:h-18 ">
                <img src={data.imgsrc} alt={data.prname} className="4k:w-48 1440p:w-38 xl:w-32 lg:w-28 md:w-21 sm:w-17 4k:h-25 1440p:h-25 sm:h-18 rounded-lg object-cover sm:object-left object-center " />
            </div>


            {/*desc*/}
            <div className="4k:w-48 1440p:w-38 xl:w-32 lg:w-28 md:w-21 sm:w-17 4k:h-25 1440p:h-25 sm:h-18 flex flex-col justify-between ">
                {/*title and links container*/}
                <div>
                    <div className=" 4k:w-48 1440p:w-38 xl:w-32 lg:w-28 md:w-21 sm:w-17 flex flex-row justify-between items-center ">
                        <h1 className="4k:text-4xl 1440p:text-3xl sm:text-2xl ">{data.prname}</h1>
                        {/*links container*/}
                        <div className=" flex flex-row items-center justify-evenly w-6  h-3">
                            <a tabIndex={tabvalue3} href={data.gitlink} target="_blank" className=" p-0.5 border rounded-lg border-dark-3 hover:border-major-1" ><span><img src={GitHubIcon} alt="GitIcon" className="size-1.25"/></span></a>
                            <a tabIndex={tabvalue2} href={data.viewlink} target="_blank" className=" p-0.5 border rounded-lg border-dark-3 hover:border-major-1" ><span><img src={LinkIcon} alt="MailIcon" className="size-1.25"/></span></a>
                        </div>
                    </div>

                    {/*icons*/}


                    {/*desc*/}
                    <h2 className="text-minor-1 4k:text-2xl 1440p:text-xl xl:text-base lg:text-sm md:text-xs text-base"> {data.description}</h2>
                </div>
                {/*technologies wrapper*/}

                <div className="text-sm text-blue-1">
                    <span className="4k:text-2xl 1440p:text-xl xl:text-base lg:text-sm md:text-xs"> {data.technologies} </span>

                </div>
            </div>
        </article>
    )

}


// <div className="flex flex-row gap-0.5 pb-0.5">
//     <span><img src={React} alt="GitIcon" className="size-2.5"/></span>
//     <span><img src={TailwindIcon} alt="GitIcon" className="size-2.5"/></span>
//     <span><img src={FigmaIcon} alt="GitIcon" className="size-2.5"/></span>
// </div>