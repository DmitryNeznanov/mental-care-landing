import { Metadata } from "next"

export const metadata: Metadata = {
  title: "MENTALcare | Benefits",
  description: "MENTALcare Benefit page",
}
export default function Benefit() {
  return (
    <section>
      <div className="container">
        <article className="pt-[64px]">
          <h1 className="w-max mx-auto font-poppins text-[24px] md:text-[32px] xl:text-[64px] ">
            This is a <span className="text-rose-600">Benefits</span> page!
          </h1>
        </article>
      </div>
    </section>
  )
}
