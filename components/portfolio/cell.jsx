export default function Cell({ children, index }) {
    const condition = index === 0 || index === 6 || index === 8 || index === 9;
    return (
      <div className={`${condition ? "" : "hidden md:block"} md:first:w-60 w-24 md:w-28 whitespace-nowrap text-ellipsis overflow-hidden flex-none text-white text-opacity-80 text-sm text-right first:text-left`}>{children}</div>
    )
  }