import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="">
      <div className="container py-[30px] flex flex-row items-center justify-between ">
        <ul className="flex flex-row gap-x-[9.2px]">
          {[
            ["facebook.svg", "https://facebook.com"],
            ["instagram.svg", "https://instagram.com"],
            ["twitter.svg", "https://twitter.com"],
          ].map(([src, href], i) => {
            return (
              <li key={i}>
                <Link
                  href={`/${href}`}
                  target="_blank"
                >
                  <Image
                    src={`./icons/${src}`}
                    width={40}
                    height={40}
                    alt={href}
                  ></Image>
                </Link>
              </li>
            )
          })}
        </ul>
        <div>
          <p className="inter-regular-2xl text-[rgba(0,0,0,57%)]">
            Copyright 2023©
          </p>
        </div>
      </div>
    </footer>
  )
}
