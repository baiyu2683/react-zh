import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';
import App from './App';
import Welcome from './Welcome';
import './index.css';

// app组件
ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

// 时间组件，一秒钟更新一次
const increment = 1;
// function tick() {
ReactDOM.render(
  <Timer country="china" date={new Date()} increment={increment} />,
  document.getElementById('timer'),
);
// }
// tick();
// setInterval(tick, 1000);

// Welcome组件
const ele = (
  <div>
    <Welcome name="zhangsan" />
    <Welcome name="lisi" />
    <Welcome name="wangwu" />
  </div>
);
ReactDOM.render(
  ele,
  document.getElementById('welcome'),
);
