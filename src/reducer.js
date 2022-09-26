export const initialState = {
    basket: [
        {
            id: '3254354345',
            title: 'New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) -Silver (4th Generation)',
            price: 598.99,
            rating: 4,
            image: 'https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg' 

        }
    ],
    user: null,
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    console.log(action)
    switch(action.type) {
        case 'SET-USER':
            return {
                ...state,
                user: action.user
            }





      case  'ADD_TO_BASKET':
          //Logic for adding tiem to basket
          return {...state,
                basket:  [...state.basket,action.item]
        
        }
          break;

      case 'REMOVE_FROM_BASKET':
          let newBasket = [...state.basket];

          const index = state.basket.findIndex((basketItem) => basketItem.id === action.id);
            if (index >= 0){
                newBasket.splice(index, 1);
            } else {
                console.warn(
                    `Cant remove product (id: ${action.id} as its not in basket)`
                ); 
            }
          return{...state, basket: newBasket }; 
       
        default:
            return state;
    }
}

export default reducer;