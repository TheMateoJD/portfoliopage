

export default function EmailModal({modal,setModal}) {

    const toggleModal = () => {
        setModal(!modal);
    }


    return (
        <div className={"fixed bottom-0 left-0 w-full h-full z-10 " + (modal?"visible":"hidden")}>
            <div onClick={toggleModal} className={"w-full h-full bg-dark-3  opacity-50 z-10"}> </div>

            <div className={"text-major-1 border border-major-1 bg-dark-3 opacity-100 fixed bottom-0 w-full h-25 z-10 flex justify-center "}>
                <div className="w-67.5 flex items-center justify-between">
                        <div>Name</div>
                        <div>your email</div>
                        <div>message</div>

                </div>
            </div>


        </div>


    )

}