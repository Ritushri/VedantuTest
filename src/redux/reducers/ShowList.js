
import {
    GET_LIST_REQUEST,
    GET_LIST_SUCCESS,
    GET_LIST_FAILED,
  } from '../constants';
  
  const initialState = {
    showList: null,
  };
  
  export default (state = initialState, action) => {
    console.log("actoion.type...",action.type);
    switch (action.type) {
      case GET_LIST_SUCCESS:
      // //console.log("action....",action)
        return {
            showList: action.payload,
        };
        default:
        return state;
    }
  };
  
