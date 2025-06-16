import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Display from './Display';
import Button from './Button';

const Calculator: React.FC = () => {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? num : display + num);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
    } else if (display.indexOf('.') === -1) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const performOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string): number => {
    switch (operation) {
      case '+':
        return firstValue + secondValue;
      case '-':
        return firstValue - secondValue;
      case '×':
        return firstValue * secondValue;
      case '÷':
        return firstValue / secondValue;
      case '=':
        return secondValue;
      default:
        return secondValue;
    }
  };

  const handleEquals = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const buttons = [
    ['C', '±', '%', '÷'],
    ['7', '8', '9', '×'],
    ['4', '5', '6', '-'],
    ['1', '2', '3', '+'],
    ['0', '.', '=']
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="glass-morphism rounded-3xl p-8 shadow-liquid max-w-sm mx-auto"
    >
      <Display value={display} />
      
      <div className="grid grid-cols-4 gap-4 mt-6">
        {buttons.flat().map((btn, index) => {
          if (btn === '0') {
            return (
              <Button
                key={index}
                value={btn}
                onClick={() => inputNumber(btn)}
                className="col-span-2"
                variant="number"
              />
            );
          }
          
          let variant: 'number' | 'operator' | 'function' = 'number';
          let onClick = () => inputNumber(btn);

          if (['+', '-', '×', '÷'].includes(btn)) {
            variant = 'operator';
            onClick = () => performOperation(btn);
          } else if (btn === '=') {
            variant = 'operator';
            onClick = handleEquals;
          } else if (btn === 'C') {
            variant = 'function';
            onClick = clear;
          } else if (btn === '.') {
            onClick = inputDecimal;
          } else if (['±', '%'].includes(btn)) {
            variant = 'function';
            onClick = () => {}; // Placeholder for additional functions
          }

          return (
            <Button
              key={index}
              value={btn}
              onClick={onClick}
              variant={variant}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default Calculator;