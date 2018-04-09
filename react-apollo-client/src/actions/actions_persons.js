
//import { URL_API, ZOMATO_KEY } from '../config/config';
export const SET_PERSONS = 'SET_PERSONS';

function handleResponse(response) {
  if (response.ok) {
    return response.json();
  } else {
    let error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
}

export function setPersons(persons) {
  return {
    type: SET_PERSONS,
    persons
  }
}
 
export default function fetchPersons(param) {
   
  return dispatch => {
     dispatch(setPersons(param))
  }
}


