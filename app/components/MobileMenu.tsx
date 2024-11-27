import Nav from "./Nav"
import CloseMobileMenuButton from "./CloseMobileMenuButton"

export default function MobileMenu() {
  return (
    <div
      className="w-[0%] absolute right-0 top-0 z-[9999] transition-width overflow-hidden"
      id="mobileMenu"
    >
      <div className="h-screen py-[23px] pr-[28px] pl-[32px] flex flex-col bg-white">
        <CloseMobileMenuButton />
        <div className="mt-[25px]">
          <Nav />
        </div>
      </div>
    </div>
  )
}
