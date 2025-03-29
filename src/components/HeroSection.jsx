import React, { useRef } from "react";
import Currency from "./Currency";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function HeroSection() {
  const heroTitleRef = useRef(null);

  useGSAP(() => {
    gsap.from(heroTitleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 0.8,
    });
  });

  return (
    <div className="h-screen w-full relative">
      {" "}
      <section className="h-screen w-full fixed">
        <img
          className="h-screen w-full"
          src="https://images.unsplash.com/photo-1606171137177-30ba553a9c52?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="floor"
        />
        <div></div>
      </section>
      <div className=" overflow-hidden absolute top-[300px] left-32 z-40">
        <div ref={heroTitleRef} className="gap-8 ">
          <h1 className="text-7xl font-semibold ">Make a Difference Today</h1>

          <h3 className="w-[800px] mt-4 text-white text-left font-semibold text-3xl">
            Join our community of changemakers and help transform lives through
            the power of giving
          </h3>
        </div>
      </div>
      <Currency heroTitleRef={heroTitleRef} />
    </div>
  );
}

export default HeroSection;
