// import React from 'react'
// import CompC from './CompC'

// const CompB = (props) => {
//   return (
//      <>
//         <h1>Component B</h1>
//         <hr />
//         <CompC fName={props.fName}/>
//         </>
//   )
// }

// export default CompB


import React from 'react'
import CompC from './CompC'

const CompB = () => {
  return (
     <>
        <h1>Component B</h1>
        <hr />
        <CompC/>
        </>
  )
}

export default CompB