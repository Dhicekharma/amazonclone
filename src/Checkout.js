import React from 'react'
import { useStateValue } from './StateProvider';
import './Checkout.css';

import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal';


function Checkout() {
    const [{basket}, dispatch] = useStateValue();
    return (
        <div className='checkout'>
            <div className='checkout_left'>
            <img className='checkout_add' src=''
            alt='' />
            
            {basket?.length == 0 ? (
                <div> 
                    <h1> Your Shopping Basket is empty</h1>
                    <p>You have no items in your basket. To buy one more items, click 'Add to basket' next to the item</p>
                </div>
            ) : (<div>
                <h2 className='checkout_title'>
                    Your Shopping Basket  
                </h2>
                {basket?. map(item => (
                <CheckoutProduct 
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
                
                />
                ))}
                
            </div>) }
            </div>
            {basket?.length > 0 && (
                <div className='checkout_right'>
                        <Subtotal />
                        </div>

            )}
        </div> 
    )
}

export default Checkout;
