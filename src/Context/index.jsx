import { createContext, useState } from "react";
//provedor del contexto
export const ShoppingCartContext = createContext()

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
            addProductToCart

        }}>
            {children}
        </ShoppingCartContext.Provider>
        
    )
}