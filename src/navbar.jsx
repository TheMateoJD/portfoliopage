


export default function Navbar({navhome}) {



  return (
      <nav className="bg-dark-2 w-full sm:h-6 h-8 flex sm:justify-center items-start sm:p-0 pl-1 sticky top-0 z-5  "  >
          <div className="
          4k:w-100 1440p:w-80 xl:w-67.5 lg:w-60 md:w-45 sm:w-37
          sm:text-sm md:text-lg
          font-semibold
          sm:h-6 h-8
          flex sm:flex-row flex-col justify-between
          sm:items-center items-start
          sm:p-0 py-0.5">
                <a href="#home">
                    {navhome ? (
                        <span className="text-minor-1 transition duration-300 hover:text-major-1">Home</span>
                    ) : (
                        <span className="  xl:text-2xl lg:text-xl md:text-lg
                        bg-[linear-gradient(225deg,#00FF00,#590BF6)] text-transparent bg-clip-text transition duration-900">

                            Mateusz Surmański</span>
                    )}


                </a>

                <div className="
                4k:w-60 1440p:w-45 xl:w-35 lg:w-30 md:w-30 sm:w-25
                flex sm:flex-row flex-col  justify-between ">
                  <a href="#techStack" ><span className="text-minor-1 transition duration-300 hover:text-major-1">Tech Stack</span></a>
                  <a href="#projects" ><span className="text-minor-1 transition duration-300 hover:text-major-1">Projects</span></a>
                  <a href="#work" ><span className="text-minor-1 transition duration-300 hover:text-major-1">Work History & Education</span></a>
                  <a href="#about" ><span className="text-minor-1 transition duration-300 hover:text-major-1">About</span></a>
                  {/*<a href="#contact" ><span className="text-minor-1 transition duration-300 hover:text-major-1">Contact</span></a>*/}
                </div>
              {/*<span className="material-symbols-outlined text-major-1">light_mode</span>*/}
          </div>
      </nav>
  )
}
