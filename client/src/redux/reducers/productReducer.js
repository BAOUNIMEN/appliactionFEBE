import {
  ADD_PRODUCTS,
  GET_PRODUCTS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
} from "../actionTypes";

const init = {
  products: [],
  loading: false,
  errors: [],
};

const productReducer = (state = init, { type, payload }) => {
  switch (type) {
    case GET_PRODUCTS:
      return {
        ...state,
        loading: true,
      };
    case GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        loading: false,
        products: payload,
      };
    case GET_PRODUCTS_FAIL:
      return {
        ...state,
        loading: false,
        errors: [...state.errors, payload],
      };
    case ADD_PRODUCTS:
      return {
        ...state,
        loading: false,
        products: [...state.products, payload],
      };
    default:
      return state;
  }
};

export default productReducer;
