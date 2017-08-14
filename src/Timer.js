import React from 'react';

class Timer extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
      counter: 0,
    };
  }

  // 组件被挂载后立即调用, 更新state将导致重新渲染组件
  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
    this.counter = 10;
  }
  // 组件被卸载(销毁)前立即调用
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  tick() {
    this.setState((prevState, props) =>
      ({ date: new Date(), counter: prevState.counter + props.increment }));
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.props.date.toLocaleTimeString()} in {this.props.country}</h2>
        <h2>It is {this.state.date.toLocaleTimeString()} in {this.props.country}</h2>
        <h2>计数: {this.state.counter}</h2>
      </div>
    );
  }
}

export default Timer;
