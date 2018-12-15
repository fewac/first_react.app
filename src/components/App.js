import React, { Component } from 'react';
import Example from './Example'
import Title from './Title'

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      title: 'My first react app something'
    }
  }

  render() {
    return (
      <Title title={ this.state.title } />
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
