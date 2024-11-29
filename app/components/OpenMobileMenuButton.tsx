"use client"
import Image from "next/image"

export default function OpenMobileMenuButton() {
  function openMenu() {
    const menu = document.getElementById("mobileMenu")!
    menu.style.width = "100%"
  }
  return (
    <button
      className="md:hidden"
      type="button"
      onClick={openMenu}
      id="mobileMenuButton"
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
