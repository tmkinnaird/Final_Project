import React from 'react';
import {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';



function Checkout (props) {
    const [checkoutProducts, setcheckoutProducts] = useState([]);

    const fetchcheckoutProducts = async () => {
        try {
            const res = await fetch('http://localhost:3000/products');
            const json = await res.json();
            setcheckoutProducts(json);
        }catch(error) {
        console.log(error); 
        }
    };

    

    useEffect(() => {
    }, [checkoutProducts]);
    console.log(setcheckoutProducts)
    return (
        <>
            
            <div className="checkout">
                {props.cart.map((product, index) => {
                    return (
                        <div
                        key={uuidv4()}
                        >
                        <ul>
                        <form >
                        <label>First Name: <input type="text"/> </label><br/>
                        <label>Last Name: <input type="text"/> </label><br/>
                        <label>Credit Card Number: <input type="text"/> </label><br/>
                        <label>Expiration: <input type="text"/> </label><br/>
                        <label>CVV: <input type="text"/> </label><br/>
                        <label>Email Address: <input type="text"/> </label><br/>
                        <label>Shipping Address: <input type="text"/> </label>

                        </form>
                        </ul>
                        </div>
                         
                    );
                })}
            </div>
            
        </>
    );
}

export default Checkout;