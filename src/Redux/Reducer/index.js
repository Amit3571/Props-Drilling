import {combineReducers} from 'redux'
import changeTheProductQuantity from './UPDown'
import Counter from './Counter';

const Reducers=combineReducers(
    {
        changeTheProductQuantity,Counter
    }
    
)

export default Reducers;