import React, { useState } from 'react'
import { AnimateSharedLayout } from 'framer-motion'



const Card = (props) => {

  const [enlarge, setEnlarge] = useState(false)

  return (
    <>
       <AnimateSharedLayout>
      {enlarge ? (
        <enlargeCard param={props} setEnlarge={() => setEnlarge(false)} />
      ) : (
        <CompactCard param={props} setEnlarge={() => setEnlarge(true)} />
      )}
    </AnimateSharedLayout>
    </>
  )
}



function CompactCard () {

  return (
    <>
      Hello
    </>
  )
}



export default Card