import { Metadata } from "next"

export const metadata: Metadata = {
  title: "MENTALcare | Science",
  description: "MENTALcare Science page",
}
export default function Science() {
  return (
    <section>
      <div className="container">
        <article className="pt-[64px]">
          <h1 className="w-max mx-auto font-poppins md:text-[32px] xl:text-[64px] ">
            This is a <span className="text-rose-600">Science</span> page!
          </h1>
        </article>
      </div>
    </section>
  )
}
