import React, { createContext, useEffect } from 'react'
import Demo from './Demo'
import CompA from './PropDrilling/CompA'

const studentDetail=createContext();
function App() {
let fName="Peter Parker";
let designation="SpiderMan";
let color="red n blue";
  return (
    <>
    {/* <Demo fName={fName} designation={designation} color={color}/> */}
<studentDetail.Provider value={[fName,designation]}>
<CompA />
</studentDetail.Provider>
   
    </>
  )
}

export {studentDetail}
export default App