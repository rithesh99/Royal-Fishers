export const initialState = {
  cart: [],
  user: null,
};

export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

export const reducer = (state, action) => {
  switch (action.type) {
    
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case "EMPTY_CART":
      return {
        ...state,
        cart: [],
      };
    case "LOAD_CART":
      if (typeof window !== undefined) {
        if (localStorage.getItem("cart")) {
            return {
              ...state, 
              cart: JSON.parse(localStorage.getItem("cart"))
            }
        }
      }
      break;
    case "REMOVE_FROM_CART":
      const cartItem = action.name
      let newCart = [...state.cart];

      if (cartItem){
        for (let i = 0; i < newCart.length; i++) {
          const index = newCart.indexOf(newCart[i]);
          // console.log("index", index);
          if (newCart[i].name === cartItem) {
            // console.log(product);
            // console.log("BEFORE", newCart);
            newCart.splice(index, 1);
            // console.log("AFTER", cart);
            break;
          }
          
        }
      } else {
        console.warn(
          `Cant remove product (id: ${action.name}) as its not in basket!`
        );
      }

      return {
        ...state,
        cart: newCart,
      };

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }

};
