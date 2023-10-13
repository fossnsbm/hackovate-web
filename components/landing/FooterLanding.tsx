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

const FoosterLanding = () => {
  return (
    <div className="text-white mb-5 mt-20">
      <Container>
        <div>
          <div className="md:flex justify-between items-center mb-5">
            <div>
              <div className="text-xs md:text-xl font-medium text-center">
                FOSS Community of NSBM
              </div>
            </div>
            <div className="flex ms-12 sm:ms-60 mt-5 md:mt-0">
              <span className="px-3">
                <a href="https://github.com/fossnsbm" target="_blank">
                  <BsGithub />
                </a>
              </span>
              <span className="px-3">
                <a
                  href="https://www.linkedin.com/company/fossnsbm/"
                  target="_blank"
                >
                  <BsLinkedin />
                </a>
              </span>
              <span className="px-3">
                <a href="https://www.instagram.com/fossnsbm/" target="_blank">
                  <BsInstagram />
                </a>
              </span>
              <span className="px-3">
                <a href="https://www.facebook.com/foss.nsbm" target="_blank">
                  <BsFacebook />
                </a>
              </span>
              <span className="px-3">
                <a href="https://twitter.com/fossnsbm" target="_blank">
                  <BsTwitter />
                </a>
              </span>
              <span className="px-3">
                <a href="https://www.youtube.com/@fosscommunitynsbm8708" target="_blank">
                  <BsYoutube />
                </a>
              </span>
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

export default FoosterLanding;
