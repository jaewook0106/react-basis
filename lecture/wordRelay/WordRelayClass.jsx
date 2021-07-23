const React = require('react');
const { Component, createRef } = React; //createRef


class WordRelay extends React.Component {
  state = {
    word: '에드워드',
    value: '',
    result: ''
  }

  onSubmitForm = (e) => {
    e.preventDefault();
    if(this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: '딩동댕',
        word: this.state.value,
        value: ''
      })
      this.input.focus();
      // createRef 쓸 경우 훅스처럼 ref 처리
      // this.input.current.focus();

    } else {
      this.setState({
        result: '땡',
        value: ''
      })
      this.input.focus();
    }
  };

  onChangeInput = (e) => {
    this.setState({ value: e.target.value })
  };

  input;
  onRefInput = (c) => {
    // 함수라도 ref를 사용할때 다른동작을 넣을 수도 있다.
    this.input = c;
  };

  //createRef 쓸경우 훅스 처럼 ref 처리 가능
  // onRefInput = createRef();

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
          <button>입력</button>
        </form>
        <div>{this.state.result}</div>
      </>
    )
  }
}

module.exports = WordRelay;
