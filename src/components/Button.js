import React from 'react'



// Stateless component

const Button = ({ className, clickHandler, children }) => {
    return (
        <button 
            type = "button" 
            className = { className }  // 'className' es un nombre que decidimos ponerle
            onClick = { clickHandler } 
        >
             { children }
        </button>
    )
    }   

export default Button


