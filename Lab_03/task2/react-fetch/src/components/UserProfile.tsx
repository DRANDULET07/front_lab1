import { useState, useEffect } from 'react';

type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  address: {
    city: string;
    street: string;
  };
};

type UserProfileProps = {
  userId: number;
};

export function UserProfile({ userId }: UserProfileProps) {
  // Task 1: State for user, loading, and error
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Task 1 & 2 & 3: useEffect with dependency array including userId
  useEffect(() => {
    // Task 2: Create AbortController for cleanup
    const abortController = new AbortController();

    // Task 1: Set loading to true before fetch
    setLoading(true);
    setError(null);

    // Task 1: Fetch user data from API
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`, {
      signal: abortController.signal,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Failed to fetch user: ${response.statusText}`);
        }
        return response.json();
      })
      .then((data: User) => {
        // Task 1: Handle success: update user, set loading to false
        setUser(data);
        setLoading(false);
      })
      .catch((err) => {
        // Task 2: Don't set error if request was aborted
        if (err.name === 'AbortError') {
          return;
        }
        // Task 1: Handle errors: set error message, set loading to false
        setError(err.message || 'Failed to fetch user data');
        setLoading(false);
      });

    // Task 2: Cleanup function that aborts the fetch
    return () => {
      abortController.abort();
    };
    // Task 3: Dependency array includes userId - when userId changes, fetch new user
  }, [userId]);


  // Task 1: Display loading state
  if (loading) {
    return (
      <div className="userProfile">
        <div className="loading">Loading...</div>
      </div>
    );
  }

  // Task 1: Display error state
  if (error) {
    return (
      <div className="userProfile">
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  // Task 1: Display user information when data is loaded
  if (!user) {
    return (
      <div className="userProfile">
        <div className="noData">No user data available</div>
      </div>
    );
  }

  return (
    <div className="userProfile">
      <h3 className="profileTitle">User Profile</h3>
      <div className="profileContent">
        <div className="profileField">
          <strong>Name:</strong> {user.name}
        </div>
        <div className="profileField">
          <strong>Email:</strong> {user.email}
        </div>
        <div className="profileField">
          <strong>Phone:</strong> {user.phone}
        </div>
        <div className="profileField">
          <strong>Website:</strong> {user.website}
        </div>
        <div className="profileField">
          <strong>Address:</strong> {user.address.street}, {user.address.city}
        </div>
      </div>
    </div>
  );
}
