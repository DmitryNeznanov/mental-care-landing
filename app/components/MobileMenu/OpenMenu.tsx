"use client"
import Image from "next/image"

export default function OpenMenu() {
  function openMenu() {
    const menu = document.getElementById("mobileMenu")!
    menu.classList.toggle("w-[0%]")
    menu.classList.toggle("w-[100%]")
    document.body.classList.toggle("overflow-hidden")
  }
  return (
    <button
      className="md:hidden"
      type="button"
      onClick={openMenu}
    >
      <Image
        src="./svg/open-menu-button.svg"
        width={32}
        height={26}
        alt="menu-button"
      ></Image>
    </button>
  )
}
