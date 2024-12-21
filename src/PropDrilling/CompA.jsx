// import React from 'react'
// import CompB from './CompB'

// const CompA = (props) => {
//   return (
//     <>
//     <h1>Component A</h1>
//     <hr />
//     <CompB fName={props.fName}/>
//     </>
//   )
// }

// export default CompA


import React from 'react'
import CompB from './CompB'

const CompA = () => {
  return (
    <>
    <h1>Component A</h1>
    <hr />
    <CompB />
    </>
  )
}

export default CompA