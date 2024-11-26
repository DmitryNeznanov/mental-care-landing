import type { Metadata } from "next"
export const metadata: Metadata = {
  title: "MENTALcare | Home",
  description: "MENTALcare Home page",
}
export default function Home() {
  return (
    <div>
      <div className="bg-black shadow-xl h-[200px] w-[200px] text-[2rem] mx-auto text-white">
        test
      </div>
    </div>
  )
}
