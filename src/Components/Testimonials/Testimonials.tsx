import Slider from "react-slick";
import SectionTitleLight from "../SectionTitles/SectionTitleLight";
import PatternImg2 from "../../assets/patternImg2.jpg";
import SectionBg from "../../../public/secBg4.e51dd8088c3cfec11d9c.jpg";
import { testimonials } from "../data/testimonials";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";



import "slick-carousel/slick/slick.css";


// function NextArrow(props: { className: any; style: any; onClick: any }) {
//   const { className, style, onClick } = props;
//   return (
//     <div className={className} style={{ ...style }} onClick={onClick}>
//       <FiChevronRight className="hover:bg-white hover:text-accent bg-accent text-white rounded-[5px] md:rounded-[10px] w-9 h-[3.5rem] md:w-11 md:h-[4.375rem] p-2" />
//     </div>
//   );
// }

// function PrevArrow(props: { className: any; style: any; onClick: any }) {
//   const { className, style, onClick } = props;
//   return (
//     <div className={className} style={{ ...style }} onClick={onClick}>
//       <FiChevronLeft className="hover:bg-white hover:text-accent bg-accent text-white rounded-[5px] md:rounded-[10px] w-9 h-[3.5rem] md:w-11 md:h-[4.375rem] p-2" />
//     </div>
//   );
// }

// const Testimonials = (props: any) => {
//   const settings = {
//     dots: false,
//     arrows: true,
//     infinite: true,
//     speed: 1000,
//     fade: true,
//     vertical: false,
//     // adaptiveHeight: true,
//     centerPadding: "0",
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: (
//       <NextArrow
//         className={undefined}
//         style={undefined}
//         onClick={undefined}></NextArrow>
//     ),
//     prevArrow: (
//       <PrevArrow
//         className={undefined}
//         style={undefined}
//         onClick={undefined}></PrevArrow>
//     ),
//     responsive: [
//       {
//         breakpoint: 1030,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           infinite: true,
//           dots: false,
//           arrows: true,
//         },
//       },
//       {
//         breakpoint: 770,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: true,
//           arrows: false,
//         },
//       },
//       {
//         breakpoint: 576,
//         settings: {
//           slidesToShow: 1,
//           slidesToScroll: 1,
//           dots: true,
//           arrows: false,
//         },
//       },
//     ],
//   };

//   return (
//     <section className="testiWrap pt-[10rem] md:pt-[22rem] lg:pt-[26rem] -mt-24 sm:mt[-12rem] md:mt-[-15rem] lg:mt-[-17.625rem] pb-[4.5rem] sm:pb-[5.5rem] md:pb-[6.5rem] lg:pb-[8.75rem] relative w-full">
//       <span className="bg-accent absolute right-0 bottom-[-.75rem] h-6 w-1/2"></span>
//       <div
//         className="fixedBg bg-center bg-no-repeat before:absolute before:z-[1] before:inset-0 before:opacity-90 before:bg-dark bg-dark gradBg1 bg-blend-color-dodge xl:rounded-tl-[20rem] lg:rounded-tl-[18rem] md:rounded-tl-[15rem] sm:rounded-tl-[10rem] rounded-tl-0 overflow-hidden"
//         style={{ backgroundImage: `url(${SectionBg})` }}></div>
//       <div className="container sm:container md:container lg:container xl:container 2xl:container mx-auto">
//         <SectionTitleLight
//           title="Users"
//           titleInner="Feedback"
//           desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."></SectionTitleLight>
//         <div className="testiList flex justify-center relative w-full">
//           <Slider className="max-w-full" {...settings}>
//             {testimonials.map(
//               (item, index) =>
//                 index < 4 && (
//                   <div className="sliderItem text-center" key={index}>
//                <div
//                       className="testiBox flex flex-col sm:flex-row gap-5 sm:gap-0 text-center sm:text-left relative items-center p-8 sm:py-[3.4375rem] sm:pr-[3.125rem] md:pr-[7.5rem] max-w-[48.125rem] mx-auto"
//                       key={index}>
//                       <div
//                         className="before:absolute before:inset-0 before:bg-white before:rounded-[10px] sm:before:rounded-[1.25rem] lg:before:rounded-[1.875rem] xl:before:rounded-[3.125rem] before:opacity-70 before:z-[1] bg-blend-multiply absolute rounded-[10px] sm:rounded-[1.25rem] lg:rounded-[1.875rem] xl:rounded-[3.125rem] inset-0 bg-no-repeat bg-center bg-cover z-[-1] bg-white left-0 sm:left-[3.75rem] md:left-[5.3125rem]"
//                         style={{
//                           backgroundImage: `url(${PatternImg2})`,
//                         }}></div>
//                       <div
//                         className="testiImg border-[5px] md:border-[10px] border-[#fff] rounded-[10px] sm:rounded-[1.25rem] lg:rounded-[1.875rem] xl:rounded-[3.125rem] max-w-[12.8125rem]"
//                         style={{ flex: "0 0 12.8125rem" }}>
//                         <img
//                           className="rounded-[10px] sm:rounded-[1.25rem] md:rounded-[1.9rem] lg:rounded-[2.1rem]"
//                           src={item.testiImg}
//                           alt={item.testiTitle}></img>
//                       </div>
//                       <div
//                         className="testiInfo text-center sm:text-left p-0 sm:pl-[2.1875rem]"
//                         style={{ flex: "1 0 0" }}> 
                        
//                         <p className="text-desc2 relative text-[1rem] md:text-[1.25rem] leading-relaxed z-[1]">
//                             <h1>this is left</h1>
//                           {/* <LeftQuoteSignIcon className="h-[3.5rem] sm:h-[5.625rem] w-[3.5rem] sm:w-[6.875rem] text-accent2 opacity-5 -left-3 -top-5 absolute"></LeftQuoteSignIcon> */}
                              
//                           {item.testiDesc}
//                           {/* <RightQuoteSignIcon className="h-[3.5rem] sm:h-[5.625rem] w-[3.5rem] sm:w-[6.875rem] text-accent2 opacity-5 -right-3 sm:-right-7 -bottom-2 absolute"></RightQuoteSignIcon> */}
//                         </p>
//                         <h3 className="text-accent2 text-[1.5rem] font-Poppins font-bold flex flex-col sm:flex-row gap-[.9375rem] items-center mt-5">
//                           {item.testiTitle}
//                           <span className="text-accent text-[1rem] md:text-[1.125rem] font-NunitoSans font-semibold">
//                             {item.testiDesi}
//                           </span>
//                         </h3>
//                         <img
//                           className="mx-auto sm:mx-[initial] h-[1.375rem] mt-2"
//                           src={item.testiRate}
//                           alt="Rating"></img>
//                       </div>
//                     </div>
//                   </div>
//                 )
//             )}
//           </Slider>
//           {/* Testimonials List */}
//         </div>
//       </div>
//       {/* Testimonials Wrap */}
//     </section>
//   );
// };

// export default Testimonials;

// import Slider from "react-slick";
// import { SectionTitleLight } from "../SectionTitles";
// import PatternImg2 from "../../assets/images/patternImg2.jpg";
// import SectionBg from "../../assets/images/secBg4.jpg";
// import { testimonials } from "../../data/testimonials";
// import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
// import { ReactComponent as LeftQuoteSignIcon } from "../../lib/icons/LeftQuoteSign.svg";
// import { ReactComponent as RightQuoteSignIcon } from "../../lib/icons/RightQuoteSign.svg";

// import "slick-carousel/slick/slick.css";

function NextArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <FiChevronRight className="hover:bg-white hover:text-accent bg-accent text-white rounded-[5px] md:rounded-[10px] w-9 h-[3.5rem] md:w-11 md:h-[4.375rem] p-2" />
    </div>
  );
}

