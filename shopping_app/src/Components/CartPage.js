import React from 'react';
import {useState, useEffect} from 'react';
// import {Link} from 'react-router-dom';


function CartPage () {
    const [cartProducts, setcartProducts] = useState([]);

    // const fetchcartProducts = async () => {
    //     try {
    //         const res = await fetch('http://localhost:3000/cartProducts');
    //         const json = await res.json();
    //         setcartProducts(json);
    //     }catch(error) {
    //     console.log(error); 
    //     }
    // };

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
    }, []);

    return (
        <>
            
            <div className="cart">
                {cartProducts.map((product) => {
                    return (
                        <div
                        key={product.id}
                        >
                        <p>{product.name} {product.description} ${product.price}</p>
                        {/* <button onClick={(event) => {removeProduct(product.id);}}> Remove From Cart </button> */}
                        </div>
                         
                    );
                })}
            </div>
            
        </>
    );
}

export default CartPage;