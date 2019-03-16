import {GET_LIST_REQUEST,GET_LIST_SUCCESS,GET_LIST_FAILED} from '../constants';
//import axios from 'axios'


//const api = fetch('https://api.github.com/users/supreetsingh247/repos');

console.log("cla;;")

export const requestAPI = mob => dispatch => new Promise((resolve, reject) => {
  console.log("calling request api")
    dispatch({ type: GET_LIST_REQUEST });
    return fetch('https://api.github.com/users/supreetsingh247/repos') 
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(".....",responseJson)
        if (responseJson) {
          //console.log("response data.....",response.data)
          dispatch({
            type: GET_LIST_SUCCESS,
            payload: responseJson,
          });
          resolve(responseJson);
        }
      })
      .catch((e) => {
        console.log("e...",e)
        dispatch({
          type: GET_LIST_FAILED,
          payload: e.responseJson != undefined ? e.responseJson : e,
        });
        reject(e);
      });
  });