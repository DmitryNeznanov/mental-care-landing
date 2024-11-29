import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
export const metadata: Metadata = {
  title: "MENTALcare | Home",
  description: "MENTALcare Home page",
}
export default function Home() {
  return (
    <>
      {/* Hero */}
      <section>
        <div className="container pt-[58px] pb-[100px] flex flex-row items-center justify-between">
          <article className="lg:max-w-[400px] xl:max-w-[600px]">
            <h1>Everyone Deserve to be Happy.</h1>
            <p className="mt-[15px] lg:mt-[21.8px] inter-light">
              Mental care is company oriented towards Mental Fitness , with the
              combined power of neuroscience, psychoacoustics CBT, and
              technology.
            </p>
            <div className="mt-[16px] lg:mt-[57px] flex flex-row gap-x-[40px]">
              <Link
                className="group button-gradient"
                href="/signin"
              >
                <span className="group-hover:[-webkit-background-clip:_text;] group-hover:[-webkit-text-fill-color:_transparent;] group-hover:gradient-xl">
                  Sign in
                </span>
              </Link>
              <div className="hidden xl:block gradient-xl p-[2px] rounded-[4px]">
                <Link
                  className="block button-transparent"
                  href="#"
                >
                  Contact Us
                </Link>
              </div>
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
      {/* Sponsors */}
      <section className="pt-[24px] pb-[124px] md:pt-[81px] md:pb-[185px] lg:pt-[30px] lg:pb-[206px] bg-black">
        <div className="container">
          <ul className="flex flex-col lg:flex-row items-center gap-y-[40px] justify-between">
            <li className="lg:order-2">
              <Link
                href="https://google.com"
                target="_blank"
              >
                <Image
                  className="w-[83px] h-[77px] md:w-auto md:h-auto"
                  src="svg/cigna.svg"
                  width={118}
                  height={110}
                  alt="cigna.svg"
                ></Image>
              </Link>
            </li>
            <li className="lg:order-2">
              <Link
                href="https://google.com"
                target="_blank"
              >
                <Image
                  className="w-[200px] h-[51px] md:w-auto md:h-auto "
                  src="svg/otsuka.svg"
                  width={274}
                  height={105}
                  alt="otsuka.svg"
                ></Image>
              </Link>
            </li>
            <li className="lg:order-4">
              <Link
                href="https://google.com"
                target="_blank"
              >
                <Image
                  className="w-[200px] h-[18px] lg:w-auto lg:h-auto"
                  src="svg/medical-news.svg"
                  width={286}
                  height={24}
                  alt="medical-news.svg"
                ></Image>
              </Link>
            </li>
            <li className="lg:order-1">
              <Link
                href="https://google.com"
                target="_blank"
              >
                <Image
                  className="w-[193px] h-[51px] lg:w-auto lg:h-auto"
                  src="svg/bausch.svg"
                  width={286}
                  height={26}
                  alt="bausch.svg"
                ></Image>
              </Link>
            </li>
          </ul>
        </div>
      </section>
      {/* Records  */}
      <section className="pb-[37px] md:pb-[73px] -mt-[100px] md:-mt-[120px] xl:-mt-[170px]">
        <div className="container ">
          <div className="flex flex-col md:flex-row items-center justify-between gap-[3.4px]">
            {[
              [
                "usman.png",
                3,
                "Dr. Usman Yousuf",
                true,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet pretium sit odio non. Aenean dolor, ullamcorper amet dolor donec. ",
              ],
              [
                "harry.png",
                4,
                "Dr.Harry",
                false,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet pretium sit odio non. Aenean dolor, ullamcorper amet dolor donec. ",
              ],
              [
                "jen.png",
                5,
                "Dr. Jen",
                true,
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquet pretium sit odio non. Aenean dolor, ullamcorper amet dolor donec. ",
              ],
            ].map(([src, rating, title, status, text], i) => {
              return (
                <article
                  className="max-w-[400px] px-[16.2px] py-[19.4px] md:px-[17.5px] md:py-[21px] lg:px-[30px] lg:py-[25px] flex flex-col rounded-[20px] lg:rounded-[30px] bg-white shadow-xl"
                  key={i}
                >
                  <Image
                    className="rounded-[7px] lg:rounded-[10px]"
                    src={`/png/${src}`}
                    width={350}
                    height={200}
                    //@ts-expect-error idk
                    alt={src}
                  ></Image>
                  <div className="mt-[9px] lg:mt-[13px]">
                    <p className="ml-[3px] roboto-regular before:w-[9.7px] h-[9.25px] before:mr-[8px] before:content-[url('/svg/star.svg')]">
                      {rating}
                    </p>
                  </div>
                  <div className="mt-[6.5px] lg:mt-[10px] flex flex-row justify-between items-center">
                    <h3 className=" capitalize">{title}</h3>
                    <p
                      className={`flex flex-row items-center inter-light capitalize before:w-[10.37px] before:h-[10.37px] before:mr-[8.4px] before:rounded-full ${
                        status === true
                          ? "before:bg-green"
                          : "before:bg-rose-500"
                      }`}
                    >
                      Available
                    </p>
                  </div>
                  <p className="mt-[3.5px] lg:mt-[6px] roboto-regular">
                    {text}
                  </p>
                  <div className="mt-[7px] lg:mt-[10px] flex flex-row items-center">
                    <div className="gradient-xl p-[2px] rounded-[4px]">
                      <Link
                        className="block button-transparent text-[15px] md:text-[10px] lg:text-[13px] xl:text-[15px] px-[6px] py-[6px] lg:px-[15px] lg:py-[15px]"
                        href="/pricing"
                      >
                        Book an appointment
                      </Link>
                    </div>
                    <Link
                      className="ml-[9px] button-black px-[6px] py-[6px] lg:px-[15px] lg:py-[15px]"
                      href="/pricing"
                    >
                      <Image
                        src="./icons/arrow-right.svg"
                        width={26}
                        height={26}
                        alt="arrow-right.svg"
                      ></Image>
                    </Link>
                  </div>
                </article>
              )
            })}
          </div>
          <div className="w-max mt-[29px] md:mt-[54px] lg:mt-[73px] ml-[25px]">
            <Link
              className="flex flex-row items-center inter-regular-xl capitalize before:content-[url('/icons/eye.svg')] before:w-[20px] before:h-[14px] md:before:w-[28px] md:before:h-[19px] before:mr-[16px] hover:underline"
              href="/pricing"
            >
              View all Psychiarists
            </Link>
          </div>
        </div>
      </section>
      {/* CTA  */}
      <section className="py-[25px] md:py-[45px] lg:py-[80px] gradient-xl relative before:content-[url('/shapes/shape.svg')] before:absolute before:z-10 before:top-0 before:right-0">
        <div className="container">
          <article className="flex flex-col items-center z-20 relative">
            <h2>Subscribe to Our Newsletter</h2>
            <div className="mt-[12px] flex flex-row">
              <input
                className="px-[30px] py-[12px] border border-gray rounded-[4px] text-gray font-poppins text-[12px] md:text-[12.75px] lg:text-[17.75px]"
                type="text"
                placeholder="Enter your Email here."
              />
              <button
                className="ml-[12px] button-black"
                type="submit"
              >
                submit
              </button>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
