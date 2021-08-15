import Link from "next/link"
import Arrow from "../public/arrow.svg"

export default function Button({ href, children }) {
  return (
    <Link href={href} passHref>
      <button className="
        bg-indigo-500 py-3 px-5 my-2 rounded tracking-wider text-lg my-8 font-normal
        transition hover:bg-indigo-700 focus:ring group text-center
      "> 
        <span className="flex items-center">
          {children}
          <Arrow className="transition transform group-hover:translate-x-1"/>
        </span>
      </button>
    </Link>
  )
}