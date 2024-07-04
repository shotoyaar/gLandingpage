import Image from "next/image";
import Navbar from "@/components/navbar";
import { Outfit } from 'next/font/google';

const outfit = Outfit({
  subsets: ['latin'],
  display: 'auto'
})

export default function Home() {
  return (
    <main className="h-full max-w-full">
      <span className={outfit.className}>
        <Navbar />

        <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
          <h1 className="mb-4 mt-10 text-9xl font-semibold tracking-tight landing-none text-black lg:text-6xl md:text-5xl">We sell soap.</h1>
          <h2 className="mb-10 text-2xl text-[#A873E8] font-extrabold">A lot of it.</h2>
          <Image
            src="/Shot.png"
            alt="mockup1"
            height={1200}
            width={1200}
          />
        </div>

        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
          <h1 className="mb-4 mt-24 text-6xl font-semibold tracking-light landing-none text-black lg:font-4xl md:font-5xl">What kind of soap?</h1>
          <p className="mb-12 text-2xl font-medium tracking-light landing-none text-gray-700 lg:text-xl md:text-base">All kinds of soap! For example:</p>

          <div className="flex flex-row">
            <Image
              src="/soap1.jpg"
              alt="soap1"
              height={500}
              width={500}
            />
            <section className="flex flex-col">
              <p className="text-4xl text-black font-semibold text-center mt-auto ml-24">First soap.</p>
              <p className="text-2xl text-grey-800 font-medium mt-0 my-auto ml-24">First soap.</p>
            </section>
          </div>
          <div className="flex flex-row">
            <section className="flex flex-col">
              <p className="text-4xl text-black font-semibold text-center mt-auto ml-24">Second soap.</p>
              <p className="text-2xl text-grey-800 font-medium mt-0 my-auto ml-24">Second soap.</p>
            </section>
            <Image
              src="/soap2.jpg"
              alt="soap2"
              height={500}
              width={500}
              className="justify-center items-center mx-auto"
            />
          </div>
          <div className="flex flex-row">
            <Image
              src="/soap3.jpg"
              alt="soap3"
              height={500}
              width={500}
            />
            <section className="flex flex-col">
              <p className="text-4xl text-black font-semibold text-center mt-auto ml-24">Third soap.</p>
              <p className="text-2xl text-grey-800 font-medium mt-0 my-auto ml-24">Third soap.</p>
            </section>
          </div>
        </div>
      </span>
    </main>
  );
}
