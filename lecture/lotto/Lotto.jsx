import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import Ball from './Ball';

// useMemo 는 값을 기억하고 useCallback은 함수를 기억한다.

function getWinNumbers() {
  console.log('getWinNumbers')
  const candidate = Array(45).fill().map((v, i) => i + 1);
  const shuffle = [];
  while (candidate.length > 0) {
    shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0])
  }
  const bonusNumber = shuffle[shuffle.length - 1];
  const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
  return [...winNumbers, bonusNumber]
}


const Lotto = () => {
  const lottoNumbers = useMemo(() => getWinNumbers(), [])
  const [winNumbers, setWinNumbers] = useState(lottoNumbers);
  const [winBalls, setWinBalls] = useState([]);
  const [bonus, setBonus] = useState(null);
  const [redo, setRedo] = useState(false);

  const timeouts = useRef([]);

  useEffect(() => {
    for(let i = 0; i < winNumbers.length - 1; i++) {
      timeouts.current[i] = setTimeout(() => {
        setWinBalls((prevBalls) => [...prevBalls, winNumbers[i]])
      },(i + 1) * 1000)
    }
    timeouts.current[6] = setTimeout(() => {
      setBonus(winNumbers[6]);
      setRedo(true);
    }, 7000)

    return () => {
      timeouts.current.forEach((v)=> {
        clearTimeout(v);
      })
    }
  }, [timeouts.current]); // 빈배열이라면 componentDidMount 랑 같다. 배열이있으면 마운티드랑 업데이트 둘다 수행
  

  const onClickRedo = useCallback(() => {
    console.log(winNumbers)
    setWinNumbers(getWinNumbers());
    setWinBalls([]);
    setBonus(null);
    setRedo(false);
    timeouts.current = [];
  }, [winNumbers]); // 뭔가 값이 바뀌었을때 실행 될 값을 넣는다.

  // const onClickRedo = () => {
  //   console.log(winNumbers)
  //   setWinNumbers(getWinNumbers());
  //   setWinBalls([]);
  //   setBonus(null);
  //   setRedo(false);
  //   timeouts.current = [];
  // }

  return (
    <>
      <div>당첨 숫자</div>
      <div id="result">
        {winBalls.map((v) => <Ball key={v} number={v} />)}
      </div>
      <div>보너스 번호</div>
      {bonus && <Ball number={bonus} />}
      <button onClick={redo ? onClickRedo : () => {}}>한 번 더!</button>
    </>
  )

}





export default Lotto