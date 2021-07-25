import React, { Component } from 'react';


// 클래스의 경우 > constructor > render > ref > componentDidMount
// setState/props 바뀔떄  > shouldCompoentUpdate(true) > render > componentDidUpdate
// 부모가 나를 없앴을 떄  > componentWillUnmount > 소멸

const rspCoords = {
  rock: '0',
  scissor: '-142px' ,
  paper: '-284px'
}
const scores = {
  rock: 1,
  scissor: 0 ,
  paper: -1
}

const computerChoice = (imgCoord) => {
  return Object.entries(rspCoords).find( item => {
    return item[1] === imgCoord;
  })[0];
}

class RSP extends Component {
  state = {
    result: '',
    score: 0,
    imgCoord: rspCoords.rock;
  };

  interval;

 

  onClickBtn = (choice) => {
    console.log(choice);
    clearInterval(this.interval);
    const { imgCoord } = this.state;
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if(diff === 0){
      this.setState({
        result: '비겼습니다.'
      })
    } else if([-1, 2].includes(diff)){
      this.setState( (prevState) => {
        return {
          result: '졌습니다.',
          score: prevState.score - 1
        }
        
      })
    } else {
      this.setState( (prevState) => {
        return {
          result: '이겼습니다.',
          score: prevState.score + 1
        }
        
      })
    }
    setTimeout(() => {
      this.interval = setInterval(this.changeHand, 50)
    },2000)
    
  }

  changeHand = () => {
    const { imgCoord } = this.state;
    if(imgCoord === rspCoords.rock) {
      this.setState({
        imgCoord: rspCoords.scissor
      });
    }
    if(imgCoord === rspCoords.scissor) {
      this.setState({
        imgCoord: rspCoords.paper
      });
    }
    if(imgCoord === rspCoords.paper) {
      this.setState({
        imgCoord: rspCoords.rock
      });
    }
  }

  componentDidMount() {
    //컴포넌트가 첫 렌더링 된 후 / 여기에 비동기 요청을 많이함 
    
    this.interval = setInterval(this.changeHand, 50)
  }

  componentWillUnmount() {
    //컴포넌트가 제거되기 직전 / 비동기 요청 정리를 많이함
    clearInterval(this.interval);
  }

  componentDidUpdate() {
    // 리렌더링된 후 
  }
 
  render() {
    const { result, score, imgCoord } = this.state;
    return (
      <>
        <div id="computer" style={{background:`url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }}></div>
        <div>
          <button id="rock" className="btn" onClick={() => this.onClickBtn('rock')}>바위</button>
          <button id="scissor" className="btn" onClick={() => this.onClickBtn('scissor')}>가위</button>
          <button id="paper" className="btn" onClick={() => this.onClickBtn('paper')}>보</button>
        </div>
        <div>{result}</div>
        <div>현재 {score}점</div>
      </>
    )
  }

  // 만약에 버튼 메소드 간단하게 한다면
  // <button id="paper" className="btn" onClick={this.onClickBtn('paper')}>보</button>
  // onClickBtn = (paper) => (e) => {

  // }
}

export default RSP