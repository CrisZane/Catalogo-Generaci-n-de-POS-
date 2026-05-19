"use client"

import Link from "next/link"
import { useCart } from "../context/CartContext"

export default function CartButton() {
  const { totalItems } = useCart()

  return (
    <Link href="/cart" className="cart-button">
      Carrito
      {totalItems > 0 && (
        <span className="cart-counter">{totalItems}</span>
      )}
    </Link>
  )
}