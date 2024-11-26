"use client"
import Image from "next/image"

export default function CloseMenu() {
  function closeMenu() {
    const menu = document.getElementById("mobileMenu")!
    menu.classList.toggle("w-[0%]")
    menu.classList.toggle("w-[100%]")
    document.body.classList.toggle("overflow-hidden")
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
