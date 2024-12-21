// import React from 'react'

// const CompC = (props) => {
//   return (
//    <>
//    <h1>Component C</h1>
//    <p>{props.fName}</p>
//    </>
//   )
// }

// export default CompC


//Provider
//Consumer
//Content

// import React from 'react'
//  import { studentDetail } from '../App'
// const CompC = () => {
//   return (
//     <>
//     <h1>Component C</h1>

//   <studentDetail.Consumer>

//   {(getData)=>{
//     return <p>{getData}</p>
        
//     }}
//   </studentDetail.Consumer>
//     </>
//   )
// }

// export default CompC


import React, { useContext } from 'react';
 import { studentDetail } from '../App';

const CompC = () => {
    const data=useContext(studentDetail);
  return (
    <>
    <h1>Component C</h1>
    <p>{data[0]} {data[1]}</p>

    </>
  )
}

export default CompC