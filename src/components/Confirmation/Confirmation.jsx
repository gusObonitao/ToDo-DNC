import React from 'react'
import './Confirmation.scss'
import { Link } from "react-router-dom"

const Confirmation = ({text, description}) => {
  return (
    <div className='container'>
            <h1>{text}</h1>
            <p>{description}</p>

            <div className="conf-btns">
                <button className='no'><Link to={'/'}>Não</Link></button>
                <button className='yes'><Link to={'/'}>Sim</Link></button>
            </div>
    </div>
  )
}

export default Confirmation