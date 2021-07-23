import React , {Component} from 'react';


class ResponseCheck extends Component {
  state = {
    state: 'waiting',
    message: '클랙해서 시작하세요.',
    result : []

  };

  timeout;
  startTime;
  endTime;

  onClickScreen = () => {
    const { state, message, result } = this.state;
    if(state === 'waiting') {
      this.setState({
        state: 'ready',
        message: '초록색이 되면 클릭하세요.'
      });
      this.timeout = setTimeout(()=> {
        this.setState({
          state: 'now',
          message: '지금 클릭'
        });
        this.startTime = new Date();
      }, Math.floor(Math.random() * 1000) + 2000) // 2초 ~ 3초 랜덤
    }
    if(state === 'ready') {
      clearTimeout(this.timeout);
      this.setState({ //성급하게 체크
        state: 'waiting',
        message: '너무 빠르게 클릭하였습니다. 초록색이 된 후에 클릭하세요'
      })
    }
    if(state === 'now') { //반응속도 체크
      this.endTime = new Date();
      this.setState( (prevState) => {
        return {
          state: 'waiting',
          message: '클릭해서 시작하세요.',
          result: [...prevState.result, this.endTime - this.startTime]
        }
       
      })
    }
  }
  renderAverage = () => {
    const { result } = this.state;
    return result.length === 0 
    ? null 
    : <div>평균 시간 : {result.reduce((a, c) => a + c) / result.length}ms</div>
  }

  render() {
    return (
      <>
        <div id="screen" className={this.state.state} onClick={this.onClickScreen}>
          {this.state.message}
        </div>
        {/* 리액트 조건문 */}
        {/* {this.state.result.length === 0 
          ? null 
          : <div>평균 시간 : {this.state.result.reduce((a, c) => a + c) / this.state.result.length}ms</div>
        } */}
        {this.renderAverage()}
       
      </>
    )
  }
}


export default ResponseCheck;