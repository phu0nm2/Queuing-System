import React from "react";
import { Button } from "antd";
import "./styles.scss";
interface IProps {
  className?: any;
  text?: any;
}
const ButtonCostum: React.FC<IProps> = ({ className, text }) => {
  return (
    <>
      <Button className={`btn ${className}`}>
        <span>{text}</span>
      </Button>
    </>
  );
};

export const ButtonOutline: React.FC<IProps> = ({ className, text }) => {
  return (
    <>
      <Button className={`btn--outline ${className}`}>
        <span>{text}</span>
      </Button>
    </>
  );
};
export default ButtonCostum;
