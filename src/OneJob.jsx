export default function OneJob({data}){

    const data2=data
    console.log(data2)
    return (
        <div className="flex flex-col pb-1 ">

            <h1 className="text-2xl py-0.5">{data2.company}</h1>
            <h3 className="text-blue-1 py-0.5 text-sm">{data2.years}</h3>
            <h2 className="text-minor-1 py-0.5">{data2.description}</h2>
        </div>
    )
}