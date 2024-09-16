import { createContext, useState } from "react";
//provedor del contexto
export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({children}) => {
    // contador de productos
    const [count, setCount] = useState(0)

    //Detalles
    const [isProductDetailOpen, setIsPorductDetailOpen] = useState(false)
    const openProductDetail = () => setIsPorductDetailOpen(true)
    const closeProductDetail = () => setIsPorductDetailOpen(false)

    // Detalles del producto seleccionado
    const [productToShow, setProductToShow] = useState(null)

    
    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            isProductDetailOpen,
            setIsPorductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow
        }}>
            {children}
        </ShoppingCartContext.Provider>
        
    )
}