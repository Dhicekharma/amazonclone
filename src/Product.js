import React from 'react';
import StarIconBorder from "@material-ui/icons/StarBorder"
import './Product.css';
import { useStateValue} from './StateProvider.js'


function Product({id, title, price, rating, image}) {

 const [{}, dispatch] = useStateValue();   
 const addToBasket = () => {
     dispatch({
         type: 'ADD_TO_BASKET',
         item: {
             id: id,
             title, title,
             rating: rating,
             image: image,
             price: price
         }
     })

 };

    return (
        <div className='product'>
            <div className='product_info'>

            <p>{title}</p>
            <p className='product_price'>
                <small>
                    $
                </small>
                <strong>
                    {price}
                </strong>
            </p>
            <div className="product_rating">
                {
                    Array(rating)
                    .fill()
                    .map((_) => <p> <StarIconBorder/> </p>)
                }
                
            </div>

            </div>
            
            <img src={image} alt='' />
            <button onClick={addToBasket}>Add to basket </button>
         
        </div>
    )
}

export default Product;
