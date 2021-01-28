import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Index () {
    const [products, setProducts] = useState([]);
    const [cartProducts, setCartProducts] = useState([]);

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
        setCartProducts (...cartProducts, [index])
    }

    useEffect(() => {
        fetchProducts();
    }, []);
    console.log(cartProducts)

    return (
        <>
            <div className="index">
                {products.map((product, index) => {
                    return (
                        <div
                        key={product.id}
                        >
                         <Link to={`/ShowPage/${product.id}`}>{product.name} ${product.price}</Link>
                         <button onClick={() => addToCart(index)}>Add To Cart</button> 
                        </div>
                    );
                })}
            </div>
        </>
    );
}

export default Index;