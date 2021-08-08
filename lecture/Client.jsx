import React from 'react';
import ReactDom from 'react-dom';
import { hot } from 'react-hot-loader/root';

// import Content from './renderTest';
// import Content from './wordRelay/WordRelay.jsx';  // 반복문
// import Content from './baseball/Baseball.jsx';
// import Content from './responseCheck/ResponseCheck.jsx';  //조건문
// import Content from './RSP/RSP.jsx';  // 라이프 싸이클
import Content from './lotto/Lotto.jsx'; // 로또

const Hot = hot(Content)

ReactDom.render(<Hot />, document.querySelector('#root'))