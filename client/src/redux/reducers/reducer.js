import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from "../actionTypes";


const userInit = {
  loading: false,
  errors: null,
  users: null,
  token: null,
  isAuth: null,
};

const reducer = (state = userInit, { type, payload }) => {
  switch (type) {
    case REGISTER:
    case LOGIN:
      return {
        ...state,
        loading: true,
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        loading: false,
        users: payload,
        errors: null,
      };
    case REGISTER_FAIL:
    case LOGIN_FAIL:
      return {
        ...state,
        loading: false,
        errors: payload,
      };
    case LOGIN_SUCCESS:
      return{
        ...state,
        loading:false,
        token:payload.token,
        users:payload.user,
        errors:null,
      };

    default:
      return state;
  }
};
export default reducer;
