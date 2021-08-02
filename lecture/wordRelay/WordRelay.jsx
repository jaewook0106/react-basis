const React = require('react');
const { useState, useRef } = React;
// const styled = require('styled-components');

const WordRelay = () => {
  const [word, setWord] = useState('에드워드');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputRef = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if(word[word.length - 1] === value[0]) {
      setWord(value)
      setResult('딩동댕')
      setValue('');
      inputRef.current.focus();
    } else {
      setResult('땡')
      setValue('');
      inputRef.current.focus();
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value)
  };




  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="inp"></label>
        <input id="inp" className="inp_word" ref={inputRef} value={value} onChange={onChangeInput} />
        <button type="button">입력</button>
      </form>
      <div>{result}</div>
    </>
  )
  
}

module.exports = WordRelay;
