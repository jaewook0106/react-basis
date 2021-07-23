import React, { Component } from 'react';
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

class Baseball extends Component {

  state = {
    result : '',
    value: '',
    tries: [],
    answer: getNumbers()
  }

  onSubmitFrom = (e) => {
    
    e.preventDefault();
    if(this.state.value === this.state.answer.join('')) {
      this.setState((prevState) => {
        return {
          result: '홈런',
          tries: [...prevState.tries, { try: this.state.value, result: '홈런!'}]
        }
        
        
      })
      // alert('게임을 다시 시작합니다.')
      // this.setState({
      //   value: '',
      //   answer: getNumbers(),
      //   tries: []
      // })
    } else { // 답이 틀리다
      const answerArr = this.state.value.split('').map( item => parseInt(item))
      let strike = 0;
      let ball = 0;
      if(this.state.tries.length >= 9) {
        this.setState({
          result: `10번 넘게 틀려서 실패! 답은 ${this.state.answer.join('')}`
        });
        alert('게임을 다시 시작합니다.')
        this.setState({
          value: '',
          answer: getNumbers(),
          tries: []
        })
      } else {
        for( let i = 0; i < 4; i+=1) {
          if(answerArr[i] === this.state.answer[i]) {
            strike += 1
          } else if(this.state.answer.includes(answerArr[i])) {
            ball += 1;
          }
          
        }
        this.setState( (prevState) => {
          return {
            tries: [...prevState.tries, {try: this.state.value, result: `${strike} 스트라이트, ${ball} 볼`}],
            value: ''
          }
         
        })
      }
    }
  }

  onChangeInput = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  render() {
    // const { value, tries, answer } = this.state;
    return (
      <>
        <h1>{this.state.value}</h1>
        {this.state.answer}
        <form onSubmit={this.onSubmitFrom}>
          <input maxLength={4} value={this.state.value} onChange={this.onChangeInput}/>
          <button type="button">입력</button>
        </form>
        <div>시도: {this.state.tries.length}</div>
        
        <ul>
          {this.state.tries.map((item, idx) => {
            return (
              <BaseballTry key={item + idx} item={item} idx={idx} />
            )
          })}
        </ul>
      </>
    )
  }
}

export default Baseball;



// exports const hello = ''
// exprots const bye = ''  // import { hello, bye } from ''

// exports default aaa  // import aaa from ''
