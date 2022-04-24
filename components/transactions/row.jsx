export default function Row({ data }) {
    return (
      <div className="p-1 flex odd:bg-neutral-800">
        {data.map((item, index) => <div key={index} className={`whitespace-nowrap first:text-left w-28 ${index === 1 ? "text-left w-40" : "text-right"} ${index < 3 ? "" : "hidden md:block"}`}>{item}</div>)}
      </div>
    )
  }