import {useState} from "react";
import emailjs from '@emailjs/browser'
import { Toaster, toast } from 'sonner'


export default function EmailModal({modal,setModal}) {
    // modal visibility switch
    const toggleModal = () => {
        setModal(!modal)
    }


    //usestate for sent message
    const [sent, setSent] = useState(false);
    const toggleSent = () => {
        setSent(!sent);}




        // usestate for changing content on screen
    const [message, setMessage] = useState(
        {
            userEmail: "",
            userName:"",
            userMessage: "",
        }
    );

    //data and handle change of inputs
    const {userEmail, userName, userMessage} = message;
    const handleChange = (e) => {
        setMessage({ ...message, [e.target.name]: e.target.value });
    }
    // handle submit to email
    const onSubmitHandler = e => {
        e.preventDefault();
        // console.log(e.target)
        emailjs.sendForm(import.meta.env.VITE_APP_SERVICE , import.meta.env.VITE_APP_TEMPLATE, e.target, import.meta.env.VITE_APP_KEY)
        toggleSent();
        toast.success('Your message has been sent!')
        setTimeout(toggleModal, 3000);

    }



    return (
        <div className={"fixed bottom-0 left-0 w-full h-full z-10 " + (modal?" visible ":"hidden")}>
            <div onClick={toggleModal} className={"w-full h-full bg-dark-3  opacity-50 z-10 "}> </div>

            <div className={"text-major-1 border-t border-minor-1 rounded-lg bg-dark-3 opacity-100 fixed bottom-0 w-full sm:h-25 h-30 z-10 flex justify-center animate-show "}>
                <div className="w-67.5 flex items-center justify-center ">
                    <form onSubmit={onSubmitHandler} className="flex flex-row gap-1 items-end">
                        <div className="flex flex-col gap-1">
                            <div className="flex sm:flex-row flex-col gap-1">
                                <input type="email" name="userEmail" value={userEmail} onChange={handleChange} className="lg:w-20 sm:w-14 h-3 p-0.5 border border-minor-1 rounded-lg active:border-major-1 " placeholder="Your email*" required/>
                                <input type="text" name="userName" value={userName} onChange={handleChange} className="lg:w-20 sm:w-14 h-3 p-0.5 border border-minor-1 rounded-lg active:border-major-1 " placeholder="Name*" required/>
                            </div>
                            <textarea name="userMessage" id="userMessage" value={userMessage} onChange={handleChange} cols="30" rows="10" placeholder="Message (20-300 characters)*" minLength="20" maxLength="300" className="lg:w-41 sm:w-29 sm:h-17 resize-none p-0.5 border border-minor-1 rounded-lg active:border-major-1 " required></textarea>
                        </div>
                        <button className={"w-6 h-3 p-0.5 border  rounded-lg  transition -translate-x-8 -translate-y-1 hover:cursor-pointer " + (sent? "border-green-400 text-green-400" : "border-minor-1"  ) }   > Send </button>
                    </form>

                </div>
            </div>
            <Toaster richColors position="bottom-center"/>

        </div>


    )

}