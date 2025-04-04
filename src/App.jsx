
import "./styles.css"
import Navbar from "./navbar.jsx";
import Hero from "./hero.jsx";
import TechStack from "./techstack.jsx";
import Projects from "./projects.jsx";
import WorkEducation from "./WorkEducation.jsx";
import About from "./About.jsx";
import Footer from "./Footer.jsx";
import {useState} from "react";

function App() {
    const [modal, setModal] = useState(false)
    // switch home to my Name
    const [navhome,setNavhome]=useState()


  return (
      <div  className="flex flex-col items-center justify-around font-Inter font-light  " id="home">

          <Navbar navhome={navhome} />
        <Hero setNavhome={setNavhome} modal={modal} setModal={setModal} />
            <hr  className="4k:w-100 1440p:w-80 xl:w-67.5 lg:w-60 md:w-45 sm:w-37 w-20  pb-3 border-breakline-1" id="techStack"/>
        <TechStack />
            <hr className="4k:w-100 1440p:w-80 xl:w-67.5 lg:w-60 md:w-45 sm:w-37 w-20  pb-3 border-breakline-1" id="projects"/>
        <Projects />
            <hr className="4k:w-100 1440p:w-80 xl:w-67.5 lg:w-60 md:w-45 sm:w-37 w-20  pb-3 border-breakline-1" id="work"/>
        <WorkEducation/>
            <hr className="4k:w-100 1440p:w-80 xl:w-67.5 lg:w-60 md:w-45 sm:w-37 w-20  pb-3 border-breakline-1" id="about"/>
        <About/>

        <Footer modal={modal} setModal={setModal} />

      </div>


  )
}

export default App


// <h3 className=" pt-2 font-bold">plan główny</h3>
// <h3 className=" line-through hover:no-underline">get contact section working, linkedin and github links,</h3>
// <h3 className=" line-through hover:no-underline"> email component? download cv </h3>
// <h3 className=" line-through hover:no-underline"> Move contact to hero section, then delete contact from top navbar, footer one aswell, put small icons in div on top of my name   </h3>
// <h3 className=" line-through hover:no-underline"> delete phone numer (add Download CV instead?)</h3>
// <h3 className=" line-through hover:no-underline"> projekty tekst bez paddingu</h3>
// <h3 className=" line-through hover:no-underline"> display none w techstacku w mobile</h3>
// <h3 className=" line-through hover:no-underline"> ikonki mniejsze w tech stack  </h3>
// <h3 className=" line-through hover:no-underline"> not divs, header, nav main, section, article, footer </h3>
// <h3 className=" line-through hover:no-underline"> maybe imie i nazwisko zastępuje home</h3>
// <h3 className=" line-through hover:no-underline"> usunac darkmode, rozsunąc nav do prawej position sticky top0 zindex </h3>
// <h3 className=" line-through hover:no-underline"> add length "(69 years & 420 months)" in work section ~ Player </h3>
// <h3 className=" line-through hover:no-underline"> add download cv icon,,</h3>
// <h3 className=" line-through hover:no-underline"> resize linkedin icon</h3>
// <h3 className=" line-through hover:no-underline"> ikonki zamiast nazw w projektach -looks weird but i have comented part </h3>
// <h3 className=" line-through hover:no-underline"> change buttons in work history - switched entire thing to side by side</h3>
// <h3 className=" line-through hover:no-underline"> wagi a nie wielkosci czcionki </h3>
// <h3 className="line-through hover:no-underline"> email modal component opening functionality </h3>
// <h3 className="line-through hover:no-underline"> Email component styling and form functionality</h3>
// <h3 className="line-through hover:no-underline"> email modal sending functionality</h3>
// <h3 className="line-through hover:no-underline"> email modal responsiveness</h3>
// <h3> sending an email closes modal component</h3>
// <h3> make toast instead of alert on message sent</h3>
// <h3 className="">get all projects on netlify and github </h3>
// <h3 className="">add all related links for projects and anchor tags</h3>
// <h3> check accesability, then add missing parts, tabindex</h3>
//
//
// <h3> --------------------------------</h3>

// <h3> make icon for navbar on mobile</h3>
// <h3> change readme.md file</h3>