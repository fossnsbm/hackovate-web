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
            Hacktomberfest is a global celebration of open-source software, and
            it{"'"}s that time of the year again! This October, developers,
            especially students, are encouraged to contribute to open-source
            projects by submitting pull requests on GitHub.
          </p>
          <br />
          <p className="font-bold" style={{ fontSize: "18px" }}>
            As the FOSS Community of NSBM, we{"'"}re thrilled to announce our
            hackathon, Hackovate 2023, in parallel to Hacktomberfest 2023.This
            is your opportunity to shine as a individual, create real impact,
            and showcase your coding skills.
          </p>
          <br />
          <p className="font-bold" style={{ fontSize: "18px" }}>
            Don{"'"}t miss out on this incredible opportunity to be a part of
            the open-source revolution. Join us at Hackovate 2023, where coding
            meets creativity, and together, we{"'"}ll make a lasting impact on
            the world of open-source software.
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
