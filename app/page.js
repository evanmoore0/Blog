'use client'
import React, { useRef } from "react";
import Image from "next/image";
import Carousel from "./components/home/blog-carousel";
import { IoIosArrowDown } from "react-icons/io";
import Layout from "./components/layout";

export default function Home() {
  const scrollTargetRef = useRef(null);

  const scrollToBottom = () => {
    if (scrollTargetRef.current) {
      scrollTargetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Layout>
      <div className="flex min-w-full text-base-content items-center justify-center flex-col mt-24 sm:flex-row">
        <div className="flex sm:w-1/2 w-3/4 justify-center items-center flex-col ">
          <div className="text-left w-3/4">
            <h1 className="sm:text-9xl text-6xl font-anta">Evan</h1>
            <h1 className="sm:text-9xl text-6xl font-anta">Moore</h1>
          </div>

          <p className="w-3/4 mt-10 leading-8 text-lg font-mono">
            {`\tHey, I'm Evan Moore, a Computer Science student at Brown University
            fascinated by technology. With a passion for both coding and leadership,
            I'm eager to share my journey and insights as I navigate through the
            ever-evolving tech landscape.`}
          </p>
        </div>

        <div className="divider lg:divider-horizontal"></div>

        <div className="flex w-1/2 sm:mt-0 mt-12 justify-center items-center">
          <Image src={"/img/Prog_Room.png"} width={800} height={800} />
        </div>
      </div>

      <div className="mt-20 w-screen flex items-center justify-center hover:cursor-pointer">
        <IoIosArrowDown
          size={50}
          color="oklch(var(--a))"
          onClick={scrollToBottom}
        />
      </div>

      <div
        className="m-10 h-screen flex justify-center flex-col"
        ref={scrollTargetRef}
      >
        <h1 className="text-6xl text-base-content mb-12 font-anta">Blogs</h1>
        <div className="divider"></div>

        <Carousel />
      </div>
    </Layout>
  );
}
