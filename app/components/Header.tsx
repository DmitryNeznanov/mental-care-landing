import Image from "next/image"
import Nav from "./Nav"
import Link from "next/link"
import Menu from "./MobileMenu/Menu"
import OpenMenu from "./MobileMenu/openMenu"
export default function Header() {
  return (
    <header className="container pt-[26px] md:pt-[38px] xl:pt-[27px] flex flex-row items-center justify-between">
      <div>
        <Link href="/">
          <Image
            src="./svg/logo.svg"
            width={147}
            height={44}
            alt="logo"
          ></Image>
        </Link>
      </div>
      <div className="hidden md:block">
        <Nav />
      </div>
      <div className="hidden md:block">
        <Link
          className="group button-gradient"
          href="/signin"
        >
          <span className="group-hover:[-webkit-background-clip:_text;] group-hover:[-webkit-text-fill-color:_transparent;] group-hover:gradient-xl">
            Sign in
          </span>
        </Link>
      </div>
      <OpenMenu />
      <Menu />
    </header>
  )
}
