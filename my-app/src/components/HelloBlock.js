import React, { Component } from 'react';

class HelloBlock extends Component{
  state = {
    number : 5,
    aaa: "bbbb"
  }

  render() {
    return (
      <div className="App">
        <h2>Hello{this.state.number}</h2>
      </div>
    );
  }
}

// import React from 'react';

// function HelloBlock() {
//   return (
//     <div className="App">
//       <h2>Hello World</h2>
//     </div>
//   );
// }

export default HelloBlock;  