function PrevArrow(props: { className: any; style: any; onClick: any; }) {
  const { className, style, onClick } = props;
  return (
    <div className={className} style={{ ...style }} onClick={onClick}>
      <FiChevronLeft className="hover:bg-white hover:text-accent bg-accent text-white rounded-[5px] md:rounded-[10px] w-9 h-[3.5rem] md:w-11 md:h-[4.375rem] p-2" />
    </div>
  );
}

const Testimonials = (props: any) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 1000,
    fade: true,
    vertical: false,
    // adaptiveHeight: true,
    centerPadding: "0",
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow className={undefined} style={undefined} onClick={undefined}></NextArrow>,
    prevArrow: <PrevArrow className={undefined} style={undefined} onClick={undefined}></PrevArrow>,
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: true,
        },
      },
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
          arrows: false,
        },
      },
    ],
  };

  return (
    <section className="testiWrap pt-[10rem] md:pt-[22rem] lg:pt-[26rem] -mt-24 sm:mt[-12rem] md:mt-[-15rem] lg:mt-[-17.625rem] pb-[4.5rem] sm:pb-[5.5rem] md:pb-[6.5rem] lg:pb-[8.75rem] relative w-full">
      <span className="bg-accent absolute right-0 bottom-[-.75rem] h-6 w-1/2"></span>
      <div
        className="fixedBg bg-center bg-no-repeat before:absolute before:z-[1] before:inset-0 before:opacity-90 before:bg-dark bg-dark gradBg1 bg-blend-overlay xl:rounded-tl-[20rem] lg:rounded-tl-[18rem] md:rounded-tl-[15rem] sm:rounded-tl-[10rem] rounded-tl-0 overflow-hidden"
        style={{ backgroundImage: `url(${SectionBg})` }}
      ></div>
      <div className="container sm:container md:container lg:container xl:container 2xl:container mx-auto">
        <SectionTitleLight
          title="Users"
          titleInner="Feedback"
          desc="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."
        />
        <div className="testiList flex justify-center relative w-full">
          <Slider className="max-w-full" {...settings}>
            {testimonials.map(
              (item, index) =>
                index < 4 && (
                  <div className="sliderItem text-center" key={index}>
                    <div
                      className="testiBox flex flex-col sm:flex-row gap-5 sm:gap-0 text-center sm:text-left relative items-center p-8 sm:py-[3.4375rem] sm:pr-[3.125rem] md:pr-[7.5rem] max-w-[48.125rem] mx-auto"
                      key={index}
                    >
                      <div
                        className="before:absolute before:inset-0 before:bg-white before:rounded-[10px] sm:before:rounded-[1.25rem] 
                        lg:before:rounded-[1.875rem] xl:before:rounded-[3.125rem] before:opacity-70 before:z-[1] bg-blend-darken absolute rounded-[10px] sm:rounded-[1.25rem] lg:rounded-[1.875rem] xl:rounded-[3.125rem] inset-0 bg-no-repeat bg-center bg-cover z-[-1] bg-white left-0 sm:left-[3.75rem] md:left-[5.3125rem]"
                        style={{ backgroundImage: `url(${PatternImg2})` }}
                      ></div>
                      <div
                        className="testiImg border-[5px] md:border-[10px] border-[#fff] rounded-[10px] sm:rounded-[1.25rem] lg:rounded-[1.875rem] xl:rounded-[3.125rem] max-w-[12.8125rem]"
                        style={{ flex: "0 0 12.8125rem" }}
                      >
                        <img
                          className="rounded-[10px] sm:rounded-[1.25rem] md:rounded-[1.9rem] lg:rounded-[2.1rem]"
                          src={item.testiImg}
                          alt={item.testiTitle}
                        ></img>
                      </div>
                      <div
                        className="testiInfo text-center sm:text-left p-0 sm:pl-[2.1875rem]"
                        style={{ flex: "1 0 0" }}
                      >
                        <p className="text-desc2 relative text-[1rem] md:text-[1.25rem] leading-relaxed z-[1]">
                          {/* <LeftQuoteSignIcon className="h-[3.5rem] sm:h-[5.625rem] w-[3.5rem] sm:w-[6.875rem] text-accent2 opacity-5 -left-3 -top-5 absolute"></LeftQuoteSignIcon> */}
                          {/* <FiChevronLeft className="h-[3.5rem] sm:h-[5.625rem] w-[3.5rem] sm:w-[6.875rem] text-accent2 opacity-5 -right-3 sm:-right-7 -bottom-2 absolute"/> */}
                          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 190 150" className="h-[3.5rem] sm:h-[5.625rem] w-[3.5rem] sm:w-[6.875rem] text-accent2 opacity-5 -left-3 -top-5 absolute"><g><path d="M0.78,54.09c0.57-3.73,0.94-7.5,1.76-11.18C5.06,31.54,9.42,20.98,18.18,12.6C25.41,5.69,34.14,1.89,44.33,1.14 c20.57-1.53,38.91,11.53,44.25,29.73c7.29,24.86-10.18,49.49-36.03,52.42c-7.73,0.88-15.1-0.25-22.23-3.17 c-0.23-0.09-0.45-0.19-0.68-0.26c-0.11-0.03-0.24-0.01-0.35-0.01c-0.35,0.31-0.18,0.68-0.09,0.99 c3.25,11.56,7.85,22.49,15.84,31.84c3.49,4.08,7.42,7.7,12.52,9.91c1.74,0.75,3.55,1.2,5.49,1.26c2.3,0.06,3.64,1.05,4.29,3.2 c1.6,5.33,3.19,10.66,4.65,16.02c0.88,3.22-0.63,5.22-4.17,5.65c-6.58,0.81-12.93-0.18-19-2.67c-11.94-4.9-20.81-13.31-28.14-23.37 C10.31,108.46,4.21,92.6,1.54,75.46c-0.3-1.92-0.51-3.85-0.76-5.78C0.78,64.48,0.78,59.29,0.78,54.09z"></path><path d="M188.78,47.35c-0.97,4.76-2.13,9.46-4.55,13.77c-7.13,12.71-18.06,20.2-32.95,22.14c-7.64,1-14.98-0.18-22.05-3.06 c-0.28-0.11-0.57-0.22-0.86-0.31c-0.11-0.03-0.24-0.01-0.36-0.01c-0.35,0.31-0.15,0.67-0.07,0.98c3.47,12.65,8.7,24.46,18.01,34.23 c3.67,3.85,7.83,7.15,13.3,8.43c0.47,0.11,0.96,0.21,1.44,0.24c3.97,0.31,4.68,0.84,5.74,4.48c1.38,4.71,2.76,9.43,4.08,14.15 c1.14,4.06-0.41,6.01-4.75,6.4c-9.98,0.9-18.83-2.04-26.97-7.31c-10.23-6.61-17.84-15.54-24-25.69 c-7.53-12.42-12.48-25.77-14.47-40.03c-2.15-15.35-1.27-30.51,4.64-45.11c4.36-10.75,11.05-19.75,21.95-25.17 c18.27-9.08,40.73-4.09,53.19,11.69c4.62,5.85,7.49,12.41,8.44,19.72c0.04,0.29,0.15,0.57,0.23,0.85 C188.78,40.97,188.78,44.16,188.78,47.35z"></path></g></svg>
                          {item.testiDesc}
                           {/* <FiChevronRight className="h-[3.5rem] sm:h-[5.625rem] w-[3.5rem] sm:w-[6.875rem] text-accent2 opacity-5 -right-3 sm:-right-7 -bottom-2 absolute"/> */}
                           <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 190 150" className="h-[3.5rem] sm:h-[5.625rem] w-[3.5rem] sm:w-[6.875rem] text-accent2 opacity-5 -right-3 sm:-right-7 -bottom-2 absolute"><g><path d="M188.78,95.91c-0.57,3.73-0.94,7.5-1.76,11.18c-2.53,11.37-6.89,21.93-15.65,30.31c-7.23,6.92-15.96,10.71-26.15,11.47 c-20.57,1.53-38.91-11.53-44.25-29.73C93.69,94.27,111.16,69.65,137,66.71c7.73-0.88,15.1,0.25,22.23,3.17 c0.23,0.09,0.45,0.19,0.68,0.26c0.11,0.03,0.24,0.01,0.35,0.01c0.35-0.31,0.18-0.68,0.09-0.99c-3.25-11.56-7.85-22.49-15.84-31.84 c-3.49-4.08-7.42-7.7-12.52-9.91c-1.74-0.75-3.55-1.2-5.49-1.26c-2.3-0.06-3.64-1.05-4.29-3.2c-1.6-5.33-3.19-10.66-4.65-16.02 c-0.88-3.22,0.63-5.22,4.17-5.65c6.58-0.81,12.93,0.18,19,2.67c11.94,4.9,20.81,13.31,28.14,23.37 c10.36,14.22,16.46,30.09,19.14,47.23c0.3,1.92,0.51,3.85,0.76,5.78C188.78,85.52,188.78,90.71,188.78,95.91z"></path><path d="M0.78,102.65c0.97-4.76,2.13-9.46,4.55-13.77c7.13-12.71,18.06-20.2,32.95-22.14c7.64-1,14.98,0.18,22.05,3.06 c0.28,0.11,0.57,0.22,0.86,0.31c0.11,0.03,0.24,0.01,0.36,0.01c0.35-0.31,0.15-0.67,0.07-0.98c-3.47-12.65-8.7-24.46-18.01-34.23 c-3.67-3.85-7.83-7.15-13.3-8.43c-0.47-0.11-0.96-0.21-1.44-0.24c-3.97-0.31-4.68-0.84-5.74-4.48c-1.38-4.71-2.76-9.43-4.08-14.15 c-1.14-4.06,0.41-6.01,4.75-6.4c9.98-0.9,18.83,2.04,26.97,7.31c10.23,6.61,17.84,15.54,24,25.69 C82.29,46.6,87.24,59.95,89.23,74.2c2.15,15.35,1.27,30.51-4.64,45.11c-4.36,10.75-11.05,19.75-21.95,25.17 c-18.27,9.08-40.73,4.09-53.19-11.69c-4.62-5.85-7.49-12.41-8.44-19.72c-0.04-0.29-0.15-0.57-0.23-0.85 C0.78,109.03,0.78,105.84,0.78,102.65z"></path></g></svg>
                        </p>
                        <h3 className="text-accent2 text-[1.5rem] font-Poppins font-bold flex flex-col sm:flex-row gap-[.9375rem] items-center mt-5">
                          {item.testiTitle}
                          <span className="text-accent text-[1rem] md:text-[1.125rem] font-NunitoSans font-semibold">
                            {item.testiDesc}
                          </span>
                        </h3>
                        <img
                          className="mx-auto sm:mx-[initial] h-[1.375rem] mt-2"
                          src={item.testiRate}
                          alt="Rating"
                        ></img>
                      </div>
                    </div>
                  </div>
                )
            )}
          </Slider>
          {/* Testimonials List */}
        </div>
      </div>
      {/* Testimonials Wrap */}
    </section>
  );
};

export default Testimonials;
