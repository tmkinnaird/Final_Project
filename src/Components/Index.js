import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
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
// const Link = ({ className, children }) => (
//     <a className={className}>
//       {children}
//     </a>
//   );
  
  const StyledLink = styled(Link)`
    color: white;
    font-weight: bold;
  `;

function Index (props) {
    const [products, setProducts] = useState([]);
    
    const fetchProducts = async () => {
        try {
            const res = await fetch('http://localhost:3000/products');
            const data = await res.json();
            setProducts(data);
        }catch(error) {
        console.log(error); 
        }
    };

    function addToCart (index) {
        props.updateCart(index)
    }

    useEffect(() => {
        fetchProducts();
    }, []);
    

    return (
        <>
        <h1>Gear</h1>
            <div className="index">
                {products.map((product, index) => {
                    return (
                        <div
                        className="product"
                        key={uuidv4()}
                        >
                        <img src={product.img} width="300px" />
                         <StyledLink to={`/ShowPage/${product.id}`}>{product.name} ${product.price} </StyledLink>
                         <Button onClick={() => addToCart(product)}>Add To Cart</Button> 
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Index;