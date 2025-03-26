export default function Contact() {

    return (

        <div className="w-67.5 h-3 flex flex-row justify-between pb-5 ">
            <h1 className="text-xl uppercase text-major-1">Contact</h1>
            {/*boxes container*/}
            <div className="flex flex-row text-minor-1 w-55 h-3 gap-1">
                <div className="w-13  border border-minor-1 rounded-lg flex items-center justify-center">Send an email</div>
                <div className="w-13  border border-minor-1 rounded-lg flex items-center justify-center">Linkedln</div>
                <div className="w-13  border border-minor-1 rounded-lg flex items-center justify-center">Phone Number</div>
                <div className="w-13  border border-minor-1 rounded-lg flex items-center justify-center">GitHub</div>
            </div>

        </div>
    )
}

