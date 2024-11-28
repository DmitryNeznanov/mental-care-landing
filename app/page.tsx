import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
export const metadata: Metadata = {
  title: "MENTALcare | Home",
  description: "MENTALcare Home page",
}
export default function Home() {
  return (
    <section>
      <div className="container pt-[58px] pb-[100px] flex flex-row items-center justify-between">
        <article className="lg:max-w-[400px] xl:max-w-[600px]">
          <h1>Everyone Deserve to be Happy.</h1>
          <p className="mt-[15px] lg:mt-[21.8px] inter-light">
            Mental care is company oriented towards Mental Fitness , with the
            combined power of neuroscience, psychoacoustics CBT, and technology.
          </p>
          <div className="mt-[16px] lg:mt-[57px] flex flex-row gap-x-[40px]">
            <Link
              className="group  button-gradient"
              href="/signin"
            >
              <span className="group-hover:[-webkit-background-clip:_text;] group-hover:[-webkit-text-fill-color:_transparent;] group-hover:gradient-xl">
                Sign in
              </span>
            </Link>
            <Link
              className="hidden xl:block button-transparent"
              href="#"
            >
              Contact Us
            </Link>
          </div>
        </article>
        <div className="hidden lg:block">
          <Image
            src="/png/hero.png"
            width={528}
            height={523}
            alt="hero.png"
            priority={true}
          ></Image>
        </div>
      </div>
    </section>
  )
}
