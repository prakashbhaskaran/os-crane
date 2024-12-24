import { PiMedalFill } from "react-icons/pi";
import { RiTeamFill, RiGlobalFill } from "react-icons/ri";
import { FaShieldAlt, FaWhatsapp, FaMobileAlt } from "react-icons/fa";
import { FaWarehouse, FaLocationDot } from "react-icons/fa6";
import { MdEmail, MdOutlineTouchApp } from "react-icons/md";

const heroSection = [
  {
    id: "110",
    src: "https://res.cloudinary.com/dbzjtqvg5/image/upload/v1734682257/kfju8cqawqlrpsbpw3m3.jpg",
  },
  {
    id: "111",
    src: "https://res.cloudinary.com/dbzjtqvg5/image/upload/v1734682259/hgvw5y6jcyzpvbzb4zj3.jpg",
  },
  {
    id: "112",
    src: "https://res.cloudinary.com/dbzjtqvg5/image/upload/v1734682255/jb16ikt0zu7eytxzz1py.jpg",
  },
];

const chooseUs = [
  {
    title: "Experience",
    list: [
      {
        description:
          "15 years experience dealing with heavy machinery spare parts.",
      },
      {
        description: "Rich experience in handling export business.",
      },
    ],
    icon: <RiGlobalFill />,
  },
  {
    title: "Team",
    list: [
      { description: "A young and vigorous team." },
      { description: "Honest, Sincere and Fast reacting." },
    ],
    icon: <RiTeamFill />,
  },
  {
    title: "Quality",
    list: [
      { description: "We carry genuine spare with low cost." },
      { description: "Good quality replacement parts also available." },
    ],
    icon: <PiMedalFill />,
  },
  {
    title: "Location",
    list: [
      {
        description:
          "No. 78, Verkadu Village Bypass, Gummudipoondi, Chennai - 601202.",
      },
    ],
    icon: <FaLocationDot />,
  },
  {
    title: "Stock",
    list: [
      { description: "We keep large stock of easy broken parts." },
      { description: "Large warehouse." },
    ],
    icon: <FaWarehouse />,
  },
  {
    title: "Warranty",
    list: [
      { description: "Every part quality is checked before shipment." },
      { description: "Parts supplied with 3 months warranty." },
    ],
    icon: <FaShieldAlt />,
  },
];

const ourProducts = [
  {
    title: "Mobile Crane",
    image:
      "https://res.cloudinary.com/dbzjtqvg5/image/upload/v1734948999/Our%20Products/apqub1uhqej4i1cj218q.jpg",
  },
  {
    title: "Excavator",
    image:
      "https://res.cloudinary.com/dbzjtqvg5/image/upload/v1734949220/Our%20Products/vrgvhsgasn36nfgozq66.jpg",
  },

  {
    title: "Forklift",
    image:
      "https://res.cloudinary.com/dbzjtqvg5/image/upload/v1734949020/Our%20Products/iyvmpk8z5mhm5ngnbdec.jpg",
  },
  {
    title: "Construction Machinery",
    image:
      "https://res.cloudinary.com/dbzjtqvg5/image/upload/v1734949219/Our%20Products/u8znyciu26t5yg4foxzv.jpg",
  },
];

