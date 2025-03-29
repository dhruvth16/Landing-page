import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { notesArray } from "../notesArray";

gsap.registerPlugin(ScrollTrigger);

function Currency({ heroTitleRef }) {
  const containerRef = useRef(null);

  const notes = Array.from({ length: 100 }, (_, index) => ({
    id: index,
    imgUrl: notesArray[Math.floor(Math.random() * notesArray.length)],
    initialTop: `${Math.floor(Math.random() * 30) + 63}%`,
    initialLeft: `${Math.floor(Math.random() * 120)}%`,
    rotate: Math.random() * 360,
    scale: Math.random() * 0.5 + 0.5,
  }));

  useEffect(() => {
    if (!containerRef.current) return;

    const elements = containerRef.current.children;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "3%",
        // end: "bottom bottom",
        scrub: true,
        pin: true,
      },
    });

    tl.to(heroTitleRef.current, {
      y: -100,
      opacity: 0,
    });

    tl.fromTo(
      elements,
      {
        opacity: 0.9,
        scale: 0.3,
        rotation: (i) => notes[i].rotate,
        top: (i) => notes[i].initialTop,
        left: (i) => notes[i].initialLeft,
        y: 0,
      },
      {
        opacity: 1,
        scale: (i) => notes[i].scale * 2,
        rotation: (i) => notes[i].rotate,
        top: () => `${Math.floor(Math.random() * 100)}%`,
        left: () => `${Math.floor(Math.random() * 100)}%`,
        y: "-100%",
        stagger: {
          each: 0.05,
          from: "random",
        },
      }
    );

    return () => {
      tl.kill();
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div ref={containerRef} className="fixed top-0 left-0 w-full h-screen z-10">
      {notes.map(({ id, imgUrl, initialTop, initialLeft, rotate, scale }) => (
        <img
          draggable
          key={id}
          className="absolute w-32 md:w-32 lg:w-[350px]"
          src={imgUrl}
          alt="currency"
          style={{
            top: initialTop,
            left: initialLeft,
            transform: `rotate(${rotate}deg) scale(${scale})`,
          }}
        />
      ))}
    </div>
  );
}

export default Currency;
