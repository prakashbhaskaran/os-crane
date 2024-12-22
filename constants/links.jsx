import { FaShoppingBag } from "react-icons/fa";

const navbarLinks = {
  main: [
    { label: "Home", link: "/", id: "home" },
    { label: "Products", link: "/products", id: "products" },
    { label: "About Us", link: "/about", id: "about" },
    { label: "Contact", link: "/contact", id: "contact" },
  ],
  extra: [{ label: "Enquire", link: "/enquire", id: "enquire" }],
};

const navDrawerLinks = () => {
  return [
    { label: "Home", link: "/", id: "home" },
    { label: "Products", link: "/products", id: "products" },
    { label: "About Us", link: "/about", id: "about" },
    { label: "Contact", link: "/contact", id: "contact" },
  ];
};
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://oscraneparts.com"
    : "http://localhost:3000";

export { navbarLinks, baseUrl, navDrawerLinks };
