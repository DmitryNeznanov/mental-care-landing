import { Metadata } from "next"

export const metadata: Metadata = {
  title: "MENTALcare | Signin",
  description: "MENTALcare Signin page",
}
export default function Signin() {
  return (
    <section>
      <div className="container">
        <article className="pt-[64px]">
          <h1 className="w-max mx-auto font-poppins text-[24px] md:text-[32px] xl:text-[64px] ">
            This is a <span className="text-rose-600">Signin</span> page!
          </h1>
        </article>
      </div>
    </section>
  )
}
