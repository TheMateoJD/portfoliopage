

export default function Footer(){


    return (

        <div className="w-lvw h-13 bg-dark-2 text-major-1 flex flex-row justify-center">
            {/*center container*/}
            <div className="w-67.5 h-13 flex flex-row justify-between pb-1">
            {/*    name and credits*/}
                <div className="flex flex-col justify-end ">
                    <h1 className="text-major-1 text-lg">Mateusz Surmański</h1>
                    <h2 className="text-minor-1">© 2025 | All rights reserved.</h2>
                </div>
            {/*    navbar*/}

                <div className="flex flex-col   text-minor-1 items-end justify-end ">
                    <h1 className="text-major-1">Navigation</h1>
                    <span>Tech Stack</span>
                    <span>Projects</span>
                    <span>Work History & Education</span>
                    <span>About</span>
                    <span>Contact</span>
                </div>


            </div>



        </div>
    )
}