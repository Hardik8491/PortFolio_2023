import { Fragment } from "react";
import { Helmet } from "react-helmet";
import Header from "../../Components/Header/Header";
import FeaturedArea from "../../Components/FeaturedArea/FeaturedArea";
import AboutUs from "../../Components/AboutUs/AboutUs";
import Services from "../../Components/Services/Services";

import EducationAndSkills from "../../Components/EducationAndSkills/EducationAndSkills";
import Portfolio from "../../Components/Portfolio/Portfolio";
import FreelanceWork from "../../Components/FreelanceWork/FreelanceWork.tsx";
import Testimonials from "../../Components/Testimonials/Testimonials.tsx";
import BlogPost from "../../Components/BlogPosts/BlogPosts.tsx";
import Partners from "../../Components/Partners/Partners.tsx";
import ContactInfoProfiles from "../../Components/ContactInfoProfiles/ContactInfoProfiles.tsx";
import ContactUs from "../../Components/ContactUs/ContactUs.tsx";
import BottomBar from "../../Components/BottomBar/BottomBar.tsx";
import MyWorkExperience2 from "../../Components/MyWorkExperience/MyWorkExperince2.tsx";

const HomePage = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Personal Portfolio HDK.IO</title>
      </Helmet>
      <Header/>
      <FeaturedArea/>
      <AboutUs/>

      <Services/>
      <MyWorkExperience2/>

      <EducationAndSkills/>
      <Portfolio/>

      <FreelanceWork/>
      <Testimonials/>
      <BlogPost/>
      <Partners/>
      <ContactInfoProfiles/>
      <ContactUs/>
      <BottomBar/>
    </Fragment>
  );
};

export default HomePage;
