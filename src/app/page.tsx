'use client';
import Image from "next/image";
import Navbar from "@/components/navbar";
import { Outfit } from 'next/font/google';
import { motion } from 'framer-motion';

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
          <motion.div initial={{ opacity: 0.5, y: 140 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}>
            <motion.h1 className="mb-4 mt-10 text-9xl font-semibold tracking-tight landing-none text-black lg:text-6xl md:text-5xl">We sell soap.</motion.h1>
            <motion.h2 className="mb-10 text-2xl text-[#A873E8] font-extrabold">A lot of it.</motion.h2>
            <div className="bg-[rgb(168,115,232)] bg-[radial-gradient(circle,_rgba(168,115,232,1)_0%,_rgba(255,255,255,1)_100%)] max-w-full">
              <div className="bg-white h-[500px] w-[250px] justify-center items-center mx-auto rounded-3xl border-8 border-solid border-black"></div>
            </div>
          </motion.div>
        </div>

        <motion.div initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8, ease: "easeIn" }} className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-12">
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

        </motion.div>

        <div className="bg-[rgb(0, 255, 183)] bg-[linear-gradient(90deg,_rgba(0,255,183,1)_0%,_rgba(0,203,197,1)_35%,_rgba(204,94,255,1)_57%,_rgba(121,203,197,1)_100%)] max-w-full h-48 my-10 flex flex-row" id="gay">
          <div className="flex flex-col flex-1 text-center my-auto">
            <p className="text-center ml-auto mr-8">3M</p>
            <p className="ml-auto">active users</p>
          </div>
          <div className="flex flex-col flex-1 text-center my-auto">
            <p className="mx-auto">1b+</p>
            <p className="mx-auto">encrypted messages</p>
          </div>
          <div className="flex flex-col flex-1 text-center my-auto">
            <p className="mr-auto ml-12">4.3x</p>
            <p className="mr-auto">faster than before</p>
          </div>
        </div>
      </span>
    </main >
  );
}




































































































































































































































































































