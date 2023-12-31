"use client";

import { useState } from "react";
import Image from "next/image";
import Arrow from "@/public/icon/icon-arrow-down.svg";

const Card = ({ question, answer, index }) => {
  const [active, setActive] = useState(null);
  const handleToggle = (index) => {
    active === index ? setActive(null) : setActive(index);
  };

  return (
    <main className="cursor-pointer space-y-2">
      <div
        data-aos="fade-up"
        className="flex items-center justify-between px-6 py-4 font-semibold"
        onClick={() => handleToggle(index)}
      >
        <p
          className={"lg:text-lg max-w-[14rem] lg:max-w-[32rem] font-semibold"}
        >
          {question}
        </p>
        <Image
          rel="preload"
          src={Arrow}
          alt="arrow-icon"
          className={active === index ? "w-4 rotate-180" : "w-4"}
        />
      </div>
      <div
        id="answer"
        onClick={() => handleToggle(index)}
        className={active === index ? "px-6 py-4" : "invisible h-0"}
      >
        {answer}
      </div>
    </main>
  );
};

export default Card;
