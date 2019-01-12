import React, { Component } from 'react';
import Button from './Button'
import Input from  './Input'
import List from './List'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      title: '',
      list: []
    }
  }


  inputHandler = (e) => {
    //console.log(e.target.value);

    this.setState({
      title: e.target.value
    })
  }


  addItem = () => {
    let title = this.state.title;
    const list = this.state.list;
    title = title.trim();



    if (title && title.length){
      list.push(title);

      this.setState({
        title: '',
        list  // esto es igual que si tuviéramos esto:   list: list
      })
      
    }

    console.log(this.state.list)
    
    this.setState({
      title: ''
    })
    
    

                 


// Otra forma de hacer esto es así: 

    // if (title.length !== 0){
    //   list.push(title);
    //   this.setState({
    //     list
    //   }, () => {
    //     console.log(this.state.list)
    //   })

     
    //   }
    //   this.setState({
    //     title: ''
    //      });

    

    // console.log("This is a test");
    // let elemento;
    // elemento = this.state.title;
    // this.setState.list.push(elemento);
    // console.log(this.state.list);
  }



  removeItem = index => {
    console.log(index)
    let list = this.state.list
    list.splice(index, 1)
    this.setState({
      list
    })
  }



  render() {

    let list = this.state.list
    /*list = list.map(item => <li>{item}</li>)*/
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


    return (
      <div className="container">
        <div className="row justify-content-center">

          <div className="col-md-6">
            <div className="card bg-light">
              <div className="card-body">
                <h1 className="card-title text-center"> To Do List</h1>
                  <div className="input-group mb-3"> 

                      <Input
                        value = { this.state.title}
                        onChange = { (e) => this.inputHandler(e) }
                        className = "form-control"
                        type = "text"
                      />
                        
                      

                      {/*
                      <input 
                        className = "form-control" 
                        type = "text" 
                        value = { this.state.title} 
                        onChange = { (e) => this.inputHandler(e) }
                        />
                      */}


                      {/* this.state.title */}

                      <br />

                      <div className="input-group-append">

                        {/*   Así se agrega un componente de React:  */}
                        <Button
                          className = "btn btn-primary"
                          clickHandler = {this.addItem} 
                        >
                          Agregar
                        </Button>

                        { /*<button type="button" className="btn btn-primary" onClick={this.clickHandler}>Hola</button>*/}

                      </div>
                  </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col">
              <List
                items = {this.state.list}
                removeItem = {this.removeItem}
              />
          </div>
        </div>
      </div>
    )
  }



  // render() {
  //   return (
  //     <h1>
  //       { this.state.title }
  //     </h1>
  //   )
  // }

}

  //   render() {
//     return (
//       <Example />
//     );
//   }
// }

export default App;
