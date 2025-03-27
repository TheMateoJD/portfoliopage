

export default function Footer(){


    return (

        <div className=" h-13 w-full bg-dark-2 text-major-1 flex flex-row justify-center">
            {/*center container*/}
            <div className="w-67.5 h-13 flex flex-row justify-between pb-1">
            {/*    name and credits*/}
                <div className="flex flex-col justify-end ">
                    <h1 className="text-major-1 text-lg">Mateusz Surmański</h1>
                    <h2 className="text-minor-1">© 2025 | All rights reserved.</h2>
                </div>
            {/*    navbar*/}

                <div className="flex flex-col   text-minor-1 items-end justify-end  ">
                    <h1 className="text-major-1">Navigation</h1>
                    <a href="#home"><span className=" transition duration-300 hover:text-major-1" >Home</span></a>
                    <a href="#techStack"><span className="transition duration-300 hover:text-major-1" >Tech Stack</span></a>
                    <a href="#projects"><span className="transition duration-300 hover:text-major-1">Projects</span></a>
                    <a href="#work"><span className="transition duration-300 hover:text-major-1">Work History & Education</span></a>
                    <a href="#about"><span className="transition duration-300 hover:text-major-1">About</span></a>
                    <a href="#contact"><span className="transition duration-300 hover:text-major-1">Contact</span></a>
                </div>


            </div>



        </div>
    )
}