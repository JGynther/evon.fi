import Cell from "./cell"

export default function Row({ data }) {
    return (
      <div className="flex py-1 odd:bg-neutral-800 px-1">
        {data.map((item, index) => (
          index !== 1 && <Cell key={index} index={index}>{item}</Cell>
        ))}
      </div>
    )
  }