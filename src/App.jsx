
import "./styles.css"
import Navbar from "./navbar.jsx";
import Hero from "./hero.jsx";

function App() {


  return (

      <div   className="flex flex-col items-center justify-around font-Inter font-light">
        <Navbar />
        <Hero />
          <hr className="pb-2 pt-2 w-67.5 border-minor-1"/>
          <div className="w-67.5 h-5  text-major-1 bg-dark-3 flex flex-row items-center justify-around">Test container to show spacing</div>
      </div>


  )
}

export default App
