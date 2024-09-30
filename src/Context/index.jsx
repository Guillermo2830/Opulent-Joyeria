import { createContext, useState } from "react";

//provedor del contexto
export const ShoppingCartContext = createContext()


const products = [
    {
      id:1,
      name: "Anillo Diamante",
      category: "Anillos",
      price: 450000,
      image: '/Opulent-Joyeria/images/anillos/anillo-diamante.webp',
      description: "Anillo de diamante en oro Blanco, con acabados italianos, con un diamante en la parte superior de 30gr."
    },
    {
      id:2,
      name: "Anillo",
      category: "Anillos",
      price: 250000,
      image: '/Opulent-Joyeria/images/anillos/anillos.jpg',
      description: "Anillo de diamante en oro Blanco, con acabados italianos, con un diamante en la parte superior."
    },
    {
      id:3,
      name: "Anillo",
      category: "Anillos",
      price: 250000,
      image: '/Opulent-Joyeria/images/anillos/anillos.jpg',
      description: "Anillo de diamante en oro Blanco, con acabados italianos, con un diamante en la parte superior."
    },
    {
      id:4,
      name: "Argolla Oro Ita",
      category: "Argollas",
      price: 200000,
      image: '/Opulent-Joyeria/images/argollas/argolla-1.jpg',
      description: "Anillo con relieve rectangular, con detalles en oro blanco."
    },
    {
      id:5,
      name: "Argolla Gucci",
      category: "Argollas",
      price: 280000,
      image: '/Opulent-Joyeria/images/argollas/argolla-2.jpg',
      description: "Argollas con toque en espiral, reluciendo el perfecto estilo italiano Gucci."
    },
    {
      id:6,
      name: "Argolla Real",
      category: "Argollas",
      price: 300000,
      image: '/Opulent-Joyeria/images/argollas/argolla-3.jpg',
      description: "Argolla con grabado a gusto, con detalles en Oro blanco con incrustaciones de diamante."
    },
    {
      id:7,
      name: "Argolla Channel",
      category: "Argollas",
      price: 250000,
      image: '/Opulent-Joyeria/images/argollas/argolla-4.jpg',
      description: "Argollas con doble de datalle en oro, uno en oro y otro en oro blanco. Mostrando la pureza de la marca Channel."
    },
    {
      id:8,
      name: "Argolla Diamantada",
      category: "Argollas",
      price: 350000,
      image: '/Opulent-Joyeria/images/argollas/argolla-5.jpg',
      description: "Argolla diamantada en la parte superior, con un Diamante de 3.5gr."
    },
    {
      id:9,
      name: "Argolla Gucci",
      category: "Argollas",
      price: 300000,
      image: '/Opulent-Joyeria/images/argollas/argolla-6.jpg',
      description: "Argolla con acabados en Oro blanco, simbolo de simplicidad y exclusividad Italiana."
    },
    {
      id:10,
      name: "Cadena Virgen",
      category: "Cadenas",
      price: 350000,
      image: '/Opulent-Joyeria/images/cadenas/cadena-cristo-2.jpg',
      description: "Cadena con retrato de la Virgen en Oro, perfecta para brindar un hermoso recuerdo a la madre de Jesus."
    },
    {
      id:11,
      name: "Cadena Jesucristo",
      category: "Cadenas",
      price: 250000,
      image: '/Opulent-Joyeria/images/cadenas/cadena-cristo.jpg',
      description: "Cadena con retrato de Jesucristo en Oro, con un mallado en toda la cadena superior."
    },
    {
      id:12,
      name: "Cadena Rolex",
      category: "Cadenas",
      price: 400000,
      image: '/Opulent-Joyeria/images/cadenas/cadena-lx.jpg',
      description: "Cadena con emblema Rolex totalmente en Oro."
    },
    {
      id:13,
      name: "Cadena Rolex Diamantada",
      category: "Cadenas",
      price: 250000,
      image: '/Opulent-Joyeria/images/cadenas/cadena-rolex.jpg',
      description: "Cadena con emblema Rolex Diamantada completamente, luce exclusivo y lujoso."
    },
    {
      id:14,
      name: "Rosario Oro Italiano",
      category: "Cadenas",
      price: 500000,
      image: '/Opulent-Joyeria/images/cadenas/rosario-2.jpg',
      description: "Cadena de rosario, compuesta totalmente de Oro y Oro blanco."
    },
    {
      id:15,
      name: "Rosario Oro y Plata",
      category: "Cadenas",
      price: 250000,
      image: '/Opulent-Joyeria/images/cadenas/rosario-3.jpg',
      description: "Rosario con perlas en Oro y Oro Blanco alrededor de todo el rosario."
    },
    {
      id:16,
      name: "Rosario Oro",
      category: "Cadenas",
      price: 250000,
      image: '/Opulent-Joyeria/images/cadenas/rosario.jpg',
      description: "Rosario en Oro en toda su superfice, con retrato de jesucristo."
    },
    {
      id:17,
      name: "Esclava Oro",
      category: "Esclavas",
      price: 250000,
      image: '/Opulent-Joyeria/images/esclavas/esclava-1.jpg',
      description: "Esclava en Oro con relieve de escamas en toda su superficie."
    },
    {
      id:18,
      name: "Esclava Gucci",
      category: "Esclavas",
      price: 250000,
      image: '/Opulent-Joyeria/images/esclavas/esclava-2.jpg',
      description: "Esclava Gucci con Oro en totalidad."
    },
    {
      id:19,
      name: "Esclava Rolex",
      category: "Esclavas",
      price: 250000,
      image: '/Opulent-Joyeria/images/esclavas/esclava-3.jpg',
      description: "Esclava rolex con Oro en su totalidad."
    },
    {
      id:20,
      name: "Esclava Oro y Plata",
      category: "Esclavas",
      price: 250000,
      image: '/Opulent-Joyeria/images/esclavas/esclava-4.jpg',
      description: "Esclava adornada con Oro y Oro blanco dandole un diseño exclusivo y lujoso a tu muñeca."
    },
    {
      id:21,
      name: "Esclava Diamantada",
      category: "Esclavas",
      price: 250000,
      image: '/Opulent-Joyeria/images/esclavas/esclava-5.jpg',
      description: "Esclava dimantada en toda su superficie, con un diseño ovalado en todas sus intersecciones."
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