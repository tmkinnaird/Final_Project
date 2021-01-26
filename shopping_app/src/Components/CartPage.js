import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
// import Button from 'react-bootstrap/Button'

function CartPage () {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const res = await fetch('http://localhost:3000/CartPage');
            const json = await res.json();
            setProducts(json);
        }catch(error) {
        console.log(error); 
        }
    };

    const deleteProduct = async (id) => {
        try {
          const response = await fetch(`http://localhost:3000/CartPage/${id}`, {
            method: "DELETE",
            headers: {
              "Content-type": "application/json",
            },
          });
          const data = await response.json();
          const filteredProducts = products.filter((product) => product.id !== data.id);
          setProducts(filteredProducts);
        } catch (error) {
          console.log(error);
        }
      };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            
            <div className="cart">
                {products.map((product) => {
                    return (
                        <div
                        key={product.id}
                        >
                        <Link to={`/ShowPage/${product.id}`}>{product.title}</Link>
                        <Link to={`/CartPage/${product.id}`}><button>Update Cart</button></Link>
                        <button onClick={(event) => {deleteProduct(product.id);}}> Delete From Cart </button>
                        </div>
                         
                    );
                })}
            </div>
            
        </>
    );
}

export default CartPage;