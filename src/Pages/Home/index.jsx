import React, { useContext, useState, useEffect } from "react";
import Layout from "../../Components/Layout"
import Card from "../../Components/Card"
import ProductDetail from "../../Components/ProductDetail";
import { ShoppingCartContext } from "../../Context";
import { useParams } from "react-router-dom";


const Home = () => {
    const {items} = useContext(ShoppingCartContext);
    const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda
    const {category} = useParams();
    
    //funcion para filtrar por categoria
    const filteredItems = items.filter((product) => {
      const matchesCategory = category
        ? product.category.toLowerCase() === category.toLowerCase()
        : true; 
      const matchesSearchTerm = product.name.toLowerCase().includes(searchTerm);
      return matchesCategory && matchesSearchTerm; 
    });
    
  
    // Función para manejar la búsqueda
    const handleSearch = (event) => {
    setSearchTerm(event.target.value.toLowerCase()); // Actualizar el estado con el valor del input
  };

  // Limpiar el término de búsqueda cuando cambia la categoría
      useEffect(() => {
        setSearchTerm('');
    }, [category]);


  

    return (
      <Layout>
        
        <div className='flex justify-center w-80 items-center relative mb-4'>
            <h1 className='font-medium text-xl'>JOYERIA EXCLUSIVA</h1>
        </div>
        <div className="flex justify-center w-90 items-center mb-4 text-justify">
          <p className="font-normal">Disfruta de las joyas de mas alta calidad en Colombia</p>
        </div>
        <input 
        type="text" 
        placeholder="Busca tu producto" className="rounded-lg border border-black w-80 p-4 mb-4 focus:outline-none" 
        onChange={handleSearch} 
        value={searchTerm} />

        <div className="grid gap-7 grid-cols-4 w-full max-w-screen-lg">
        {filteredItems.map((product) => {
          const unformattedPrice = product.price;
          return (
           <Card
          id={product.id}
          key={product.id}
          name={product.name}
          category={product.category}
          price={unformattedPrice}
          image={product.image}
          description={product.description}
          />
          ); 
        })}
        </div>
        <ProductDetail /> 
      </Layout>
    )
  }
  
  export default Home