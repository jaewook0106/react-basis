import React, { useState, useRef, useEffect } from 'react';


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

const RSP = () => {
  
  const [result, setResult] = useState('');
  const [score, setScore] = useState(0);
  const [imgCoord, setImgCoord] = useState(rspCoords.rock);
  const interval = useRef;

  useEffect(() => {
    //componentDidMount, componentDidUpdate 역할 (1대1 대응은 아님 둘이 합쳐놨다??)
    // useEffect는 data 값이 변하는걸 배열에 넣어줘야된다. 여러번 쓸 수 있다.

    interval.current = setInterval(changeHand, 50)
    return () => { //componentWillUnmount 역할
      clearInterval(interval.current);
    }
  }, [imgCoord])

 

  const onClickBtn = (choice) => {
    console.log(choice);
    clearInterval(interval.current);
    const myScore = scores[choice];
    const cpuScore = scores[computerChoice(imgCoord)];
    const diff = myScore - cpuScore;
    if(diff === 0){
      setResult('비겼습니다.')
    } else if([-1, 2].includes(diff)){
      setResult('졌습니다.')
      setScore((prevScore) => prevScore - 1)
      
    } else {
      setResult('이겼습니다.')
      setScore((prevScore) => prevScore + 1)
    }
    setTimeout(() => {
      interval.current = setInterval(changeHand, 50)
    },2000)
    
  }

  const changeHand = () => {
    if(imgCoord === rspCoords.rock) {
      setImgCoord(rspCoords.scissor)
    }
    if(imgCoord === rspCoords.scissor) {
      setImgCoord(rspCoords.paper)
    }
    if(imgCoord === rspCoords.paper) {
      setImgCoord(rspCoords.rock)
    }
  }

  // componentDidMount() {
  //   //컴포넌트가 첫 렌더링 된 후 / 여기에 비동기 요청을 많이함 
    
  //   interval = setInterval(changeHand, 50)
  // }

  // componentWillUnmount() {
  //   //컴포넌트가 제거되기 직전 / 비동기 요청 정리를 많이함
  //   clearInterval(interval.current);
  // }

  // componentDidUpdate() {
  //   // 리렌더링된 후 
  // }
 

  return (
    <>
      <div id="computer" style={{background:`url(https://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0` }}></div>
      <div>
        <button id="rock" className="btn" onClick={() => onClickBtn('rock')}>바위</button>
        <button id="scissor" className="btn" onClick={() => onClickBtn('scissor')}>가위</button>
        <button id="paper" className="btn" onClick={() => onClickBtn('paper')}>보</button>
      </div>
      <div>{result}</div>
      <div>현재 {score}점</div>
    </>
  )
  

  // 만약에 버튼 메소드 간단하게 한다면
  // <button id="paper" className="btn" onClick={this.onClickBtn('paper')}>보</button>
  // onClickBtn = (paper) => (e) => {

  // }
}

export default RSP