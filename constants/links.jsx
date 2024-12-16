import { FaShoppingBag } from "react-icons/fa";

const navbarLinks = {
  main: [
    { label: "Home", link: "/" },
    { label: "About Us", link: "#about" },
    { label: "Contact", link: "#contact" },
    { label: "Products", link: "#products" },
    { label: "Service", link: "#service" },
  ],
  menu: [
    { label: "Profile", link: "/profile" },
    { label: "Orders", link: "/orders" },
  ],
};

const navDrawerLinks = () => {
  return [
    { label: "Home", link: "/" },
    { label: "About Us", link: "#about" },
    { label: "Contact", link: "#contact" },
    { label: "Products", link: "#products" },
    { label: "Service", link: "#service" },
  ];
};
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://store.com"
    : "http://localhost:3000";

export { navbarLinks, baseUrl, navDrawerLinks };
