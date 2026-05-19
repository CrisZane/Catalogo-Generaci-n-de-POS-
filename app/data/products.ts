import { Product } from "../types/index"
export const products: Product[] = [

  {
    id: 1,
    name: "Laptop Dell Inspiron",
    price: 1299,
    category: "Computadoras",
    image: "/imagenes/Laptop Dell Inspiron.jpeg",
    description: "Laptop Dell Inspiron 15 pulgadas, 8GB RAM, 256GB SSD"
  },
  {
    id: 2,
    name: "Mouse Gamer Logitech",
    price: 349,
    category: "Accesorios",
    image: "/imagenes/Mouse Gamer Logitech.jpg",
    description: "Mouse inalámbrico con receptor USB, 3 botones"
  },
  {
    id: 3,
    name: "Teclado gamer Redragon",
    price: 899,
    category: "Accesorios",
    image: "/imagenes/Teclado gamer Redragon.jpeg",
    description: "Teclado mecánico RGB, switches azules, español"
  },
  {
    id: 4,
    name: "Monitor 24 pulgadas",
    price: 4599,
    category: "Computadoras",
    image: "/imagenes/Monitor 24 pulgadas.jpg",
    description: "Monitor Full HD 1080p, 75Hz, panel IPS"
  },
  {
    id: 5,
    name: "Audífonos Bluetooth",
    price: 699,
    category: "Audio",
    image: "/imagenes/Audífonos Bluetooth.jpg",
    description: "Audífonos over-ear, 20 horas de batería"
  },
  {
    id: 6,
    name: "Bocina Portátil",
    price: 549,
    category: "Audio",
    image: "/imagenes/Bocina Portátil.jpeg",
    description: "Bocina Bluetooth resistente al agua, 10 horas"
  }
]

export const categories: string[] = [
  "Todos",
  ...Array.from(new Set(products.map((p) => p.category)))
]