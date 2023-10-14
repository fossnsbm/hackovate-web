import Button from "../Button";
import Container from "../Container";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { TbChevronRight } from "react-icons/tb";

const LatestEvents = () => {
  const router = useRouter();
  const goToRegister = () => {
    router.push("/events/hackovate");
  };

  return (
    <div>
      <Container>
        <p className="text-3xl my-14 md:my-10 md:text-4xl md:leading-[3.75rem] font-medium text-center md:text-left text-white mb-5">
          Latest Events
        </p>
        <div className="md:flex">
          <div className="max-w-sm border border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 mx-auto">
            <Image
              className="rounded-t-lg bg-black"
              width={1172}
              height={100}
              src="/assets/hackNew.webp"
              alt="SFD Logo"
            />

            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-3xl font-bold tracking-tight text-white">
                  HACKOVATE
                </h5>
              </a>
              <p className="mb-5 font-normal text-white">
                Hacktomberfest is a global celebration of open-source software,
                and it{"'"}s that time of the year again! This October,
                developers, especially students, are encouraged to contribute to
                open-source projects by submitting pull requests on GitHub.
              </p>
              <Button
                label="Read More"
                onClick={goToRegister}
                icon={TbChevronRight}
              />
            </div>
          </div>
          <div className="max-w-sm border gradient-border rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 px-48 relative mt-10 md:mt-0">
            <Image
              className="rounded-t-lg w-full h-full opacity-10"
              width={1172}
              height={100}
              src="/images/hacktoberfest-logo.webp"
              alt="Hacktoberfest Logo"
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <p className="text-gray text-4xl font-bold absolute text-center">
                Comming Soon
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default LatestEvents;
