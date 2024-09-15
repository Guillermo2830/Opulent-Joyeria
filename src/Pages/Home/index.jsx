import React, { useState } from "react";
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"


const products = [
  {
    id:1,
    name: "Anillo Diamante",
    category: "Anillos",
    price: 450000,
    image: '/images/anillos/anillo-diamante.webp',
  },
  {
    id:2,
    name: "Anillo",
    category: "Anillos",
    price: 250000,
    image: '/images/anillos/anillos.jpg',
  },
  {
    id:3,
    name: "Anillo",
    category: "Anillos",
    price: 250000,
    image: '/images/anillos/anillos.jpg',
  },
  {
    id:4,
    name: "Argolla Oro Ita",
    category: "Argollas",
    price: 200000,
    image: '/images/argollas/argolla-1.jpg',
  },
  {
    id:5,
    name: "Argolla Gucci",
    category: "Argollas",
    price: 280000,
    image: '/images/argollas/argolla-2.jpg',
  },
  {
    id:6,
    name: "Argolla Real",
    category: "Argollas",
    price: 300000,
    image: '/images/argollas/argolla-3.jpg',
  },
  {
    id:7,
    name: "Argolla Channel",
    category: "Argollas",
    price: 250000,
    image: '/images/argollas/argolla-4.jpg',
  },
  {
    id:8,
    name: "Argolla Diamantada",
    category: "Argollas",
    price: 350000,
    image: '/images/argollas/argolla-5.jpg',
  },
  {
    id:9,
    name: "Argolla Gucci",
    category: "Argollas",
    price: 300000,
    image: '/images/argollas/argolla-6.jpg',
  },
  {
    id:10,
    name: "Cadena Virgen",
    category: "Cadenas",
    price: 350000,
    image: '/images/cadenas/cadena-cristo-2.jpg',
  },
  {
    id:11,
    name: "Cadena Jesucristo",
    category: "Cadenas",
    price: 250000,
    image: '/images/cadenas/cadena-cristo.jpg',
  },
  {
    id:12,
    name: "Cadena Rolex",
    category: "Cadenas",
    price: 400000,
    image: '/images/cadenas/cadena-lx.jpg',
  },
  {
    id:13,
    name: "Cadena Rolex Diamantada",
    category: "Cadenas",
    price: 250000,
    image: '/images/cadenas/cadena-rolex.jpg',
  },
  {
    id:14,
    name: "Rosario Oro Italiano",
    category: "Cadenas",
    price: 500000,
    image: '/images/cadenas/rosario-2.jpg',
  },
  {
    id:15,
    name: "Rosario Oro y Plata",
    category: "Cadenas",
    price: 250000,
    image: '/images/cadenas/rosario-3.jpg',
  },
  {
    id:16,
    name: "Rosario Oro",
    category: "Cadenas",
    price: 250000,
    image: '/images/cadenas/rosario.jpg',
  },
  {
    id:17,
    name: "Esclava Oro",
    category: "Esclavas",
    price: 250000,
    image: '/images/esclavas/esclava-1.jpg',
  },
  {
    id:18,
    name: "Esclava Gucci",
    category: "Esclavas",
    price: 250000,
    image: '/images/esclavas/esclava-2.jpg',
  },
  {
    id:19,
    name: "Esclava Rolex",
    category: "Esclavas",
    price: 250000,
    image: '/images/esclavas/esclava-3.jpg',
  },
  {
    id:20,
    name: "Esclava Oro y Plata",
    category: "Esclavas",
    price: 250000,
    image: '/images/esclavas/esclava-4.jpg',
  },
  {
    id:21,
    name: "Esclava Diamantada",
    category: "Esclavas",
    price: 250000,
    image: '/images/esclavas/esclava-5.jpg',
  },
]

const Home = () => {
    const [items, setItems] = useState(null)
    
    return (
      <Layout>
         <div className='flex justify-center w-80 items-center relative mb-4 '>
            <h1 className='font-medium text-xl'>Productos exclusivos</h1>
        </div>
        <div className="grid gap-7 grid-cols-4 w-full max-w-screen-lg">
        {products.map((product) => {
          const formattedPrice = product.price.toLocaleString("es-CO", {
            style: "currency",
            currency: "COP",
          });
          return (
           <Card
          key={product.id}
          name={product.name}
          category={product.category}
          price={formattedPrice}
          image={product.image}
          />
          ); 
        })}
        </div>
      </Layout>
    )
  }
  
  export default Home