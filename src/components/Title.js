
import React from 'react'

// Stateless component

const Title = (props) => {
    return (
        //<h1> My first another component</h1>
        <h1> { props.title } </h1>
    )
}

export default Title