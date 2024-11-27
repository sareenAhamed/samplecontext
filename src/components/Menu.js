import React, { useContext } from 'react'
import { foodContext } from '../App'

const Menu = () => {
    const {food, setFood} = useContext(foodContext)
  return (
    <div>
        <h3>{`food: ${food}`}</h3>
        <button onClick={() => setFood("pasta")}>click</button>
        
      
    </div>
  )
}

export default Menu
