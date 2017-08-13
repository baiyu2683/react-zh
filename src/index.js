import React from 'react';
import ReactDOM from 'react-dom';
import Timer from './Timer';
import App from './App';
import './index.css';

ReactDOM.render(
  <App />,
  document.getElementById('root'),
);

// 一秒钟更新一次
function tick() {
  ReactDOM.render(
    <Timer country="china" />,
    document.getElementById('timer'),
  );
}
tick();
setInterval(tick, 1000);
