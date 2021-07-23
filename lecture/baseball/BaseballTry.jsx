import React, { Component, memo } from 'react';

// class BaseballTry extends Component {

  // constructor를 쓰므로써 복잡한 함수나 계산을 하여 state값을 넣을 수 있다.
  // constructor(props) {
  //   super(props);

  //   state = {
      
  //   }
  // }




//   state = {
      // result:  this.props.result,  props를 state 바꾸는 법
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

//memo는 class 에서 쓰는 PureComponent와 비슷한 역할
const BaseballTry = memo(({ item }) => {
  // props를 바꿔야될경우 state로 만들어서 바꾼다.
  // const [result, setResult] = UsageState(item.result);
  // const onClick = () => {
  //   setResult('1')
  // }

  return (
    <li>
      {item.try}<br /> {item.result}
    </li>
  )
  
});

export default BaseballTry