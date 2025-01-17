import React, { useState, useEffect } from "react";
import "./Main.scss";
import Buttons from "../components/Buttons";
import Display from "../components/Display";
import handleButtonClick from '../utils/Calculator.js';

const Main = () => {
  const [currentInput, setCurrentInput] = useState('');

  const handleClick = (value) => {
    setCurrentInput((currentInput) => {
      const newInput = handleButtonClick(currentInput, value);
      return newInput;
    });
  };

  useEffect(() => {
  }, [currentInput]);

  return (
    <div>
      <div className="header"></div>
      <div className="content">
        <Display currentInput={currentInput} />
        <Buttons handleButtonClick={handleClick} />
      </div>
      <div className="footer"></div>
    </div>
  );
};


export default Main;
