import React from 'react';
import {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';



function CartPage (props) {
    const [cartProducts, setcartProducts] = useState([]);

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
                        <button onClick={(event) => props.removeFromCart(index)}> Remove From Cart </button>
                        <button onClick={(event) => props.checkout(product)}>Checkout</button>
                        </div>
                         
                    );
                })}
            </div>
            
        </>
    );
}

export default CartPage;