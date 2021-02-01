import React from 'react';
import {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import {Link} from 'react-router-dom';
import styled from 'styled-components'


function CartPage (props) {
    const [cartProducts, setcartProducts] = useState([]);
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
  }
`
const Link = ({ className, children }) => (
    <a className={className}>
      {children}
    </a>
  );
  
  const StyledLink = styled(Link)`
    color: gold;
    font-weight: bold;
  `;

    const fetchcartProducts = async () => {
        try {
            const res = await fetch('http://localhost:3000/products');
            const json = await res.json();
            setcartProducts(json);
        }catch(error) {
        console.log(error); 
        }
    };

    // const deleteProduct = async (id) => {
    //     try {
    //       const response = await fetch(`http://localhost:3000/cartProducts/${id}`, {
    //         method: "DELETE",
    //         headers: {
    //           "Content-type": "application/json",
    //         },
    //       });
    //       const data = await response.json();
    //       const filteredProducts = cartProducts.filter((product) => product.id !== data.product.id);
    //       setProducts(filteredProducts);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };

    useEffect(() => {
        // fetchcartProducts();
    }, [cartProducts]);

    return (
        <>
            
            <div className="cart">
                {props.cart.map((product, index) => {
                    return (
                        <div
                        key={uuidv4()}
                        >
                        <p>{product.name} {product.description} ${product.price}</p>
                        <Button onClick={(event) => props.removeFromCart(index)}> Remove From Cart </Button>
                        <StyledLink to={`/Checkout`}>Checkout</StyledLink>
                        </div>
                         
                    );
                })}
            </div>
            
        </>
    );
}

export default CartPage;