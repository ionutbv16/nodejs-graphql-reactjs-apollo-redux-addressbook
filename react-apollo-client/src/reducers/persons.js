
import { SET_PERSONS } from '../actions/actions_persons.js';

export default function persons(state = [], action = {}) {
  switch(action.type) {
   
    case SET_PERSONS:
      return action.persons;
    default: return state;
  }
}

 
