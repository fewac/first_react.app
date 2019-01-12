import React from 'react'

// Stateless components

const Input = ({ value, onChange, type, className }) => {
    let style = value.length ? `${className} is-valid` : `${className} is-invalid`

    return(
        <input 
            className = { style }
            type = {type}
            value = { value }
            onChange = { onChange }
         />
    )
}


export default Input



    /*
    <input 
                        className = "form-control" 
                        type = "text" 
                        value = {this.state.title}
                        onChange = { (e) => this.inputHandler(e) }
                        />
    
    */
