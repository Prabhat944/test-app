import {createStore} from 'redux';
import {storeReducer} from './Reducer/reducers'



const store=createStore(storeReducer)

export default store;