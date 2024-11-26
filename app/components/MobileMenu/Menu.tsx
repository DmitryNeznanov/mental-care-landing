import Image from "next/image"
import Nav from "../Nav"
import CloseMenu from "./CloseMenu"

export default function Menu() {
  return (
    <div
      className="w-[0%] h-screen overflow-hidden absolute right-0 top-0 z-[9999] width-transition"
      id="mobileMenu"
    >
      <div className="pl-[32px] pr-[28px] py-[23px] flex flex-col bg-slate-200">
        <CloseMenu />
        <div className="mt-[25px]">
          <Nav />
        </div>
      </div>
    </div>
  )
}
