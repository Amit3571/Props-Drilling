import React from 'react'

const Demo = (props) => {
   let fName="hgfhgf";
//    props.fName="Loki "
  return (
    <>
    <h1>{props.fName}</h1>
    <p>{props.designation}</p>
    </>
  )
}

export default Demo


// import React from 'react'

// const Demo = ({fName,designation}) => {
//     fName="thor odinson"
//   return (
//     <>
//     <h1>{fName}</h1>
//     <p>{designation}</p>
//     </>
//   )
// }

// export default Demo