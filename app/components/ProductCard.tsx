"use client"

import Image from "next/image"
import Link from "next/link"
import { Product } from "../types/index"
import { useCart } from "../context/CartContext"

interface Props {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useCart()

  return (
    <div className="product-card">

      <div className="product-image-container">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="product-image"
        />
      </div>

      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3 className="product-name">{product.name}</h3>
        <p className="product-price">
          ${product.price.toLocaleString("es-MX")} MXN
        </p>
      </div>

      <div className="product-buttons">
        <button
          onClick={() => addToCart(product)}
          className="product-add-button"
        >
          Agregar al carrito
        </button>
        <Link href={`/product/${product.id}`} className="product-button">
          Ver detalle
        </Link>
      </div>

    </div>
  )
}