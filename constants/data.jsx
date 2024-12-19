import { PiMedalFill } from "react-icons/pi";
import { RiTeamFill } from "react-icons/ri";
import { FaShieldAlt } from "react-icons/fa";
import { FaWarehouse } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { RiGlobalFill } from "react-icons/ri";

const heroSection = [
  {
    id: "110",
    src: "/assets/images/banner_1.jpg",
  },
  {
    id: "111",
    src: "/assets/images/banner_2.jpg",
  },
  {
    id: "112",
    src: "/assets/images/banner_3.jpg",
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
    title: "",
    image:
      "https://images.unsplash.com/photo-1514203043587-ee4a5149f470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "",
    image:
      "https://images.unsplash.com/photo-1514203043587-ee4a5149f470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "",
    image:
      "https://images.unsplash.com/photo-1514203043587-ee4a5149f470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "",
    image:
      "https://images.unsplash.com/photo-1514203043587-ee4a5149f470?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const topProducts = [
  { title: "Air Dryer Filter", image: "/assets/images/air_dryer_filter.jpg" },
  {
    title: "Gear Selector 127 x 157",
    image: "/assets/images/gear_selector_127_x_157.jpg",
  },
  {
    title: "Head Lamp Assembly",
    image: "/assets/images/head_lamp_assembly.jpg",
  },
  { title: "Master Cylinder", image: "/assets/images/master_cylinder.jpg" },
  { title: "Slave Cylinder", image: "/assets/images/slave_cylinder.jpg" },
  {
    title: "Steering Oil Reserve Bottel",
    image: "/assets/images/steering_oil_reserve_bottel.jpg",
  },
  {
    title: "Starter Solonoid Coll 24V",
    image: "/assets/images/starter_solonoid_coll_24v.jpg",
  },
  { title: "Suspension Rubber", image: "/assets/images/suspension_rubber.jpg" },
];
export { chooseUs, ourProducts, heroSection, topProducts };
