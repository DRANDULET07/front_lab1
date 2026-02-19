import React, { useState } from 'react'
import ReactDOM from 'react-dom/client'
import './style.css'

type HighlightToggleProps = {
  initialHighlighted?: boolean
}

// Declarative React version of the highlight toggle
function HighlightToggle({ initialHighlighted = false }: HighlightToggleProps) {
  const [isHighlighted, setIsHighlighted] = useState<boolean>(initialHighlighted)

  const handleToggle = () => {
    setIsHighlighted((prev) => !prev)
  }

  return (
    <div className="container">
      <h1>Lab 1.1: Declarative React Highlight Toggle</h1>
      <button type="button" onClick={handleToggle}>
        {isHighlighted ? 'Remove Highlight' : 'Add Highlight'}
      </button>
      <p className={isHighlighted ? 'highlight' : ''}>
        This paragraph uses React state to decide whether the{' '}
        <code>highlight</code> class is applied.
      </p>
    </div>
  )
}

const rootElement = document.querySelector<HTMLDivElement>('#app')

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(
    <React.StrictMode>
      <HighlightToggle initialHighlighted={false} />
    </React.StrictMode>,
  )
}

