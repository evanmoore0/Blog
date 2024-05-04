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
      <div className="flex min-w-full text-base-content items-center justify-center flex-col sm:flex-row ">
        <div className="flex sm:w-1/2 w-3/4 justify-center items-center flex-col ">
          <div className="text-left w-3/4">
            <h1 className="sm:text-8xl text-6xl font-anta">SCHNEEF</h1>
          </div>

          <p className="w-3/4 mt-10 leading-8 text-lg font-mono">
            {`SCHNEEF SCHNEEF SCHNEEF!

The Deep State is fuming that we made this token. Crypto used to be the wild west, now it is East Berlin. Help us make crypto GREAT AGAIN and PUMP SCHNEEF!`}
          </p>
        </div>

        <div className="divider lg:divider-horizontal"></div>

        <div className="flex w-1/2 sm:mt-0 mt-12 justify-center items-center">
          <Image src={"/img/Schneef.png"} width={400} height={400} />
        </div>
      </div>
    </Layout>
  );
}
