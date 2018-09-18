import * as fromPizzas from "../actions/pizza.actions";
import { Pizza } from "../../models/pizza.model";

export interface PizzaState {
  data: Pizza[];
  loaded: boolean;
  loading: boolean;
}

export const initialState: PizzaState = {
  data: [
    {
      "name": "Blazin' Inferno",
      "toppings": [
        {
          "id": 10,
          "name": "pepperoni"
        },
        {
          "id": 9,
          "name": "pepper"
        },
        {
          "id": 3,
          "name": "basil"
        },
        {
          "id": 4,
          "name": "chili"
        },
        {
          "id": 7,
          "name": "olive"
        },
        {
          "id": 2,
          "name": "bacon"
        }
      ],
      "id": 1
    }
  ],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: fromPizzas.PizzasAction
): PizzaState {
  let registry = {
    [fromPizzas.LOAD_PIZZAS] : () => { return {...state, loading: true}; },
    [fromPizzas.LOAD_PIZZAS_SUCCESS] : () => { return {...state, loading: false, loaded: true}; },
    [fromPizzas.LOAD_PIZZAS_FAIL] : () => { return {...state, loading: false, loaded: false}; }
  }
  if (registry[action.type]) {
    return registry[action.type]();
  } else {
    return state;
  }
}