const topProducts = [
  {
    title: "Air Dryer Filter",
    image:
      "https://res.cloudinary.com/dbzjtqvg5/image/upload/v1734682247/nhietnbo8tdnabssy7l8.jpg",
  },
  {
    title: "Gear Selector 127 x 157",
    image:
      "https://res.cloudinary.com/dbzjtqvg5/image/upload/v1734682247/ppnmpfi9ja3nlqfjbcbp.jpg",
  },
  {
    title: "Head Lamp Assembly",
    image:
      "https://res.cloudinary.com/dbzjtqvg5/image/upload/v1734682248/nncuuhuy3b74hjslgf4f.jpg",
  },
  {
    title: "Master Cylinder",
    image:
      "https://res.cloudinary.com/dbzjtqvg5/image/upload/v1734682248/pq0c1xdzvt6v5xc68r7z.jpg",
  },
  {
    title: "Slave Cylinder",
    image:
      "https://res.cloudinary.com/dbzjtqvg5/image/upload/v1734682249/ihx7zwx6vwtpapjmdjhm.jpg",
  },
  {
    title: "Steering Oil Reserve Bottel",
    image:
      "https://res.cloudinary.com/dbzjtqvg5/image/upload/v1734682249/wp5mkafpsuzjce5rqscp.jpg",
  },
  {
    title: "Starter Solonoid Coll 24V",
    image:
      "https://res.cloudinary.com/dbzjtqvg5/image/upload/v1734682249/zir6i0zkdachosvjs9kp.jpg",
  },
  {
    title: "Suspension Rubber",
    image:
      "https://res.cloudinary.com/dbzjtqvg5/image/upload/v1734682247/ozzlj3weesuuk232zoak.jpg",
  },
];
const warehouse = [
  {
    img: "https://res.cloudinary.com/dbzjtqvg5/image/upload/v1734688126/warehouse/mrqkujjvdxwyvnwepmo3.jpg",
  },
  {
    img: "https://res.cloudinary.com/dbzjtqvg5/image/upload/v1734688114/warehouse/uwwirpm8snpq6ar2qaod.jpg",
  },
  {
    img: "https://res.cloudinary.com/dbzjtqvg5/image/upload/v1734687926/warehouse/slwdiqkil6ee9dwi8v19.jpg",
  },
];
const contactList = [
  {
    label: "Address",
    description:
      "No. 78, Verkadu Village Bypass, Gummudipoondi, Chennai - 601202",
    icon: <FaLocationDot size={20} />,
  },
  {
    label: "Mobile",
    description: "+91 8056220468",
    icon: <FaMobileAlt size={20} />,
  },
  {
    label: "Email",
    description: "oscraneparts20@gmail.com",
    icon: <MdEmail size={20} />,
  },
  {
    label: "WhatsApp",
    description: "918056220468",
    value: "+91 8056220468",
    icon: <FaWhatsapp size={20} />,
  },
  {
    label: "Enquire",
    description: "/enquire",
    value: "enquire",
    icon: <MdOutlineTouchApp size={20} />,
  },
];

const brands = [
  {
    name: "",
    image:
      "https://res.cloudinary.com/dbzjtqvg5/image/upload/v1734949492/brands/xymkq3zj9ohz4mywrxvb.jpg",
  },
  {
    name: "",
    image:
      "https://res.cloudinary.com/dbzjtqvg5/image/upload/v1734949492/brands/vsaj6ufjhgfluvtcrmqt.jpg",
  },
  {
    name: "",
    image:
      "https://res.cloudinary.com/dbzjtqvg5/image/upload/v1734949492/brands/wulvaik5nsqauffkd2su.png",
  },
  {
    name: "",
    image:
      "https://res.cloudinary.com/dbzjtqvg5/image/upload/v1734949492/brands/e2ej4bbdjcmobs609iqj.png",
  },
  {
    name: "",
    image:
      "https://res.cloudinary.com/dbzjtqvg5/image/upload/v1734949493/brands/su3pn558takhohjsgbor.jpg",
  },
  {
    name: "",
    image:
      "https://res.cloudinary.com/dbzjtqvg5/image/upload/v1734949493/brands/osi23ntsxcur7uq0wfgu.jpg",
  },
  {
    name: "",
    image:
      "https://res.cloudinary.com/dbzjtqvg5/image/upload/v1734949493/brands/nbv8gj7ggbxawgmdjj2n.jpg",
  },
  {
    name: "",
    image:
      "https://res.cloudinary.com/dbzjtqvg5/image/upload/v1734949493/brands/yzlghrsoovrzk4tpoxg6.jpg",
  },
];

export {
  chooseUs,
  ourProducts,
  heroSection,
  topProducts,
  warehouse,
  contactList,
  brands,
};
