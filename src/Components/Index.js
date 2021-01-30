import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

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
        <h1>Products</h1>
            <div className="index">
                {products.map((product, index) => {
                    return (
                        <div
                        key={uuidv4()}
                        >
                         <Link to={`/ShowPage/${product.id}`}>{product.name} ${product.price}</Link>
                         <button onClick={() => addToCart(product)}>Add To Cart</button> 
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Index;