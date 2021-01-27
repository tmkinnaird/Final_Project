import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';

function Index () {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
        try {
            const res = await fetch('http://localhost:3000/products');
            const json = await res.json();
            setProducts(json);
        }catch(error) {
        console.log(error); 
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    return (
        <>
            <div className="index">
                {products.map((product) => {
                    return (
                        /* <Link to={`/products/${product.id}`}>{product.name}</Link> */
                        <div>{product.name}</div>
                    );
                })}
            </div>
        </>
    );
}

export default Index;