import axios from 'axios';
import {
  ADD_PRODUCTS,
  GET_PRODUCTS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCTS_SUCCESS,
} from '../actionTypes';

export const getProducts = () => async (dispatch) => {
  dispatch({
    type: GET_PRODUCTS,
  });
  try {
    const {data} = await axios.get('/product/get_products');
    dispatch({
      type: GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: GET_PRODUCTS_FAIL,
      payload: error.response.data,
    });
  }
};
export const addproduct = (newProduct) => async(dispatch) => {
  try {
    const {data} = await axios.post("/product/add_products",newProduct)
      console.log(data)
      dispatch({
          type:ADD_PRODUCTS,
          payload:data
      })
  } catch (error) {
      alert("add error")
  }
};