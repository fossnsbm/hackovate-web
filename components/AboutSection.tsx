import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <>
      <div className="flex" id="About">
        <div className="left-0 mx-6 pt-28">
          <Image
            className="hidden md:block"
            src="/assets/e2.png"
            alt="symbol-2"
            width={500}
            height={500}
          />
        </div>
        <div className="px-2">
          <p className="font-bold mt-20 mb-8" style={{ fontSize: "32px" }}>
            ABOUT EVENT
          </p>
          <p className="font-bold" style={{ fontSize: "18px" }}>
            Forem ipsum dolor sit amet, consectetur adipiscing elit.Forem ipsum
            dolor sit amet, consectetur adipiscing elit.Forem ipsum dolor sit
            amet, consectetur adipiscing elit.Forem ipsum dolor sit amet,
            consectetur adipiscing elit.Forem ipsum dolor sit amet, consectetur
            adipiscing elit.
          </p>
          <br />
          <p className="font-bold" style={{ fontSize: "18px" }}>
            Forem ipsum dolor sit amet, consectetur adipiscing elit.Forem ipsum
            dolor sit amet, consectetur adipiscing elit.Forem ipsum dolor sit
            amet, consectetur adipiscing elit.Forem ipsum dolor sit amet,
            consectetur adipiscing elit.Forem ipsum dolor sit amet, consectetur
            adipiscing elit.Forem ipsum dolor sit amet, consectetur adipiscing
            elit.Forem ipsum dolor sit amet, consectetur adipiscing elit.Forem
            ipsum dolor sit amet, consectetur adipiscing elit.Forem ipsum dolor
            sit amet, consectetur adipiscing elit.Forem ipsum dolor sit amet,
            consectetur adipiscing elit.Forem ipsum dolor sit amet, consectetur
            adipiscing elit.Forem ipsum dolor sit amet, consectetur adipiscing
            elit.Forem ipsum dolor sit amet, consectetur adipiscing elit.Forem
            ipsum dolor sit amet, consectetur adipiscing elit.Forem ipsum dolor
            sit amet, consectetur adipiscing elit.
          </p>
        </div>
        <div className="right-0 pt-48 me-8">
          <Image
            className="hidden md:block"
            src="/assets/e1.png"
            alt="symbol-1"
            width={500}
            height={500}
          />
        </div>
      </div>
    </>
  );
};

export default AboutSection;
