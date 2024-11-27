"use client"
import Image from "next/image"

export default function CloseMobileMenuButton() {
  function closeMenu() {
    const menu = document.getElementById("mobileMenu")!
    menu.style.width = "0%"
  }
  return (
    <button
      className="w-max ml-auto block p-[8px] box-content"
      type="button"
      onClick={closeMenu}
    >
      <Image
        src="./svg/close-menu-button.svg"
        height={26}
        width={26}
        alt="close-menu"
      ></Image>
    </button>
  )
}
