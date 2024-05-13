import React from 'react'

const Buttons = ({label,handleClick}) => {

    
  return (
    <button value={label} style={{alignContent:"center", width:"50px", height:"50px", border:'1px solid black', margin:"5px",
     borderRadius:"5px" }} type='submit' onClick={(e) => handleClick(e)}>{label}</button>
  )
}

export default Buttons