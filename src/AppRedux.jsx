import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import './App.css'
import { decNumber, incNumber } from './Redux/Action'
function AppRedux() {
    const dispatch=useDispatch();
    const productQuantity=useSelector(state=>{
        console.log(state);
        return state.changeTheProductQuantity;
        
    })
  return (
    <>
    <div className='container'>
    <a href="#"><button className='btn btn-danger' onClick={()=>dispatch(decNumber())}>-</button></a>
    <input type="text" className='textFile' value={productQuantity}/>
    <a href="#"><button className='btn btn-success' onClick={()=>dispatch(incNumber())}>+</button></a>
    </div>
    </>
  )
}

export default AppRedux