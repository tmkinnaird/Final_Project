import React from 'react'
import {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';


    const ShowPage = (props) => {
    const [product, setProduct] = useState({});

    const fetchProduct = async () => {
        try{ 
            const id = props.routerProps.match.params.id
            const res = await fetch(`http://localhost:3000/products/${id}`);
            const data = await res.json();
            setProduct(data.product)
            console.log(data)
        }catch(error){
            console.error(error);
        }
    };

    function addToCart (index) {
      props.updateCart(index)
  }
      useEffect(() => {
          fetchProduct();
      }, []);

      return (
          <div
            key={uuidv4()}
          >
           <p>{product.name} {product.description} ${product.price}</p>
           <button onClick={() => addToCart(product)}>Add To Cart</button> 
          </div>

        
      );
};

export default ShowPage;