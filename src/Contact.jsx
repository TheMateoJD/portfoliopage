import MailIcon from "./assets/mailIcon.svg";
import LinkedinIcon from "./assets/linkedinIcon.svg";
import PhoneIcon from "./assets/phoneIcon.svg";
import GitHubIcon from "./assets/githubIcon.svg";

export default function Contact() {

    return (

        <div className="w-67.5 h-5 flex flex-row justify-between pb-2 ">
            <h1 className="text-xl uppercase text-major-1">Contact</h1>
            {/*boxes container*/}
            <div className="flex flex-row text-minor-1 w-55 h-3 gap-1">
                <a href="#contact" target="_blank"><div className="w-13 h-3  border border-minor-1 rounded-lg flex items-center justify-center gap-0.5 transition duration-300 hover:scale-103 hover:bg-dark-3 hover:text-major-1 hover:cursor-pointer"> <img src={MailIcon} alt="MailIcon" className="size-1.25"/>Send an email</div></a>
                <a href="https://www.linkedin.com/in/mateusz-surma%C5%84ski-a9a64b34a/" target="_blank"><div className="w-13 h-3  border border-minor-1 rounded-lg flex items-center justify-center gap-0.5 transition duration-300 hover:scale-103 hover:bg-dark-3 hover:text-major-1 hover:cursor-pointer"> <img src={LinkedinIcon} alt="MailIcon" className="size-1.25"/>Linkedin</div></a>
                <a href="#contact" target="_blank" ><div className="w-13 h-3  border border-minor-1 rounded-lg flex items-center justify-center gap-0.5 transition duration-300 hover:scale-103 hover:bg-dark-3 hover:text-major-1 hover:cursor-pointer"> <img src={PhoneIcon} alt="MailIcon" className="size-1.25"/>Phone Number</div></a>
                <a href="https://github.com/TheMateoJD" target="_blank"><div className="w-13 h-3 border border-minor-1 rounded-lg flex items-center justify-center gap-0.5 transition duration-300 hover:scale-103 hover:bg-dark-3 hover:text-major-1 hover:cursor-pointer"> <img src={GitHubIcon} alt="MailIcon" className="size-1.25"/>GitHub</div></a>
            </div>


        </div>
    )
}

//

