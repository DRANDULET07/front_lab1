import { useState } from 'react';

type StepCounterProps = {
  initialValue?: number;
  step?: number;
};

export function StepCounter({ initialValue = 0, step = 1 }: StepCounterProps) {
  // Task 1: Basic state for count, initialized from initialValue prop
  const [count, setCount] = useState<number>(initialValue);

  // Task 2: Additional state variables
  const [history, setHistory] = useState<number[]>([initialValue]);
  const [operationCount, setOperationCount] = useState<number>(0);

  // Task 1: Increment and decrement handlers using step prop
  const handleIncrement = () => {
    const newCount = count + step;
    setCount(newCount);
    // Task 2: Update history and operation count
    setHistory((prev) => [...prev, newCount]);
    setOperationCount((prev) => prev + 1);
  };

  const handleDecrement = () => {
    const newCount = count - step;
    setCount(newCount);
    // Task 2: Update history and operation count
    setHistory((prev) => [...prev, newCount]);
    setOperationCount((prev) => prev + 1);
  };

  // Task 2: Reset handler
  const handleReset = () => {
    setCount(initialValue);
    setHistory([initialValue]);
    setOperationCount(0);
  };

  // Task 2: Get last 5 values from history (or all if fewer than 5)
  const recentHistory = history.slice(-5);

  return (
    <div className="stepCounter">
      <h3 className="counterTitle">
        Counter (initial: {initialValue}, step: {step})
      </h3>

      {/* Task 1: Display current count */}
      <div className="countDisplay">Count: {count}</div>

      {/* Task 1: Increment and decrement buttons */}
      <div className="buttonGroup">
        <button onClick={handleDecrement} className="button">
          Decrement (-{step})
        </button>
        <button onClick={handleIncrement} className="button">
          Increment (+{step})
        </button>
      </div>

      {/* Task 2: Display statistics */}
      <div className="stats">
        <div className="statItem">
          <strong>Total operations:</strong> {operationCount}
        </div>
        <div className="statItem">
          <strong>Recent history</strong> (last 5):{' '}
          {recentHistory.length > 0 ? recentHistory.join(', ') : 'None'}
        </div>
      </div>

      {/* Task 2: Reset button */}
      <button onClick={handleReset} className="button buttonReset">
        Reset
      </button>
    </div>
  );
}
