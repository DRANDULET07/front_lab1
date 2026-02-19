import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

type CounterProps = {
  initialValue?: number
}

// Simple Counter component using React state and re-rendering
function Counter({ initialValue = 0 }: CounterProps) {
  const [value, setValue] = useState<number>(initialValue)

  const handleIncrement = () => {
    setValue((prev) => prev + 1)
  }

  const handleDecrement = () => {
    setValue((prev) => prev - 1)
  }

  return (
    <div className="counter-container">
      <h1>Lab 1.2: React Counter</h1>
      <p className="counter-value">Current value: {value}</p>
      <div className="counter-actions">
        <button type="button" onClick={handleDecrement}>
          Decrement
        </button>
        <button type="button" onClick={handleIncrement}>
          Increment
        </button>
      </div>
    </div>
  )
}

const rootElement = document.querySelector<HTMLDivElement>('#app')

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <Counter initialValue={0} />
    </React.StrictMode>,
  )
}

