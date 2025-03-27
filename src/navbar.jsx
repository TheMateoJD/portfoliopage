

export default function Navbar() {

  return (
      <div className="bg-dark-2 w-full h-8 flex justify-center text-lg  "  >
          <div className=" w-67.5 h-8 flex flex-row justify-between items-center">
              <a href="#home"><span className="text-minor-1 transition duration-300 hover:text-major-1">Home</span></a>
          <div className=" flex flex-row w-40 justify-between ">
              <a href="#techStack" ><span className="text-minor-1 transition duration-300 hover:text-major-1">Tech Stack</span></a>
              <a href="#projects" ><span className="text-minor-1 transition duration-300 hover:text-major-1">Projects</span></a>
              <a href="#work" ><span className="text-minor-1 transition duration-300 hover:text-major-1">Work History & Education</span></a>
              <a href="#about" ><span className="text-minor-1 transition duration-300 hover:text-major-1">About</span></a>
              <a href="#contact" ><span className="text-minor-1 transition duration-300 hover:text-major-1">Contact</span></a>
          </div>
              <span className="material-symbols-outlined text-major-1">light_mode</span>
          </div>
      </div>
  )

}
