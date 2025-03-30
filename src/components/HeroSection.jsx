import React, { useRef, useState } from "react";
import Currency from "./Currency";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import iphone from "../assets/iphone.png";

function HeroSection() {
  const heroTitleRef = useRef(null);
  const phoneRef = useRef(null);
  const [rect, setRect] = useState(null);

  useGSAP(() => {
    gsap.from(heroTitleRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      delay: 0.8,
    });

    gsap.from(phoneRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      delay: 0.8,
    });

    // Wait until DOM is updated before accessing the image
    requestAnimationFrame(() => {
      const image = document.querySelector(".phoneImage");
      if (image) {
        setRect(image.getBoundingClientRect()); // Store image position safely
      }
    });
  });

  return (
    <div className="h-screen w-full relative">
      <section className="h-screen w-full fixed">
        <img
          className="h-screen w-full"
          src="https://images.unsplash.com/photo-1606171137177-30ba553a9c52?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fA%3D%3D"
          alt="floor"
        />
      </section>
      <div className="flex flex-col md:flex-row">
        <div className="absolute top-30 md:top-[300px] px-8 md:px-30 z-40 overflow-hidden">
          <div ref={heroTitleRef} className="gap-8 text-left">
            <h1 className="text-4xl md:text-7xl font-semibold">
              Make a Difference Today
            </h1>
            <h3 className="mt-4 md:w-[800px] text-white font-semibold text-xl md:text-3xl">
              Join our community of changemakers and help transform lives
              through the power of giving
            </h3>
          </div>
        </div>
        <div ref={phoneRef} className="fixed right-80 top-[250px] h-[400px]">
          <img className="rounded-2xl phoneImage" src={iphone} alt="" />
        </div>
      </div>
      {rect && <Currency heroTitleRef={heroTitleRef} rect={rect} />}
    </div>
  );
}

export default HeroSection;
