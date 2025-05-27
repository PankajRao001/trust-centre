import Compliance from "../Compliance";
import TrustCentre from "../TrustCentre";
import ellipse from "/Users/ASUS/Desktop/security-center/src/assets/images/svg/ellipse-privacy.svg";
import logo1 from "/Users/ASUS/Desktop/security-center/src/assets/images/png/aicpca-logo.png";
import logo2 from "/Users/ASUS/Desktop/security-center/src/assets/images/png/iso-logo.png";
import logo3 from "/Users/ASUS/Desktop/security-center/src/assets/images/png/gdpr-logo.png";
import logo4 from "/Users/ASUS/Desktop/security-center/src/assets/images/png/ccpa-logo.png";
import logo5 from "/Users/ASUS/Desktop/security-center/src/assets/images/png/hipaa-logo.png";
import logo6 from "/Users/ASUS/Desktop/security-center/src/assets/images/png/eap-logo.png";
import { Aiethics, ArichituctureIcon, DataFlow, DiamondIcon, RiskPrivacy, SecurityWhitepaperIcon, SettingIcon, SoundIcon, TouchIcon } from "./icons";
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
    id: "Compliance",
    component: <Compliance />,
  },
  {
    id: "Trust Controls",
    component: <TrustCentre />,
  },
  {
    id: "Resources",
    component: <Compliance />,
  },
  {
    id: "Subprocessors",
    component: <TrustCentre />,
  },
  {
    id: "Updates & FAQs",
    component: <Compliance />,
  },
];
export const Globally_Logo = [
  { img: logo1 },
  { img: logo2 },
  { img: logo3 },
  { img: logo4 },
  { img: logo5 },
  { img: logo6 },
];
export const cardData = [
  {
    svg: <TouchIcon />,
    title: "Multi‑factor authentication required ",
    description: "Admin and privileged accounts must use FIDO2 keys.",
  },
  {
    svg: <DiamondIcon />,
    title: "Privileged bastion host enforced ",
    description: "Production networks reachable only via a hardened jump‑box.",
  },
  {
    svg: <SoundIcon />,
    title: "S3 bucket access logging enabled",
    description: "All object‑access events stream directly to the SIEM.",
  },
  {
    svg: <SettingIcon />,
    title: "Automatic patch management  ",
    description: "Critical operating‑system fixes deploy within 24 hours.",
  },
];
export const Resources_List = [
  {
    svg: <SecurityWhitepaperIcon />,
    title: "Security Whitepapers",
  },
  {
    svg: <ArichituctureIcon />,
    title: "Architecture Diagrams",
  },
  {
    svg: <DataFlow />,
    title: "Data Flow Diagrams",
  },
  {
    svg: <RiskPrivacy />,
    title: "Privacy and Risk Assessments",
  },
  {
    svg: <Aiethics />,
    title: "AI Ethics Guidelines",
  },
];