import React, { Component } from 'react';

// class BaseballTry extends Component {
//   state = {

//   }
    //  const { item } = this.props;
//   render() {
//     return (
//       <li>
//         {item.try}<br /> {item.result}
//       </li>
//     )
//   }
// }


const BaseballTry = ({ item }) => {

  return (
    <li>
      {item.try}<br /> {item.result}
    </li>
  )
  
}

export default BaseballTry