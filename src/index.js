import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
}

function getGreeting(user) {
  if (user)
    return <img src='/images/you.jpg' alt={user.lastName}/>
  else
    return <h1>Hello, Stranger!</h1>
}

//jsx
const element = (
  getGreeting(user)
);

ReactDOM.render(
  //<App />,
  element,
  document.getElementById('root')
);

ReactDOM.render(
  <App />,
  document.getElementById('root2')
);
