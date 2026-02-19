import { StepCounter } from './StepCounter';

/**
 * Task 3: Component Composition
 *
 * Props vs State explanation:
 * - Props (initialValue, step) are passed FROM parent TO child components.
 *   They are read-only and define the initial configuration.
 * - State (count, history, operationCount) is managed WITHIN each component.
 *   Each StepCounter instance maintains its own independent state.
 *
 * When we render two StepCounter components with different props,
 * each one initializes its state from its own props, but then manages
 * state changes independently. Changing one counter does not affect the other.
 */
export function CounterApp() {
  return (
    <div className="app">
      <h1>Lab 3.1 — Step Counter with Multiple State</h1>
      <div className="countersContainer">
        {/* Task 3: First counter with initialValue={0} step={1} */}
        <StepCounter initialValue={0} step={1} />

        {/* Task 3: Second counter with initialValue={10} step={5} */}
        <StepCounter initialValue={10} step={5} />
      </div>
    </div>
  );
}
