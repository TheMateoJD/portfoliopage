export default function Education() {

    return (
        <section className="flex flex-col py-3 ">
            <article className="flex flex-col pb-1 ">
                <h1 className="4k:text-4xl 1440p:text-3xl md:text-2xl sm:text-xl py-0.5">AGH Univeristy of science and technology — Master degree </h1>
                <h3 className="text-blue-1 py-0.5 text-sm">2021-2022</h3>
                <h2 className="text-major-1 py-0.5 md:text-xl sm:text-lg"> Master of Science in Geodesy, Surveying and Cartography</h2>
                <h2 className="text-minor-1 "> Specialization: Geoinformation, Photogrammetry and Remote Sensing</h2>
                <p className="text-minor-1 "> Title of Master thesis: Development of a sand pit visualization based on data from different sensors.</p>
                <p className="text-minor-1 ">Assessment of the master's thesis: 5.0</p>
            </article>
            <article className="flex flex-col pb-1 ">
                <h1 className="4k:text-4xl 1440p:text-3xl md:text-2xl sm:text-xl py-0.5">AGH Univeristy of science and technology  — Engineer's degree</h1>
                <h3 className="text-blue-1 py-0.5 text-sm">2017-2021</h3>
                <h2 className="text-major-1 py-0.5 md:text-xl sm:text-lg"> Engeneer of Geodesy, Surveying and Cartography </h2>
                <p className="text-minor-1 "> Title of engeneer's thesis: Inventory of the elements of the interior of a historic building
                    registered with image methods.</p>
                <p className="text-minor-1 ">Assessment of the engeneer's thesis: 5.0</p>
            </article>
        </section>
    )

}