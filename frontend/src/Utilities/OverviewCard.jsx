import { ArrowUpRight, ChevronUp } from "lucide-react"

export default function OverviewCard({title, value, increaseValue, comment}) {
    return (
        <section className="flex flex-col p-8 m-auto md:p-3 md:m-2 border rounded-lg bg-[var(--primary)] text-white ">
        <div className="flex w-full justify-between items-center gap-2">
        <h1 className="font-medium text-xl">{title}</h1>
        <ArrowUpRight className="border rounded-full h-8 w-8 p-1 bg-[var(--background-light)] text-[var(--accent-light)] " />
        </div>
        <p className="text-4xl p-2 m-2 my-4 font-bold">{value}</p>
        <div className="flex gap-2 items-center ">
            <span className=" bg-[var(--accent-light)] flex border items-center p-1 rounded-lg">
                <small>{increaseValue}</small>
                <ChevronUp className="font-thin h-4 w-4" />
            </span>
            <p className="text-sm">{comment}</p>
        </div>
      </section>
    )
}

  