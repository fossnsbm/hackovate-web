"use client";

import Container from "@/components/Container";
import Image from "next/image";
import {
  BsGithub,
  BsLinkedin,
  BsInstagram,
  BsFacebook,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

type Props = {};

const styles = {
  monoFonts: "text-center text-sm md:text-2xl",
  bottomFooter: "text-center text-sx md:text-sm",
};

const LongFooter = (props: Props) => {
  return (
    <div className="text-white mb-5 mt-20">
      <Container>
        <div>
          <div className="flex flex-col gap-2 md:flex md:flex-row justify-between relative items-center mb-5 md:mb-10 font-mono">
            <div>
              <p className="text-xl font-semibold">OCTOBER 23, 2023</p>
            </div>
            <div>
              <p className="text-xl font-semibold">9.00 AM - 12.00 PM</p>
            </div>
            <div>
              <p className="text-lg md:text-xl font-semibold">
                B1 - L102, Faculty OF Computing
              </p>
            </div>
          </div>

          <hr />

          <div className="flex flex-col gap-2 md:flex md:flex-row justify-between items-center mt-5 md:mt-10 text-sm font-mono">
            <div>
              <div>©2023 FOSS COMMUNITY OF NSBM</div>
            </div>
            <div>
              <div>{"</>"} WITH ❤ BY THE FOSS COMMUNITY OF NSBM </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LongFooter;
