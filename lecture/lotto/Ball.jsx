import React, {memo} from 'react';

// class Ball extends PureComponent {
//   const { number } = this.props;

// }

const Ball = memo(({number}) => {
  let background;
  if(number <= 10) {
    background = 'skyblue';
  } else if(number <= 20) {
    background = 'orange';
  } else if(number <= 30) {
    background = 'pink';
  } else if(number <= 40) {
    background = 'green';
  } else {
    background = 'yellow';
  }

  return (
    <div className="ball" style={{background}} >{number}</div>
  )
})

export default Ball;