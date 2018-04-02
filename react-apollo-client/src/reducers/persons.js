
import { SET_RESTAURANTS } from '../actions/actions_persons.js';

export default function persons(state = [], action = {}) {
  switch(action.type) {
   
    case SET_RESTAURANTS:
      return action.persons;
    default: return state;
  }
}

 
