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
          <div className="flex flex-col gap-2 md:flex md:flex-row justify-between relative items-center mb-5 md:mb-10  font-mono">
            <div>
              <p className={styles.monoFonts}>OCTOBER 23, 2023</p>
            </div>
            <div className={styles.monoFonts}>
              <p>9.00 AM - 12.00 PM</p>
            </div>
            <div className={styles.monoFonts}>
              <p>B1 - L101, Faculty OF Computing</p>
            </div>
          </div>

          <hr />

          <div className="flex flex-col gap-2 md:flex md:flex-row justify-between items-center mt-5 md:mt-10 text-sm font-mono">
            <div>
              <div className={styles.bottomFooter}>
                ©2023 FOSS COMMUNITY OF NSBM
              </div>
            </div>
            <div>
              <div className={styles.bottomFooter}>
                {"</>"} WITH ❤ BY THE FOSS COMMUNITY OF NSBM{" "}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LongFooter;
