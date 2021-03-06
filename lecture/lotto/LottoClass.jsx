import React, { Component } from 'react';
import Ball from './Ball';

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


class Lotto extends Component {
  state = {
    winNumbers: getWinNumbers(),
    winBalls: [],
    bonus: null,
    redo: false
  }

  timeouts = [];

  runTimeouts = () => {
    const { winNumbers } = this.state;
    console.log('winNumbers', winNumbers)
    for(let i = 0; i < winNumbers.length - 1; i++) {
      this.timeouts[i] = setTimeout(() => {
        
        this.setState((prevState) => {
          return {
            winBalls: [...prevState.winBalls, winNumbers[i]]
          }
          
        })
      },(i + 1) * 1000)
    }
    this.timeouts[6] = setTimeout(() => {
      this.setState( {
        bonus: winNumbers[6],
        redo: true
      })
    }, 7000)
  }

  componentDidMount() {
    console.log('componentDidMount')
    this.runTimeouts();
    
  }

  componentWillUnmount() {
    console.log('componentWillUnmount')
    this.timeouts.forEach((v)=> {
      clearTimeout(v);
    })
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate')
    if(this.state.winBalls.length === 0) {
      this.runTimeouts();
    }
  }

  onClickRedo = () => {
    this.setState({
      winNumbers: getWinNumbers(),
      winBalls: [],
      bonus: null,
      redo: false
    })
    this.timeouts = [];
  }
  
  render() {
    const {winBalls, bonus, redo } = this.state;
    return (
      <>
        <div>당첨 숫자</div>
        <div id="result">
          {winBalls.map((v) => <Ball key={v} number={v} />)}
        </div>
        <div>보너스 번호</div>
        {bonus && <Ball number={bonus} />}
        <button onClick={redo ? this.onClickRedo : () => {}}>한 번 더!</button>
      </>
    )
  }
}


export default Lotto