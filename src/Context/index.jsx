import { createContext, useState } from "react";

//provedor del contexto
export const ShoppingCartContext = createContext()


const products = [
    {
      id:1,
      name: "Anillo Diamante",
      category: "Anillos",
      price: 450000,
      image: '/images/anillos/anillo-diamante.webp',
      description: "Anillo de diamante en oro Blanco, con acabados italianos, con un diamante en la parte superior de 30gr"
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

export const ShoppingCartProvider = ({children}) => {
    // contador de productos
    const [count, setCount] = useState(0)

    //Detalles
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Detalles del producto seleccionado
    const [productToShow, setProductToShow] = useState(null)

    // Productos del carrito agregados
    const [cartProducts, setCartProducts] = useState([])

    // Detalles de productos agregados al carrito
    const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = useState(false)
    const openChekOutSideMenu = () => setIsCheckOutSideMenuOpen(true)
    const closeChekOutSideMenu = () => setIsCheckOutSideMenuOpen(false)

    const addProductToCart = (product) => {
        setCartProducts([...cartProducts, product]);
      };

    // Ordenes en el carrito
    const [order, setOrder] = useState([])

    // obtener productos
    const [items, setItems] = useState(products)

    
      
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            setIsProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckOutSideMenuOpen,
            setIsCheckOutSideMenuOpen,
            openChekOutSideMenu,
            closeChekOutSideMenu,
            addProductToCart,
            order,
            setOrder,
            items,
            setItems
            

        }}>
            {children}
        </ShoppingCartContext.Provider>
        
    )
}