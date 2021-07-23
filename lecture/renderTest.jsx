// 렌더링 방지

// import React, { Component } from 'react';

// class Test extends Component {
//   state = {
//     counter : 0
//   };
//   shouldComponentUpdate(nextProps, nextState, nextContext) {
//     if(this.state.counter !== nextState.counter) {
//       return true;
//     }
//     return false;
//   }
//   onClick = () => {
//     this.setState({})
//   };
//   render() {
//     return (
//       <div>
//         <button onClick={this.onClick}>클릭</button>
//       </div>
//     )
//   };
// }


import React, { PureComponent } from 'react';

class Test extends PureComponent {
  state = {
    counter : 0,
    string: 'hello',
    number: 1,
    boolean: true,
    // 객체나 배열은 PureComponent도 잡기 힘들다 ... state에 객체 구조를 안쓰는게 좋다!
    object: {},
    array: []
  };

  onClick = () => {
    this.setState({})
  };
  render() {
    return (
      <div>
        <button onClick={this.onClick}>클릭</button>
      </div>
    )
  };
}

export default Test;