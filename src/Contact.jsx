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
                <div className="w-13  border border-minor-1 rounded-lg flex items-center justify-center gap-0.5"> <img src={MailIcon} alt="MailIcon" className="size-1.25"/>Send an email</div>
                <div className="w-13  border border-minor-1 rounded-lg flex items-center justify-center gap-0.5"> <img src={LinkedinIcon} alt="MailIcon" className="size-1.25"/>Linkedin</div>
                <div className="w-13  border border-minor-1 rounded-lg flex items-center justify-center gap-0.5"> <img src={PhoneIcon} alt="MailIcon" className="size-1.25"/>Phone Number</div>
                <div className="w-13  border border-minor-1 rounded-lg flex items-center justify-center gap-0.5"> <img src={GitHubIcon} alt="MailIcon" className="size-1.25"/>GitHub</div>
            </div>


        </div>
    )
}

