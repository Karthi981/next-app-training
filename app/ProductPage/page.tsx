"use client";

import { useAtom } from "jotai";
import CartNavBar from "../CartPage/components/CartNavbar";
import { cartAtom } from "../Store";
import Link from "next/link";

const Product = () => {
  const [cart, setCart] = useAtom(cartAtom);

  return (
    <>
      <CartNavBar />
      <h1>Product XY</h1>
      <p>
        <button
          onClick={() => {
            setCart(
              cart.id == 0
                ? { ...cart, quantity: cart.quantity + 1 }
                : { id: 123, quantity: cart.quantity + 1 }
            );
          }}
        >
          Add to cart
        </button>
      </p>
    </>
  );
};
export default Product;
