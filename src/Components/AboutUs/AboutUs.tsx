import PatternImg from "../../../public/patternImg.09ae32af9e6c172ca62d.jpg";
import PatternImg2 from "../../../public/patternImg2.jpg";
import AboutUsBg from "../../../public/secBg.cc883748dc59ff5c0f5c.jpg";
import SectionTitle from "../SectionTitles/SectionTitle";
import AboutImg from "../../../public/about.jpg";
// import { ReactComponent as Signature } from "../../lib/icons/Signature.svg";
// // import  GoPrimitiveDot  from "react-icons/go";
import { GoDotFill } from "react-icons/go";

const AboutUs = () => {
  return (
    <section className="aboutUsWrap py-[4.5rem] md:py-[5.5rem] lg:py-[6.5rem] xl:py-[7.5rem] relative w-full">
      <div
        className="fixedBg bg-left-top bg-no-repeat opacity-20"
        style={{ backgroundImage: `url(${PatternImg})` }}></div>
      <div className="container sm:container md:container lg:container xl:container 2xl:container mx-auto">
        <SectionTitle
          title="About"
          titleInner="Me"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."></SectionTitle>
        <div className="aboutUs relative w-full p-[1.25rem] lg:p-[1.875rem] mt-[5.9375rem]">
          <div
            className="aboutUsBg before:absolute before:inset-0 before:bg-gray before:rounded-[10px] before:sm:rounded-[1.25rem] before:md:rounded-[3.125rem] before:opacity-70 before:z-[1] bg-gray bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] inset-0 left-0 lg:left-[10.9375rem] bg-no-repeat bg-center bg-cover"
            style={{ backgroundImage: `url(${AboutUsBg})` }}></div>
          <div className="grid gap-[1.875rem] lg:grid-cols-2 grid-cols-1">
            <div>
              <div className="aboutImg relative mt-[-5.625rem] ml-0 lg:ml-[-1.875rem]">
                <img
                  className="rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] relative z-[1] w-full"
                  src={AboutImg}
                  alt=""></img>
                {/* About Image */}
              </div>
            </div>
            <div>
              <div className="aboutCapWrap w-full">
                <div className="aboutCap relative rounded-[10px] sm:rounded-[1.25rem] md:rounded-[3.125rem] overflow-hidden z-[1] lg:py-12 xl:pt-[4.6875rem] xl:pb-[4.375rem] p-5 md:p-10 lg:px-[3.5rem] xl:px-20">
                  <div
                    className="aboutCapBg bg-white opacity-90 opc8 absolute rounded-in sm:rounded-[1.25rem] md:rounded-[3.125rem] inset-0 bg-no-repeat bg-center bg-cover z-[-1]"
                    style={{ backgroundImage: `url(${PatternImg2})` }}></div>
                  <h3 className="text-accent2 font-light text-[1.5rem] md:text-[1.875rem] leading-tight font-Poppins">
                    Hi,
                  </h3>
                  <h4 className="text-accent2 font-light text-[1.325rem] md:text-[1.5rem] leading-normal font-Poppins">
                    My name is{" "}
                    <span className="text-accent font-bold uppercase text-[1.5rem] md:text-[1.875rem]">
                      Hardik Bhammar
                    </span>
                  </h4>
                  <ul className="grid grid-cols-1 gap-5 mt-6">
                    <li className="grid grid-cols-3 gap-4 text-[1rem] md:text-[1.125rem]">
                      <strong className="text-desc3 uppercase font-bold font-Poppins col-span-1">
                        Age:
                      </strong>
                      <span className="text-desc2 font-semibold font-NunitoSans col-span-2">
                        19
                      </span>
                    </li>
                    <li className="grid grid-cols-3 gap-4 text-[1rem] md:text-[1.125rem]">
                      <strong className="text-desc3 uppercase font-bold font-Poppins col-span-1">
                        Phone:
                      </strong>
                      <span className="text-desc2 font-semibold font-NunitoSans col-span-2">
                        <a
                          className="text-desc2 font-semibold font-NunitoSans hover:text-accent"
                          href="tel:+12 986 987 7867"
                          title="">
                          +91 7046478268
                        </a>
                      </span>
                    </li>
                    <li className="grid grid-cols-3 gap-4 text-[1rem] md:text-[1.125rem]">
                      <strong className="text-desc3 uppercase font-bold font-Poppins col-span-1">
                        Email:
                      </strong>
                      <span className="text-desc2 font-semibold font-NunitoSans col-span-2">
                        <a
                          className="text-desc2 font-semibold font-NunitoSans hover:text-accent"
                          href="mailto:youremail@gmail.com"
                          title="">
                          hardikbhammar808@gmail.com
                        </a>
                      </span>
                    </li>
                    <li className="grid grid-cols-3 gap-4 text-[1rem] md:text-[1.125rem]">
                      <strong className="text-desc3 uppercase font-bold font-Poppins col-span-1">
                        Address:
                      </strong>
                      <span className="text-desc2 font-semibold font-NunitoSans col-span-2">
                        37, Pollsatnd, New York, United State
                      </span>
                    </li>
                    <li className="grid grid-cols-3 gap-4 text-[1rem] md:text-[1.125rem]">
                      <strong className="text-desc3 uppercase font-bold font-Poppins col-span-1">
                        Freelancer:
                      </strong>
                      <span className="text-desc2 font-semibold font-NunitoSans col-span-2 uppercase flex items-center">
                        {/* <GoPrimitiveDot
                          size="1.5rem"
                          className="fill-accent"
                        ></GoPrimitiveDot> */}
                        <GoDotFill
                          size="1.5rem"
                          className="fill-accent"></GoDotFill>
                        Available
                      </span>
                    </li>
                  </ul>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    x="0px"
                    y="0px"
                    viewBox="0 0 425 165"
                    className="fill-accent h-[4.5rem] mt-[2.375rem]">
                    <g>
                      <path d="M423.61,24.49c-0.57,4.2-1.03,8.42-2.17,12.54c-3.39,12.26-10.22,22.64-18.89,31.89c-12.5,13.32-26.36,25.14-42.45,34.25 c-15.22,8.62-31.65,14.27-48.72,18.22c-13.36,3.1-26.94,4.84-40.68,4.71c-9.44-0.09-18.74-1.45-27.67-4.65 c-3.33-1.19-6.59-2.55-9.02-5.23c-4.19-4.61-4.19-10.14-3.73-15.79c0.06-0.68,0.68-1.62-0.17-1.96c-0.77-0.3-1.23,0.69-1.64,1.24 c-1.68,2.26-3.29,4.55-4.91,6.85c-0.69,0.97-1.39,1.92-2.38,2.62c-0.93,0.66-1.92,0.83-2.93,0.15c-0.97-0.65-1.33-1.55-1.07-2.68 c0.35-1.54,1.21-2.82,2.18-4.06c9.94-12.73,20.21-25.18,31.72-36.62c1.65-1.64,2.89-3.36,2.11-5.86c-0.26-0.83-0.15-1.8,0.82-2.31 c0.93-0.49,1.29,0.17,1.75,0.81c0.44,0.62,0.96,0.14,1.31-0.22c0.63-0.63,1.23-1.29,1.78-1.99c10.01-12.67,20.86-24.67,30.71-37.47 c1.79-2.32,4.07-4.13,7.01-4.95c2.68-0.74,4.23,0.4,4.34,3.1c0.1,2.39-0.8,4.49-2.09,6.4c-9.14,13.57-19.41,26.1-33.48,35.27 c-6.44,4.2-11.35,10.02-16.34,15.71c-2.4,2.73-4.89,5.38-7.26,8.13c-1.9,2.21-2.93,4.77-2.77,7.7c0.11,2.08-0.88,3.84-1.63,5.66 c-1.35,3.3-2.52,6.62-1.86,10.25c0.75,4.13,3.13,7.09,7.04,8.83c5.8,2.58,11.92,4.03,18.23,4.79c20.64,2.48,40.62-0.98,60.37-6.4 c25.45-6.99,47.95-19.2,67.38-36.64c9.77-8.77,18.74-18.26,24.79-29.99c5.71-11.08,8.65-22.75,7.67-35.23 c-0.25-3.21-0.26-6.43-1.14-9.57c-0.11-0.38,0.13-0.85,0.2-1.28c0.15,0,0.3,0,0.45,0c1.29,5.83,2.64,11.64,3.16,17.6 C423.61,20.39,423.61,22.44,423.61,24.49z"></path>
                      <path d="M2.06,160.89c1.6-5.08,5.25-8.83,8.74-12.67c16-17.63,32.01-35.26,48.03-52.88c1.31-1.44,2.89-2.59,4.61-3.51 c1.36-0.73,2.81-1.26,4.11,0.15c1.27,1.38,1.05,2.82,0.01,4.21c-1.73,2.32-3.85,4.3-5.89,6.37c-0.43,0.44-1.33,0.73-0.9,1.55 c0.33,0.62,1.09,0.39,1.66,0.34c1.57-0.14,3.16-0.24,4.7-0.55c1.38-0.28,2.68-0.22,3.99,0.23c2.57,0.88,4.66,0.19,6.51-1.72 c6.24-6.47,12.54-12.87,18.79-19.32c13.14-13.56,27.02-26.35,41.8-38.21c1.8-1.44,3.55-2.94,5.37-4.36c0.43-0.34,1.09-0.87,1.6-0.4 c0.58,0.53-0.12,1.07-0.41,1.52c-1.93,3.01-4.51,5.49-7.04,8C123,64.21,108.23,78.75,93.52,93.36c-4.27,4.24-8.36,8.65-12.57,12.95 c-1.36,1.39-2.06,2.76-0.41,4.36c5.92,5.74,5.28,12.3,2.58,19.15c-1.9,4.81-4.99,8.84-8.56,12.57c-6.43,6.73-13.52,12.73-21,18.32 c-1.9,1.42-4.13,2.06-6.32,2.83c-0.3,0-0.6,0-0.9,0c-2.89-0.69-3.53-2.88-3.75-5.34c-0.56-6.3,1.45-12.02,4.41-17.45 c5.34-9.78,13.09-17.84,20.1-26.43c0.93-1.14,3.07-2.27,2.22-3.68c-0.92-1.51-3.17-0.69-4.81-0.41 c-6.77,1.17-12.56,4.42-17.86,8.49c-8.26,6.35-14.66,14.46-21.59,22.07c-6.79,7.45-12.52,15.76-19.84,22.76 c-0.15,0-0.31-0.03-0.45,0C2.45,164.02,1.55,163.15,2.06,160.89z M78.96,122.74c-0.18-1.9-0.38-4.02-1.32-5.99 c-1.6-3.39-3.07-3.61-5.49-0.78c-6.31,7.38-12.35,14.97-18.05,22.81c-3.36,4.61-5.55,9.72-6.35,15.35c-0.12,0.84-0.68,1.8,0.3,2.43 c1.02,0.65,1.89-0.09,2.65-0.64c9.98-7.19,19.08-15.25,25.88-25.5C78.09,128.16,78.92,125.67,78.96,122.74z"></path>
                      <path d="M129.34,136.43c3.34-0.83,6.16-2.06,8.47-4.47c6.93-7.22,12.63-15.3,17.83-23.74c1.09-1.77,2.3-3.45,4.04-4.68 c3.14-2.22,7.39-1.82,9.82,0.87c1.37,1.51,1.23,3.04,0.23,4.64c-0.99,1.59-2.38,1.78-4.1,1.24c-3.31-1.04-3.6-0.96-5.61,1.8 c-3.4,4.66-6.76,9.35-10.09,14.06c-1.17,1.65-1.98,3.44-1.89,5.53c0.09,1.94,1.1,2.81,3.04,2.67c2.15-0.15,4.16-0.87,5.9-2.04 c7.32-4.9,13.53-10.71,16.32-19.28c1.4-4.3,4.3-7.52,8.2-9.88c1.61-0.98,3.37-2.03,5.18-0.53c1.95,1.6,0.95,3.49,0.15,5.23 c-1.08,2.37-2.83,4.31-4.53,6.28c-2.46,2.87-4.94,5.72-7.4,8.59c-0.57,0.67-1.37,1.37-0.78,2.31c0.59,0.93,1.63,0.62,2.48,0.41 c4.35-1.1,8.49-2.74,11.75-5.82c7.89-7.44,16-14.71,22.44-23.46c6.62-8.99,10.9-18.74,9.8-30.12c-0.15-1.6-0.51-3.18-0.75-4.77 c-0.09-0.62-0.47-1.47,0.34-1.72c0.83-0.26,1.07,0.65,1.3,1.23c2.2,5.57,3.07,11.32,2.35,17.26c-0.54,4.5-2.06,8.73-4.47,12.59 c-6.42,10.3-13.49,20.14-22.43,28.57c-5.07,4.78-10.66,8.83-17.41,11.14c-3.1,1.06-6.11,1.47-9.02-0.59 c-1.23-0.87-2.57-0.69-3.69,0.4c-1.23,1.19-2.43,2.4-3.68,3.57c-3.51,3.28-7.62,5.46-12.41,6.37c-3.89,0.74-5.94-0.22-7.59-3.71 c-0.75-1.58-1.61-1.44-2.81-0.62c-2.58,1.78-5.16,3.56-7.77,5.3c-2.56,1.7-5.25,2.58-8.24,0.96c-1.22-0.66-2.15-0.17-3.01,0.69 c-1.52,1.53-2.97,3.13-4.59,4.54c-2.45,2.14-5.66,3.21-8.32,0.15c-1-1.15-2.21-0.98-3.47-0.32c-2.06,1.06-4.05,2.25-6.41,2.66 c-1.47,0.26-2.86,0.1-4.21-0.42c-1.96-0.74-2.81-2.17-2.35-4.19c0.47-2.09,1.31-4.06,2.51-5.86c3.26-4.93,6.55-9.84,9.81-14.77 c0.65-0.99,1.22-2.04,1.46-3.2c0.13-0.64,0.25-1.36-0.41-1.82c-0.68-0.47-1.34-0.12-1.86,0.29c-0.82,0.63-1.62,1.31-2.33,2.07 c-1.73,1.85-3.27,3.85-4.52,6.03c-4.95,8.6-11.23,16.31-17.05,24.33c-0.42,0.59-1.01,1.09-1.6,1.53c-0.71,0.54-1.5,0.68-2.27,0.04 c-0.7-0.58-1-1.3-0.68-2.16c0.25-0.69,0.56-1.37,0.95-1.99c7.39-12.01,14.57-24.15,23.64-35.08c1.34-1.61,2.86-3.02,4.72-4.04 c2.52-1.37,5.08-1.93,7.61-0.05c2.23,1.66,2.94,4.5,1.96,7.6c-0.63,1.98-1.62,3.79-2.92,5.43c-4.64,5.89-7.85,12.68-12.51,18.56 c-0.52,0.65-1.21,1.53-0.57,2.39c0.61,0.81,1.68,0.49,2.55,0.39c3.23-0.4,5.51-2.31,7.28-4.77c5-6.97,10.09-13.88,14.37-21.31 c0.81-1.41,1.58-2.84,2.87-3.91c0.87-0.72,1.82-1.14,2.88-0.51c1.04,0.61,1.59,1.55,1.42,2.78c-0.19,1.34-0.78,2.53-1.62,3.59 c-4.79,6.06-8.23,12.97-12.91,19.09c-0.22,0.29-0.4,0.62-0.57,0.95c-0.27,0.52-0.65,1.09-0.16,1.62c0.53,0.57,1.13,0.13,1.64-0.13 c2.04-1.04,3.78-2.37,4.79-4.48c1.24-2.61,2.72-5.13,4.81-7.14c4.45-4.28,7.19-9.53,9.45-15.09c0.48-1.17,1.09-2.26,2.03-3.14 c0.75-0.7,1.6-1.12,2.66-0.73c1.04,0.39,1.4,1.2,1.5,2.24c0.27,3-0.69,5.62-2.37,8.07c-2.76,4.02-5.51,8.05-8.24,12.09 C129.88,134.72,129.36,135.36,129.34,136.43z"></path>
                      <path d="M354.23,24.86c1.09,1.34,1.28,2.82,1.65,4.19c2.57,9.65,0.35,18.4-5.28,26.52c-6.82,9.82-15.94,17.31-25.78,24.04 c-7.29,4.99-14.81,9.56-23.42,12.13c-2.53,0.76-5.13,1.17-7.79,1.05c-2.57-0.12-4.82-0.86-6.58-2.87 c-1.81-2.07-2.55-2.04-4.57-0.09c-3,2.89-5.95,5.81-9.57,8c-2.41,1.45-4.98,2.39-7.8,2.71c-2.3,0.26-4.18-0.42-5.31-2.51 c-0.76-1.41-1.71-2.26-3.52-2.22c-1.62,0.03-2.15-1.19-2.04-2.58c0.08-1.03,0.53-2,1.33-2.73c5.77-5.27,9.94-11.74,14.36-18.03 c1.32-1.87,2.76-3.66,4.2-5.45c1.03-1.28,2.31-2.31,3.76-3.11c1.26-0.7,2.54-0.98,3.77,0.03c1.21,1,1.22,2.24,0.72,3.6 c-0.95,2.61-2.65,4.75-4.46,6.82c-3.81,4.34-7.97,8.4-11.49,12.99c-1.13,1.47-2.23,2.96-2.83,4.73c-0.5,1.47,0,2.25,1.64,2.32 c1.79,0.08,3.45-0.4,4.96-1.25c9.14-5.17,16.57-11.97,20.69-21.62c1.84-4.32,4.84-7.34,8.87-9.58c1.37-0.76,2.84-1.14,4.21-0.03 c1.41,1.14,1.48,2.63,0.89,4.2c-0.73,1.96-1.98,3.6-3.4,5.14c-3.09,3.31-6.21,6.6-8.67,10.4c-0.85,1.31-2.17,2.77-1.03,4.42 c1.15,1.67,3.03,1.21,4.77,1.03c7.6-0.81,14.27-3.82,20.53-7.98c9.16-6.09,18.06-12.49,25.32-20.74 c7.2-8.19,10.88-17.79,11.14-28.59C353.53,28.2,353.47,26.59,354.23,24.86z"></path>
                    </g>
                  </svg>
                  {/* <Signature className="fill-accent h-[4.5rem] mt-[2.375rem]"></Signature> */}
                  {/* About Cap */}
                </div>
                {/* About Cap Wrap */}
              </div>
            </div>
          </div>
          {/* About Us */}
        </div>
      </div>
      {/* About Us Wrap */}
    </section>
  );
};

export default AboutUs;
