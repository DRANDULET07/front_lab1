import { useState } from 'react';
import { UserProfile } from './UserProfile';

/**
 * Task 3: Parent component that manages userId state
 *
 * Dependency Array Explanation:
 * The userId prop is included in the useEffect dependency array in UserProfile
 * because we want the effect to re-run whenever userId changes. This ensures
 * that when the user clicks a button to change the userId, a new fetch request
 * is triggered automatically. Without userId in the dependency array, the effect
 * would only run once on mount, and changing userId wouldn't trigger a new fetch.
 *
 * Cleanup Explanation:
 * The cleanup function (returned from useEffect) calls abortController.abort()
 * to cancel any pending fetch requests. This prevents:
 * 1. Memory leaks from unresolved promises
 * 2. State updates on unmounted components
 * 3. Race conditions when userId changes quickly
 */
export function UserProfileApp() {
  // Task 3: Manage userId state (initial: 1)
  const [userId, setUserId] = useState<number>(1);

  // Task 3: Buttons to change userId
  const handleUserChange = (newUserId: number) => {
    setUserId(newUserId);
  };

  // Task 2: Refresh handler that fetches a random user
  const handleRefresh = () => {
    const randomUserId = Math.floor(Math.random() * 10) + 1;
    setUserId(randomUserId);
  };

  return (
    <div className="app">
      <h1>Lab 3.2 — User Profile with useEffect</h1>

      <div className="controls">
        <div className="buttonGroup">
          <button
            onClick={() => handleUserChange(1)}
            className={`button ${userId === 1 ? 'active' : ''}`}
          >
            User 1
          </button>
          <button
            onClick={() => handleUserChange(2)}
            className={`button ${userId === 2 ? 'active' : ''}`}
          >
            User 2
          </button>
          <button
            onClick={() => handleUserChange(3)}
            className={`button ${userId === 3 ? 'active' : ''}`}
          >
            User 3
          </button>
        </div>

        {/* Task 2: Refresh button */}
        <button onClick={handleRefresh} className="button buttonRefresh">
          Refresh (Random User)
        </button>
      </div>

      {/* Task 3: Render UserProfile with userId prop */}
      <UserProfile userId={userId} />
    </div>
  );
}
