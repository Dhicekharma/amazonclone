import React from 'react';
import StarIconBorder from '@material-ui/icons/StarBorder';
import './checkoutProduct.css';
import {useStateValue} from './StateProvider';

function CheckoutProduct({id,  title, image, price, rating  }) {
    const [{basket}, dispatch] = useStateValue();
    
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    
    return (
        <div className='checkoutProduct'>
            <img className='checkProduct_image'
            src={image}
            alt='' /> 

            <div className='checkoutProduct_info'>
            <p className='checkoutProduct_title'> {title} </p>

            <p className='checkoutProduct_price'>
                <small>$</small>
                <strong> {price} </strong>
            </p>

            <div className="checkoutProduct_rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => <p> <StarIconBorder/> </p>)
                }

                
            </div>
            <button onClick={removeFromBasket}>Remove from basket</button>
            </div>

            
        </div>
    )
}

export default CheckoutProduct;
