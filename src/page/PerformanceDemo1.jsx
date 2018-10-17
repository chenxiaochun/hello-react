import React from "react";
import { Button, Input } from "antd";

const FancyButton = React.forwardRef((props, ref) => (
  <Input ref={ref} className="FancyButton" />
));

export default class PerformanceDemo1 extends React.Component {
  render() {
    const ref = React.createRef();
    document.querySelector(ref.current && ref.current.input);
    return (
      <div>
        <FancyButton ref={ref}>Click me!</FancyButton>
      </div>
    );
  }
}

/**
 * 原文链接：https://mp.weixin.qq.com/s/tCLvRad-WrnFKJiStU7BKw
 */
