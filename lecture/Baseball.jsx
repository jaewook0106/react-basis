import React, { useState } from 'react';
// const { useState, useRef } = React;
import BaseballTry from './BaseballTry';

function getNumbers() {
  const candidate = [1,2,3,4,5,6,7,8,9];
  const arr = [];
  
  for (let i = 0; i < 4; i+= 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)),1)[0]
    arr.push(chosen);
  }
  return arr;
} // this 를 안쓰거나 공통으로 쓰는거는 밖으로 뺀다 


const Baseball = () => {
  const [result, setResult] = useState('');
  const [tries, setTries] = useState([]);
  const [value, setValue] = useState('');
  const [answer, setAnswer] = useState(getNumbers());

  const onSubmitFrom = (e) => {
    
    e.preventDefault();
    if(value === answer.join('')) {
      setResult('홈런');
      setTries( (prevTries) => {
        return [...prevTries, { try: value, result: '홈런!'}]
      })
      
      // alert('게임을 다시 시작합니다.')
      // setValue('');
      // setAnswer(getNumbers());
      // setTries([]);

    } else { // 답이 틀리다
      const answerArr = value.split('').map( item => parseInt(item))
      let strike = 0;
      let ball = 0;
      if(tries.length >= 9) {
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join('')}`);
        alert('게임을 다시 시작합니다.')
        setValue('');
        setAnswer(getNumbers());
        setTries([]);
      } else {
        for( let i = 0; i < 4; i+=1) {
          if(answerArr[i] === answer[i]) {
            strike += 1
          } else if(answer.includes(answerArr[i])) {
            ball += 1;
          }
          
        }
        setTries((prevTries) => {
          return [...prevTries, {try: value, result: `${strike} 스트라이트, ${ball} 볼`}]
        })
        setValue('');
      }
    }
  }

  const onChangeInput = (e) => {

    setValue(e.target.value);
  }

  return (
    <>
      <h1>{value}</h1>
      {answer}
      <form onSubmit={onSubmitFrom}>
        <input maxLength={4} value={value} onChange={onChangeInput}/>
        <button type="button">입력</button>
      </form>
      <div>시도: {tries.length}</div>
      
      <ul>
        {tries.map((item, idx) => {
          return (
            <BaseballTry key={item + idx} item={item} idx={idx} />
          )
        })}
      </ul>
    </>
  )
}

export default Baseball;



// exports const hello = ''
// exprots const bye = ''  // import { hello, bye } from ''

// exports default aaa  // import aaa from ''
