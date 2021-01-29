import React from 'react'
import {useState, useEffect} from 'react';


    const ShowPage = (props) => {
// function ShowPage(props) {
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


      useEffect(() => {
          fetchProduct();
      }, []);

      return (
          <div>
           <p>{product.name} {product.description} ${product.price}</p>
            {/* <h1>{product.name}</h1> <br/>
            <p>{product.description}</p> <br/>
            <p>{product.price}</p> */}
          </div>

        
      );
};

export default ShowPage;