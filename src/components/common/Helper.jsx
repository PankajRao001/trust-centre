import Compliance from "../Compliance";
import TrustCentre from "../TrustCentre";
import ellipse from "/Users/ASUS/Desktop/security-center/src/assets/images/svg/ellipse-privacy.svg";
import logo1 from "/Users/ASUS/Desktop/security-center/src/assets/images/png/aicpca-logo.png";
import logo2 from "/Users/ASUS/Desktop/security-center/src/assets/images/png/iso-logo.png";
import logo3 from "/Users/ASUS/Desktop/security-center/src/assets/images/png/gdpr-logo.png";
import logo4 from "/Users/ASUS/Desktop/security-center/src/assets/images/png/ccpa-logo.png";
import logo5 from "/Users/ASUS/Desktop/security-center/src/assets/images/png/hipaa-logo.png";
import logo6 from "/Users/ASUS/Desktop/security-center/src/assets/images/png/eap-logo.png";
import logoaws from "/Users/ASUS/Desktop/security-center/src/assets/images/png/aws-amazon.png";
import logoauth from "/Users/ASUS/Desktop/security-center/src/assets/images/png/auth.png";
import logomixpanel from "/Users/ASUS/Desktop/security-center/src/assets/images/png/mixpanel.png";
import logomicrosoft from "/Users/ASUS/Desktop/security-center/src/assets/images/png/microsoft.png";
import soc from "/Users/ASUS/Desktop/security-center/src/assets/images/png/soc.png";
import cookie from "/Users/ASUS/Desktop/security-center/src/assets/images/png/cookie.png";
import kms from "/Users/ASUS/Desktop/security-center/src/assets/images/png/kms.png";
import bigdata from "/Users/ASUS/Desktop/security-center/src/assets/images/png/big-data.png";
import secure from "/Users/ASUS/Desktop/security-center/src/assets/images/png/secure.png";
import status from "/Users/ASUS/Desktop/security-center/src/assets/images/png/status.png";
import post from "/Users/ASUS/Desktop/security-center/src/assets/images/png/letter-post.png";
import kivra from "/Users/ASUS/Desktop/security-center/src/assets/images/png/kivra-logo.png";
import atrate from "/Users/ASUS/Desktop/security-center/src/assets/images/png/atrate.png";
import {
  Aiethics,
  ArichituctureIcon,
  DataFlow,
  DiamondIcon,
  DownArrowIcon,
  RiskPrivacy,
  SecurityWhitepaperIcon,
  SettingIcon,
  SoundIcon,
  TouchIcon,
  UpArrowIcon,
} from "./icons";
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

export const Trusted_List = [
  {
    img: logoaws,
    title: "Amazon AWS",
    description:
      "Provides scalable storage, computing power, and hosting solutions.",
    market: "US/EU",
    provide: "Storage",
    infra: "Cloud Infrastructure",
  },
  {
    img: logoauth,
    title: "Auth0",
    description:
      "Handles secure login systems, user authentication, single sign-on (SSO).",
    market: "Global",
    provide: "Login Data",
    infra: "Authentication & Identity",
  },
  {
    img: logomixpanel,
    title: "Mixpanel",
    description:
      "Offers insights into user behavior by tracking events, user flows.",
    market: "US",
    provide: "Anonymized Usage Data",
    infra: "Analytics",
  },
  {
    img: logomicrosoft,
    title: "Microsoft",
    description:
      "Provides scalable storage, computing power, and hosting solutions",
    market: "US/EU",
    provide: "Storage",
    infra: "Cloud Infrastructure",
  },
  {
    img: logomicrosoft,
    title: "Microsoft",
    description:
      "Provides scalable storage, computing power, and hosting solutions",
    market: "US/EU",
    provide: "Storage",
    infra: "Cloud Infrastructure",
  },
  {
    img: logomicrosoft,
    title: "Microsoft",
    description:
      "Provides scalable storage, computing power, and hosting solutions",
    market: "US/EU",
    provide: "Storage",
    infra: "Cloud Infrastructure",
  },
  {
    img: logomicrosoft,
    title: "Microsoft",
    description:
      "Provides scalable storage, computing power, and hosting solutions",
    market: "US/EU",
    provide: "Storage",
    infra: "Cloud Infrastructure",
  },
  {
    img: logomicrosoft,
    title: "Microsoft",
    description:
      "Provides scalable storage, computing power, and hosting solutions",
    market: "US/EU",
    provide: "Storage",
    infra: "Cloud Infrastructure",
  },
];
export const Whatnew_List = [
  {
    img: soc,
    title: "SOC 2 Type II Audit Completed",
    description:
      "Successfully completed an external SOC 2 Type II audit, demonstrating our continued commitment to data security and compliance.",
    date: "April 2025",
  },
  {
    img: cookie,
    title: "Cookie Control Module Released",
    description:
      "Launched a new cookie control module, giving users enhanced privacy and control over their data preferences.",
    date: "March 2025",
  },
  {
    img: kms,
    title: "KMS keys FIPS‑3 HSMs",
    description:
      "Launched a new cookie control module, giving users enhanced privacy and control over their data preferences.",
    date: "March 2025",
  },
  {
    img: bigdata,
    title: "EU‑only data residency added",
    description:
      "Launched a new cookie control module, giving users enhanced privacy and control over their data preferences.",
    date: "March 2025",
  },
  {
    img: secure,
    title: "Secure‑coding complete",
    description:
      "Launched a new cookie control module, giving users enhanced privacy and control over their data preferences.",
    date: "March 2025",
  },
  {
    img: status,
    title: "Status page, 90‑day uptime",
    description:
      "Launched a new cookie control module, giving users enhanced privacy and control over their data preferences.",
    date: "March 2025",
  },
];
export const What_Faqs_List = [
  {
    que: "Q.1",
    title: "How do you secure personal data?",
    description:
      "We use AES-256 encryption, secure access layers, and continuous monitoring.",
    downarrow: <DownArrowIcon />,
    uparrow: <UpArrowIcon />,
  },
  {
    que: "Q.2",
    title: "Can I delete my personal data?",
    description:
      "We use AES-256 encryption, secure access layers, and continuous monitoring.",
    downarrow: <DownArrowIcon />,
    uparrow: <UpArrowIcon />,
  },
  {
    que: "Q.3",
    title: "Where is data stored?",
    description:
      "We use AES-256 encryption, secure access layers, and continuous monitoring.",
    downarrow: <DownArrowIcon />,
    uparrow: <UpArrowIcon />,
  },
  {
    que: "Q.4",
    title: "Do you use AI in user-facing decisions?",
    description:
      "We use AES-256 encryption, secure access layers, and continuous monitoring.",
    downarrow: <DownArrowIcon />,
    uparrow: <UpArrowIcon />,
  },
];

export const Destribution_List = [
  {
    img: atrate,
    title: "Email ",
    filer: "3 Filer",
  },
  {
    img: post,
    title: "Post ",
    filer: "2 Filer",
  },
  {
    img: kivra,
    title: "Digital brevlåda ",
    filer: "3 Filer",
  },
];
