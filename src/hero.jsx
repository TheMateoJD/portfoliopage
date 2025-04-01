import Contact from './Contact'
import {useEffect, useRef} from "react";

export default function Hero({setNavhome}) {

    // test of scroll
    const myRef = useRef();
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const entry = entries[0]
            setNavhome(entry.isIntersecting)
        })
        observer.observe(myRef.current)
    }, [])
    // end of test



    return (
        <header className="
         4k:w-100 1440p:w-80 xl:w-67.5 lg:w-60 md:w-45 sm:w-37 w-20
          pt-3 pb-3">
            <p className="text-base text-minor-1 pb-1.25 font-semibold">Hey, I'm</p>
            <span ref={myRef} className=" 4k:text-big-2 1440p:text-big-1  lg:text-8xl md:text-7xl sm:text-5xl text-5xl font-normal bg-[linear-gradient(225deg,#00FF00,#590BF6)] text-transparent bg-clip-text">Mateusz Surmański</span>
            <p className="4k:text-2xl 1440p:text-xl  lg:text-lg md:text-sm sm:text-xs text-base
            pt-1.25 pb-1.25 text-minor-1">
                I am self-taught aspiring frontend developer, I have been learning and refining my skills for the past three months.
                I quickly grasp new concepts and am highly motivated to continue expanding my knowledge every day. Under the guidance of experienced industry professionals, including a senior developer who regularly reviews my code, I receive valuable feedback on areas for improvement and best practices. This mentorship ensures that I am consistently improving and paying attention to the critical aspects of clean, efficient code. My curiosity and drive to find effective solutions to challenges push me to continuously expand my tech stack and grow in the field of frontend development.</p>

                <Contact />


        </header>

    )
}


//<a href="#contact" className=" flex flex-row items-center gap-1 4k:w-30 sm:w-20">
//                     <p className="4k:text-4xl 1440p:text-3xl sm:text-2xl  ">Contact information</p>
//                     <span className="material-symbols-outlined text-major-1 ">
//                     arrow_right_alt
//                     </span>
//                 </a>