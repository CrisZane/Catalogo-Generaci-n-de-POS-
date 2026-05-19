"use client"

import { useState } from "react"
import { products, categories } from "./data/products"
import ProductCard from "./components/ProductCard"
import CategoryFilter from "./components/CategoryFilter"

export default function Home() {

  const [selectedCategory, setSelectedCategory] = useState("Todos")

  const filteredProducts = selectedCategory === "Todos"
    ? products
    : products.filter((p) => p.category === selectedCategory)

  return (
    <main className="main-container">

      <header className="store-header">
        <h1 className="store-title">Mi Tienda</h1>
      </header>

      <CategoryFilter
        categories={categories}
        selected={selectedCategory}
        onSelect={setSelectedCategory}
      />

      <p className="results-count">
        {filteredProducts.length} producto{filteredProducts.length !== 1 ? "s" : ""} encontrado{filteredProducts.length !== 1 ? "s" : ""}
      </p>

      <div className="products-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </main>
  )
}