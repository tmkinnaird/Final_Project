import React from 'react'
import {useState, useEffect} from 'react';

function ShowPage(routerProps) {
    const [product, setProduct] = useState([]);

    const fetchProduct = async () => {
        try{
            const res = await fetch(`http://localhost:3000/ShowPage/${routerProps.match.params.id}`);
            const json = await res.json();
            setProduct(json)
        }catch(error){
            console.error(error);
        }
    };

    const deleteProduct = async (id) => {
        try {
          const response = await fetch(`http://localhost:3000/ShowPage/${id}`, {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
            },
          });
          const data = await response.json();
          const filteredProducts = product.filter((product) => product.id !== data.id);
          setProduct(filteredProducts);
        } catch (error) {
          console.log(error);
        }
      };

      useEffect(() => {
          fetchProduct();
      }, []);

      return (
          <div>
            <h1>{product.name}</h1>
            <p>{product.description}</p>
          </div>

        
      );
};

export default ShowPage;