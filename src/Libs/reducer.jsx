export const initialState = {
    basket: [],
};

export const totaleCarrello = (basket) =>
  basket?.reduce((totale, oggetto) => oggetto.prezzo + totale, 0);


const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "AGGIUNGI-CARRELLO":
        return {
          ...state,
          basket: [...state.basket, action.oggetto],
        };
       case "RIMUOVI-CARRELLO":
      
        let newBasket = [...state.basket];



    const index = state.basket.findIndex(
        (basketOggetto) => basketOggetto.id === action.id
      );
      if (index >= 0) {
       
         newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not in the basket`
         );
       }
     
      return { ...state, basket: newBasket };
    default:
      return state;
  }
};

export default reducer;