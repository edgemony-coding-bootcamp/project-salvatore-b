export const initialState = {
  basket: [],
  user: null,
};

export const totaleCarrello = (basket) =>
  basket?.reduce((totale, oggetto) => oggetto.prezzo + totale, 0);

export const getBasketTotal = (basket) => {
  let total = basket?.reduce(
    (total, currentItem) => (currentItem.prezzo * currentItem.count) + total,
    0
  );
  return Math.round(total * 100) / 100;
};

const reducer = (state, action) => {
  console.log(action);
  let index;

  if (action.oggetto) {
    index = state.basket.findIndex((oggetto) => oggetto.id === action.oggetto.id);
  }

  switch (action.type) {

    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };

    case "AGGIUNGI-CARRELLO":
      if (index === -1) {
        action.oggetto.count = 1;
        return {
          ...state,
          basket: [...state.basket, action.oggetto],
        };
      } else {
        state.basket[index].count += 1;
        return {
          ...state,
        };
      }


      case "RIMUOVI-CARRELLO":

        let newBasket = [...state.basket];

        index = state.basket.findIndex(
          (basketOggetto) => basketOggetto.id === action.id
        );
        if (index >= 0) {

          newBasket.splice(index, 1);
        }
        return {
          ...state, basket: newBasket
        };

      case "SVUOTA-CARRELLO":
        return {
          ...state,
          basket: [],
        };

      case "COUNTER-CARRELLO":
        if (index === -1) {
          return {
            ...state,
          };
        } else {
          if (action.oggetto.count === 0) {
            return {
              ...state,
              basket: state.basket.filter((oggetto) => oggetto.id !== action.oggetto.id),
            };
          } else {
            state.basket[index].count = action.oggetto.count;
            return {
              ...state,
            };
          }
        }

        default:
          return {
            ...state,
          };
  }
};

export default reducer;