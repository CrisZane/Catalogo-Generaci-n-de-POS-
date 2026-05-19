import type { Metadata } from "next"
import "./globals.css"
import { CartProvider } from "./context/CartContext"
import CartButton from "./components/CartButton"

export const metadata: Metadata = {
  title: "Mi Tienda",
  description: "Punto de venta",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <CartProvider>
          {children}
          <CartButton />
        </CartProvider>
      </body>
    </html>
  )
}