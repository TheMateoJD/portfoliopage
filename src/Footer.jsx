import MailIcon from "./assets/mailIcon.svg";
import LinkedinIcon from "./assets/linkedinicon.svg";
import GitHubIcon from "./assets/GitHubIcon.svg";
import CvIcon from "./assets/cvIcon.svg";


export default function Footer({modal,setModal}) {
    const toggleModal = () => {
        setModal(!modal);}

    return (

        <footer className=" sm:h-13 h-19 w-full bg-dark-2 text-major-1 flex flex-row  justify-center">
            {/*center container*/}
            <div className="4k:w-100 1440p:w-80 xl:w-67.5 lg:w-60 md:w-45 sm:w-37 w-20 sm:h-13 h-19 flex sm:flex-row flex-col-reverse justify-between pb-1">
            {/*    name and credits*/}
                <div className="flex flex-col justify-end ">
                    <div className=" py-1 flex flex-row gap-1 items-center">
                        <div onClick={toggleModal} className="p-0.25 w-2 h-2 flex items-center justify-center border rounded-sm transition duration-300 hover:scale-103"><img src={MailIcon} alt="MailIcon" className="size-1.25"/></div>
                        <a href="https://www.linkedin.com/in/mateusz-surma%C5%84ski-a9a64b34a/" className="p-0.25 w-2 h-2 flex items-center justify-center border rounded-sm transition duration-300 hover:scale-103"><img src={LinkedinIcon} alt="LinkedInIcon" className="size-1"/></a>
                        <a href="https://github.com/TheMateoJD" className="p-0.25 w-2 h-2 flex items-center justify-center border rounded-sm transition duration-300 hover:scale-103"><img src={GitHubIcon} alt="GitHubIcon" className="size-1.25"/></a>
                        <a href="#" className="p-0.25 w-2 h-2 flex items-center justify-center border rounded-sm transition duration-300 hover:scale-103"><img src={CvIcon} alt="CvIcon" className="size-1.25"/></a>
                    </div>
                    <h1 className="text-major-1 text-lg">Mateusz Surmański</h1>
                    <h2 className="text-minor-1">© 2025 | All rights reserved.</h2>
                </div>
            {/*    navbar*/}

                <div className="flex flex-col   text-minor-1 sm:items-end items-start sm:pb-0 py-1 justify-end  ">
                    <h1 className="text-major-1">Navigation</h1>
                    <a href="#home"><span className=" transition duration-300 hover:text-major-1" >Home</span></a>
                    <a href="#techStack"><span className="transition duration-300 hover:text-major-1" >Tech Stack</span></a>
                    <a href="#projects"><span className="transition duration-300 hover:text-major-1">Projects</span></a>
                    <a href="#work"><span className="transition duration-300 hover:text-major-1">Work History & Education</span></a>
                    <a href="#about"><span className="transition duration-300 hover:text-major-1">About</span></a>
                </div>


            </div>



        </footer>
    )
}