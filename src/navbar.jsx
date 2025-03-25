

export default function Navbar() {

  return (
      <div className="bg-dark-2 w-lvw h-8 flex justify-center text-lg  "  >
          <div className=" w-67.5 h-8 text-major-1 flex flex-row justify-between items-center">
          <span>Home</span>
          <div className="flex flex-row w-40 justify-between ">
              <span>Tech Stack</span>
              <span>Projects</span>
              <span>Work History & Education</span>
              <span>About</span>
              <span>Contact</span>
          </div>
              <span className="material-symbols-outlined">light_mode</span>
          </div>
      </div>
  )

}
