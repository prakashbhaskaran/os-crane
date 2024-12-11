import { FaShoppingBag } from "react-icons/fa";

const navbarLinks = {
  main: [
    { label: "Products", link: "/products" },
    { label: "Cart", link: "/cart" },
  ],
  menu: [
    { label: "Profile", link: "/profile" },
    { label: "Orders", link: "/orders" },
  ],
};

const navDrawerLinks = () => {
  return [{ label: "PRODUCTS", link: "/products", icon: <FaShoppingBag /> }];
};
const baseUrl =
  process.env.NODE_ENV === "production"
    ? "https://store.com"
    : "http://localhost:3000";

export { navbarLinks, baseUrl, navDrawerLinks };
