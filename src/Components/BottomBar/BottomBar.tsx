import { Link } from "react-router-dom";
import { bottomMenu } from "../data/bottom-links";
import SectionBg from "../../../public/secBg2.03666bf5504b026ddd75.jpg";
import {
  BsLinkedin,
  BsDribbble,
  BsFacebook,
  BsInstagram,
} from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";
const BottomBar = () => {
  const USER="Hardik Bhammar"
  return (
    <div className="bottomBarWrap relative w-full py-8 text-gray-400 mt-4 cursor-pointer  ">
      <div
        className="  fixedBg bg-center bg-cover bg-no-repeat before:absolute before:z-[1] before:inset-0 before:opacity-90 before:bg-dark bg-dark gradBg1 bg-blend-overlay xl:rounded-tl-[20rem] lg:rounded-tl-[18rem] md:rounded-tl-[15rem] sm:rounded-tl-[10rem] rounded-tl-0 overflow-hidden"
        style={{ backgroundImage: `url(${SectionBg}) ` }}>
        {" "}
      </div>

      <div
        className="container sm:container md:container lg:container  
      xl:container 2xl:container mx-auto  ">
        <div className="w-full  items-start  hidden md:flex  justify-between md:p-24 md:gap-2 lg:p-20 xl:p-8 ">
          <div className="first">
            <h2 className=" lg:text-xl  xl:text-3xl  xl:font-normal 2xl:font-extrabold text-gray-100  ">
              HDK.IO
            </h2>
            <p className=" md:max-w[150px] lg:max-w-[250px] p-0 xl:flex xl:max-w-xl hidden ">

              Greetings! I'm {USER}, a passionate web developer with a love
              for crafting digital experiences that leave a lasting impression.
              With a background in web development and a keen eye for design,
              I'm dedicated to transforming ideas into interactive,
              user-friendly websites.
            </p>
            {/* <h2 className="text-lg">HDK.IO</h2> */}
            <p className="max-w-xs p-0 sm:hidden xl:flex ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Blanditiis voluptatibus quam mollitia, recusandae facilis, quaerat
              omnis fuga tempore temporibus quos quidem veritatis libero
              expedita, facere velit fugit voluptate possimus labore?
            </p>
          </div>
          <div className="second">
            <h2 className="text-xl font-extrabold text-gray-100 ">
              Navigation
            </h2>
            <ul>
               <li><a href="/">Home</a></li>
               <li><a href="/blog">Blog</a></li>
               <li><a href="/portfolio">PortFolio</a></li>
               <li><a href="/page">Page</a></li>
               <li><a href="/plans">Plans</a></li>
               <li><a href="/404">Error</a></li>
               <li><a href="/service">Service</a></li>
               <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div className="thrid">
            <h2 className="text-xl font-extrabold text-gray-100 information">
              Information
            </h2>
            <div>
              <h3>+91 7046478268</h3>
              <h3>hardikbhamamr808@gmail.con</h3>
              <h3>861, Gandhinager Sector 27 382027 Gujarat</h3>
            </div>
          </div>
          <div className="forth">
            <h2 className="text-xl font-extrabold text-gray-100 information">
              Help & Details
            </h2>
            <div>
              <h3>hey tehre how are</h3>
              <h3>how that can ve ee</h3>
              <h3>boy lay esewuisee mj</h3>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center pt-7 pb-2">
          <p className="text-lg">
            Copyright &copy; 2023 All rights reversed | HDK.IO is made with by{" "}
            <span className="text-blue-800 font-semibold ">Hardik Bhammar</span>
          </p>
        </div>
        <div className="flex items-center justify-center gap-5 w-full p-4">
          <span>
            <BsFacebook color="blue" className="w-8 cursor-pointer h-8 " />{" "}
          </span>
          <span>
            <BsInstagram color="blue" className="w-8 cursor-pointer h-8" />
          </span>
          <span>
            <FaXTwitter color="blue" className="w-8 cursor-pointer h-8" />
          </span>
          <span>
            <BsLinkedin color="blue" className="w-8 cursor-pointer h-8" />
          </span>
          <span>
            <BsDribbble color="blue" className="w-8 cursor-pointer h-8" />
          </span>
        </div>
        <div>
          <span className="bg-accent absolute left-0 bottom-[-.75rem] h-6 w-1/2"></span>
        </div>
      </div>
      {/* Bottom Bar Wrap */}
    </div>
  );
};

export default BottomBar;
