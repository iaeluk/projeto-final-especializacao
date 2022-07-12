import { combineReducers } from 'redux';
import { fetchPersonagensReducer } from './fetchCharactersReducer';

const reducers = combineReducers({
  person: fetchPersonagensReducer,
})

export default reducers;