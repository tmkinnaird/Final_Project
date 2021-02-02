import React from 'react';
import {useState, useEffect} from 'react';
import { v4 as uuidv4 } from 'uuid';
import Form from 'react-bootstrap/Form';


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
                
                    
                        <div
                        key={uuidv4()}
                        >
                        
                        <div className="form-group">
                            <Form >
                                <Form.Group>
                                    <Form.Label>First Name:</Form.Label><Form.Control type="text"/> <br/>
                                    <Form.Label>Last Name: </Form.Label><Form.Control type="text"/> <br/>
                                    <Form.Label>Credit Card Number:</Form.Label> <Form.Control type="text"/> <br/>
                                    <Form.Label>Expiration:</Form.Label> <Form.Control type="text"/> <br/>
                                    <Form.Label>CVV: </Form.Label><Form.Control type="text"/> <br/>
                                    <Form.Label>Email Address: </Form.Label><Form.Control type="text"/> <br/>
                                    <Form.Label>Shipping Address:</Form.Label><Form.Control type="text"/><br/>
                                    <Form.Label>State:</Form.Label><Form.Control type="text"/> <br/>
                                    <Form.Label>City: </Form.Label><Form.Control type="text"/> <br/>
                                    <Form.Label>ZipCode:</Form.Label> <Form.Control type="number"/> 
                                </Form.Group>
                            </Form>
                        </div>
                        
                        </div>
                         
                    
                
            </div>
            
        </>
    );
}

export default Checkout;