import React from 'react'

const SectionTitltileContact = (props: { subTitle: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; title: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; titleInner: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined; desc: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined }) => {
  return (
    <div className="secTitleWrap flex justify-center text-center w-full mb-[2.1875rem]">
        <div className="secTitle max-w-[100%] md:max-w-[90%] lg:max-w-[55%]">
          <i className="text-white font-Poppins font-semibold uppercase text-[1rem] md:text-[1.25rem] tracking-[2.5px] md:tracking-[5.5px] mb-3 not-italic">{props.subTitle}</i>
          <h2 className="text-white text-[1.875rem] md:text-[2.5rem] xl:text-[3.125rem] font-Poppins font-bold relative">
          <i className="h-[3.5rem] w-[3.5rem] md:h-[5.625rem] md:w-[5.625rem] rounded-[10px] md:rounded-[1.25rem] absolute ml-[-1.75rem] md:ml-[-2.8125rem] left-1/2 bg-shapBgDark z-[-1] top-[-12%] md:top-[-15%]"></i>
            {props.title} <span className="text-blue-500 text-[1.875rem] md:text-[2.5rem] xl:text-[3.125rem] font-Caveat font-bold relative">
              {props.titleInner}
            </span>
          </h2>
          <p className="text-white text-[1rem] md:text-[1.25rem] sm:text-[1.225rem] mt-1">
            {props.desc}
          </p>
          {/* Section Title */}
        </div>
        {/* Section Title Wrap */}
      </div>
  )
}

export default SectionTitltileContact
