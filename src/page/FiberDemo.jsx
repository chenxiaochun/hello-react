import React from "react";
import { Button, Input } from "antd";

class FiberDemo extends React.Component {
  a = 1;
  static b = 2;

  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  tick = () => {
    let n = this.state.number;
    this.setState(
      {
        number: ++n
      },
      () => {
        requestAnimationFrame(this.tick);
      }
    );
  };

  item = comp => {
    return (
      <div
        style={{
          padding: "1px",
          margin: "1px",
          border: "1px solid #ccc"
        }}
      >
        {this.state.number}
        {comp}
      </div>
    );
  };

  componentDidMount() {
    // setInterval(this.tick, 100);
    // requestAnimationFrame(this.tick);
  }

  render() {
    let items = this.item();
    for (let i = 0; i < 1000; i++) {
      items = this.item(items);
    }
    return (
      <div>
        <button onClick={this.tick}>Click Me</button>
        <div
          style={{
            textAlign: "center",
            overflow: "scroll"
          }}
        >
          {items}
        </div>
      </div>
    );
  }
}

let fd = new FiberDemo();
console.log(fd.a, fd.b);

export default FiberDemo;
/**
 * 原文链接：https://mp.weixin.qq.com/s/tCLvRad-WrnFKJiStU7BKw
 */
