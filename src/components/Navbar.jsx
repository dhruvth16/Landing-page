import { DollarSignIcon } from "lucide-react";
import React, { useRef } from "react";
import List from "./List";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Navbar() {
  const titlleRef = useRef();
  const listRef = useRef();

  useGSAP(() => {
    gsap.from(titlleRef.current, {
      x: -100,
      opacity: 0,
      duration: 0.6,
      delay: 0.4,
    });

    gsap.from(listRef.current, {
      x: 100,
      opacity: 0,
      duration: 0.6,
      delay: 0.4,
    });
  }, [titlleRef]);

  return (
    <nav className="w-full bg-gray-200 py-4 px-5 md:px-30 shadow-md shadow-gray-300 flex items-center justify-between fixed z-20">
      <h1
        ref={titlleRef}
        className="flex items-center gap-2 text-3xl font-bold"
      >
        Crowdfunding <DollarSignIcon />
      </h1>
      <div ref={listRef} className="items-center gap-8 hidden md:flex">
        <List text="Home" />
        <List text="About" />
        <List text="Contact" />
      </div>
    </nav>
  );
}

export default Navbar;
