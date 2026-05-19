"use client"

import Link from "next/link"
import Image from "next/image"
import { useCart } from "../context/CartContext"

export default function CartPage() {
const { items, removeFromCart, totalPrice } = useCart()
  if (items.length === 0) {
    return (
      <main className="cart-container">
        <h1 className="cart-title">Carrito de compras</h1>
        <p className="cart-empty">No hay productos en el carrito.</p>
        <Link href="/" className="cart-back">Regresar al catalogo</Link>
      </main>
    )
  }

  return (
    <main className="cart-container">

      <h1 className="cart-title">Carrito de compras</h1>

      <div className="cart-list">
        {items.map((item) => (
          <div key={item.product.id} className="cart-item">

            <div className="cart-item-image-container">
              <Image
                src={item.product.image}
                alt={item.product.name}
                fill
                className="cart-item-image"
              />
            </div>

            <div className="cart-item-info">
              <p className="cart-item-name">{item.product.name}</p>
              <p className="cart-item-quantity">Cantidad: {item.quantity}</p>
              <p className="cart-item-price">
                ${(item.product.price * item.quantity).toLocaleString("es-MX")} MXN
              </p>
            </div>

            <button
              onClick={() => removeFromCart(item.product.id)}
              className="cart-item-remove"
            >
              Quitar
            </button>

          </div>
        ))}
      </div>

      <div className="cart-summary">
        <p className="cart-total">
          Total: ${totalPrice.toLocaleString("es-MX")} MXN
        </p>
      <div className="cart-actions">
  <button onClick={clearCart} className="cart-clear">
    Vaciar carrito
  </button>
  <Link href="/" className="cart-back">
    Regresar al catalogo
  </Link>
</div>
      </div>

    </main>
  )
}