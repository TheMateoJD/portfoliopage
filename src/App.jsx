
import "./styles.css"
import Navbar from "./navbar.jsx";
import Hero from "./hero.jsx";
import TechStack from "./techstack.jsx";
import Projects from "./projects.jsx";
import WorkEducation from "./WorkEducation.jsx";
import About from "./About.jsx";
import Contact from "./Contact.jsx";
import Footer from "./Footer.jsx";

function App() {


  return (

      <div   className="flex flex-col items-center justify-around font-Inter font-light  " id="home">

          <Navbar />
        <Hero />
            <hr className="pb-3  w-67.5 border-breakline-1" id="techStack"/>
        <TechStack />
            <hr className="pb-3  w-67.5 border-breakline-1" id="projects"/>
        <Projects />
            <hr className="pb-3  w-67.5 border-breakline-1" id="work"/>
        <WorkEducation/>
            <hr className="pb-3  w-67.5 border-breakline-1" id="about"/>
        <About/>
            <hr className="pb-3  w-67.5 border-breakline-1" id="contact"/>
        <Contact/>
        <Footer />


          <div className="w-67.5   text-major-1 bg-dark-3 flex flex-col items-start justify-around " >Test container to control spacing<br />

              <h3 className=" pt-2 font-bold">plan</h3>
              <h3 className=" line-through hover:no-underline hover:no-underline">make all components</h3>
              <h3 className=" line-through hover:no-underline">get properly working font</h3>
              <h3 className=" line-through hover:no-underline">get all icons, github chain in projects, contact information,  all tech stack icons </h3>
              <h3 className=" line-through hover:no-underline">give proper info to all components from data file objects</h3>
              <h3 className=" line-through hover:no-underline"> add microsoft office pack, sony vegas autodesk software to unrelated, add nextjs and firebase react native and typescript to currently learning and plans and clean up categories  </h3>
              <h3 className=" line-through hover:no-underline">add projects info w/o links</h3>
              <h3 className=" line-through hover:no-underline">repair svg files b4 next build</h3>
              <h3 className=" line-through hover:no-underline">make functionality of everything like navigation, switching tech stack categories, work
                  history/education</h3>
              <h3 className=" line-through hover:no-underline">add links to database for tech stack onclick </h3>
              <h3 className=" line-through hover:no-underline">hover and click w techstack</h3>
              <h3 className=" line-through hover:no-underline">add hover to nav "contact information" and bottom nav </h3>
              <h3 className=" line-through hover:no-underline">add todolist with memory to projects</h3>

              <h3 className=" line-through hover:no-underline">scroll behaviour  and transition-300 </h3>

              <h3 className="">get all projects on netlify and github </h3>
              <h3 className="">add all related links for projects and anchor tags</h3>
              <h3 className="">Expand and finish projects section</h3>
              <h3 className="">get contact section working, linkedin and github links, email component? and phone number with captcha? </h3>

              <h3 className="">make the design responsive</h3>
              <h3 className="">add light/dark mode switch</h3>
              <h3 className="">maybe change language btn later</h3>
          </div>

      </div>


  )
}

export default App
