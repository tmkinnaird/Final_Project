import React from 'react'
import {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components'

const Button = styled.button`
    background: transparent;
  border-radius: 3px;
  border: 2px solid gold;
  color: gold;
  margin: 0 1em;
  padding: 0.25em 1em;
  &:hover {
    background-color: gold;
    color: white;
    cursor: pointer;
  }
`


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
          <div className='showpage'
            key={uuidv4()}
          >
          <div>
          <img src={product.img} width="400px"/>
          <h3>{product.name}</h3>
           <p> {product.description} <br/>${product.price}</p>
           <Button onClick={() => addToCart(product)}>Add To Cart</Button> 
           </div>
          </div>

        
      );
};

export default ShowPage;