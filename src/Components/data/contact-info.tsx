// import { ReactComponent as HomeIcon } from "../lib/icons/Home.svg";
// import { ReactComponent as EnvelopeIcon } from "../lib/icons/Envelope.svg";
// import { ReactComponent as PhoneIcon } from "../lib/icons/Phone.svg";
import { BsEnvelope, BsPhone } from "react-icons/bs";
import { CgHome } from "react-icons/cg";


export const conInfo = [
  {
    conIcon: <CgHome className="h-[3.4375rem] w-[3.4375rem] text-white " />

    // <HomeIcon className="h-[3.4375rem] fill-white"></HomeIcon>
    ,
    conTitle: "Gujarat:",
    conCap: "31 Gandhinager, Gujarat, India 3820228",
  },
  {
    conIcon:  <BsPhone className="h-[3.4375rem] w-[3.4375rem] text-white" />,
    // <PhoneIcon className="h-[3.4375rem] fill-white"></PhoneIcon>,
    conTitle: "Phone:",
    conCap: "+91 7046478268",
  },
  {
    conIcon:  <BsEnvelope className="h-[3.4375rem] w-[3.4375rem] text-white"/>,
    conTitle: "Email Address:",
    conCap: "hardikbhammar808@gmail.com",
  },
];
