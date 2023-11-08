"use client";
import Link from "next/link";
import { useAtom } from "jotai";
import { cartAtom } from "@/app/Store";

const links = [
  { path: "/CartPage", title: "Home" },
  { path: "/ProductPage", title: "Product" },
  { path: "/cart", title: "Cart" },
];
const CartNavBar = () => {
  const [cart] = useAtom(cartAtom);
  return (
    <ul>
      {links.map((link, index) => (
        <li key={index}>
          <Link href={link.path}>{link.title}</Link>
        </li>
      ))}
      <li>{cart.quantity} item(s) in cart</li>
    </ul>
  );
};
export default CartNavBar;
