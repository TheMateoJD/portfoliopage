export default function OneJob({data}){

    const data2=data

    return (
        <article className="flex flex-col pb-1 ">

            <h1 className="md:text-2xl sm:text-xl text-lg font-bold py-0.5">{data2.company}</h1>
            <h3 className="text-blue-1 py-0.5 sm:text-sm text-base">{data2.years}</h3>
            <h2 className="text-minor-1 text-base  py-0.5">{data2.description}</h2>
        </article>
    )
}