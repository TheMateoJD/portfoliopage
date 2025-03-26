export default function Hero(){
    return (
        <div className=" w-67.5 pt-8 pb-3">
            <p className="text-base text-minor-1 pb-1.25">Hey, I'm</p>
            <span className="text-8xl font-normal bg-[linear-gradient(225deg,#9845E8,#33D2FF_55%,#DD5789)] text-transparent bg-clip-text">Mateusz Surmański</span>
            <p className="text-lg pt-1.25 pb-1.25 text-minor-1">I am self-taught aspiring frontend developer, I have been learning and refining my skills for the past three months.
                I quickly grasp new concepts and am highly motivated to continue expanding my knowledge every day. Under the guidance of experienced industry professionals, including a senior developer who regularly reviews my code, I receive valuable feedback on areas for improvement and best practices. This mentorship ensures that I am consistently improving and paying attention to the critical aspects of clean, efficient code. My curiosity and drive to find effective solutions to challenges push me to continuously expand my tech stack and grow in the field of frontend development.</p>
            <div className=" flex flex-row items-center gap-1 w-20">
                <p className="text-2xl text-major-1">Contact information</p>
                <span className="material-symbols-outlined text-major-1">
                arrow_right_alt
                </span>
            </div>

        </div>

    )
}