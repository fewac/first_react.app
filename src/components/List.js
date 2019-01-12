import React from 'react'
import Button from './Button'

const List = ({items, removeItem}) => 
    items.map( (item, index) =>
        <div className="card bg-light my-1">
          <div className="card-body">
            <div className = "row">
                <div className = "col-8">
                    <h5 className="card-title"> {item}</h5>
                </div>
                <div className = "col-2">
                <Button
                    className = "btn btn-success" 
                >
                    Done
                </Button>
                
                </div>
                <div className = "col-2">
                <Button
                    className = "btn btn-danger"
                    clickHandler = { () => removeItem(index)} 
                >
                    Delete
                </Button>
                
                </div>
            </div>

            

          </div>
          
            
          
        </div>
      )
      

export default List

// col-sm
// input-group-append

{/* <div class="container">
  <div class="row">
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
    <div class="col-sm">
      One of three columns
    </div>
  </div>
</div> */}


/*

let list = this.state.list
    ///*list = list.map(item => <li>{item}</li>)
    // la arrow function que está adentro de nuestra función "map", no necesita
    // paréntesis porque todo está dentro de un solo "div" y lo toma como que sólo
    // está regresando una sola cosa.

    list = list.map(item =>
        <div className="card bg-light my-1">
          <div className="card-body">
            <h5 className="card-title"> {item}</h5>
          </div>
        </div>
      )
*/