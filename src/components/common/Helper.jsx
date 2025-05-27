import Compliance from "../Compliance";
import TrustCentre from "../TrustCentre";
import ellipse from "/Users/ASUS/Desktop/security-center/src/assets/images/svg/ellipse-privacy.svg";
import logo1 from "/Users/ASUS/Desktop/security-center/src/assets/images/png/aicpca-logo.png";
import logo2 from "/Users/ASUS/Desktop/security-center/src/assets/images/png/iso-logo.png";
import logo3 from "/Users/ASUS/Desktop/security-center/src/assets/images/png/gdpr-logo.png";
import logo4 from "/Users/ASUS/Desktop/security-center/src/assets/images/png/ccpa-logo.png";
import logo5 from "/Users/ASUS/Desktop/security-center/src/assets/images/png/hipaa-logo.png";
import logo6 from "/Users/ASUS/Desktop/security-center/src/assets/images/png/eap-logo.png";
export const Control_List = [
  {
    img: ellipse,
    id: "12",
    description: "Number of Controls",
  },
  {
    img: ellipse,
    id: "15",
    description: "Resources",
  },
  {
    img: ellipse,
    id: "20",
    description: "Certifications",
  },
  {
    img: ellipse,
    id: "17",
    description: "Subprocessors",
  },
];


export const Tabs = [
    {
        id: 'Compliance',
        component:<Compliance/>
    },
    {
        id: 'Trust Controls',
        component:<TrustCentre/>
    },
    {
        id: 'Resources',
        component:<Compliance/>
    },
    {
        id: 'Subprocessors',
        component:<TrustCentre/>
    },
    {
        id: 'Updates & FAQs',
        component:<Compliance/>
    }
];
export const Globally_Logo = [
    { img: logo1 },
    { img: logo2 },
    { img: logo3 },
    { img: logo4 },
    { img: logo5 },
    { img: logo6 },
];
