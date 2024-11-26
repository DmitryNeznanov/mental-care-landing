"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Nav() {
  const pathName = usePathname()
  return (
    <nav>
      <ul className="flex flex-col md:flex-row  gap-y-[60px] md:gap-x-[30px] lg:gap-x-[60px] inter-regular-xl capitalize">
        {[
          ["home", "/"],
          ["science", "science"],
          ["benefints", "benefint"],
          ["pricing", "pricing"],
        ].map(([text, link], i) => {
          return (
            <li key={i}>
              <Link
                className={`inter-regular-2xl flex flex-col relative ${
                  pathName === "/" && link === pathName
                    ? "after:absolute after:-bottom-[4px] after:w-[39px] after:h-[4px] after:rounded-full after:bg-black "
                    : pathName.includes(link) && link !== "/"
                    ? "after:absolute after:-bottom-[4px] after:w-[39px] after:h-[4px] after:rounded-full after:bg-black "
                    : ""
                }`}
                href={`/${link}`}
              >
                {text}
              </Link>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}
