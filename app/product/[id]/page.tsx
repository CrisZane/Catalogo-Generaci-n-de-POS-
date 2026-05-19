import Image from "next/image"
import Link from "next/link"
import { products } from "../../data/products"
import { notFound } from "next/navigation"

interface Props {
  params: Promise<{ id: string }>
}

export default async function ProductPage({ params }: Props) {
  const { id } = await params
  const product = products.find((p) => p.id === Number(id))

  if (!product) notFound()

  return (
    <main className="detail-container">

      <Link href="/" className="detail-back">
        Regresar al catalogo
      </Link>

      <div className="detail-card">

        <div className="detail-image-container">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="detail-image"
          />
        </div>

        <div className="detail-info">
          <span className="detail-category">{product.category}</span>
          <h1 className="detail-name">{product.name}</h1>
          <p className="detail-price">
            ${product.price.toLocaleString("es-MX")} MXN
          </p>
          <p className="detail-description">{product.description}</p>
        </div>

      </div>

    </main>
  )
}