import MailIcon from "./assets/mailIcon.svg";
import LinkedinIcon from "./assets/linkedinIcon.svg";
// import PhoneIcon from "./assets/phoneIcon.svg";
import GitHubIcon from "./assets/githubIcon.svg";
import CvIcon from "./assets/CvIcon.svg";

import EmailModal from "./EmailModal.jsx";

export default function Contact({modal,setModal}) {



    const toggleModal = () => {
        setModal(!modal);
    }

    return (

        <div className="xl:w-67.5 lg:w-60 md:w-45 sm:w-37 w-20 lg:h-5 sm:h-8 flex sm:flex-row flex-col justify-between items-center">
            <h1 className="4k:text-2xl 1440p:text-xl sm:text-lg uppercase font-semibold
             text-major-1 sm:p-0 pb-1">Contact</h1>

            <EmailModal modal={modal} setModal={setModal} />

            {/*boxes container*/}
            <div className="flex flex-row flex-wrap text-minor-1 xl:w-55 lg:w-47 sm:w-26.5 w-13 lg:h-3 sm:h-6.5 lg:gap-1 gap-0.5  ">

                <div onClick={()=> toggleModal()} className="xl:w-13 lg:w-11 sm:w-13 w-13   h-3  border border-minor-1 rounded-lg flex items-center justify-center gap-0.5 z-2 transition duration-300 hover:scale-103 hover:bg-dark-3 hover:text-major-1 hover:cursor-pointer "> <img src={MailIcon} alt="MailIcon" className="size-1.25"/>Send an email</div>
                <a href="https://www.linkedin.com/in/mateusz-surma%C5%84ski-a9a64b34a/" target="_blank" className="h-3"><div className="xl:w-13 lg:w-11 sm:w-13 w-13 h-3  border border-minor-1 rounded-lg flex items-center justify-center gap-0.5 transition duration-300 hover:scale-103 hover:bg-dark-3 hover:text-major-1 hover:cursor-pointer"> <img src={LinkedinIcon} alt="LinkedInIcon" className="size-1"/>Linkedin</div></a>
                <a href="https://github.com/TheMateoJD" target="_blank" className="h-3"><div className="xl:w-13 lg:w-11 sm:w-13 w-13 h-3 border border-minor-1 rounded-lg flex items-center justify-center gap-0.5 transition duration-300 hover:scale-103 hover:bg-dark-3 hover:text-major-1 hover:cursor-pointer"> <img src={GitHubIcon} alt="GitHubIcon" className="size-1.25"/>GitHub</div></a>
                <a href="#" className="h-3" ><div className="xl:w-13 lg:w-11 sm:w-13 w-13 h-3  border border-minor-1 rounded-lg flex items-center justify-center gap-0.5 transition duration-300 hover:scale-103 hover:bg-dark-3 hover:text-major-1 hover:cursor-pointer"> <img src={CvIcon} alt="CvIcon" className="size-1.25"/>Download CV</div></a>
            </div>


        </div>
    )
}

//



