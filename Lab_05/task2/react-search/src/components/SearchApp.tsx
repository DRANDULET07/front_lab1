import { useState } from 'react';
import type { User } from '../types';
import { UserCard } from './UserCard';

/**
 * Lab 5.2: Typing State & Event Handlers
 * Reference: Ch. 6, "Typing state" (p. 100) and "Typing event handlers" (p. 101)
 */

export function SearchApp() {
  // Task 1: Typed useState with generics
  // Note: useState<User[]>([]) needs the generic because TS cannot infer User from an empty array (Ch. 6, p. 100)
  const INITIAL_DATA: User[] = [
    { name: 'Alice', email: 'alice@mail.com', age: 25 },
    { name: 'Bob', email: 'bob@mail.com', age: 30 },
    { name: 'Charlie', email: 'charlie@mail.com', age: 28 },
    { name: 'Diana', email: 'diana@mail.com', age: 32 },
    { name: 'Eve', email: 'eve@mail.com', age: 27 },
  ];

  const [users] = useState<User[]>(INITIAL_DATA);
  const [filteredUsers, setFilteredUsers] = useState<User[]>(INITIAL_DATA);
  // Note: useState("") works because TS infers string, but explicit typing is also valid
  const [searchTerm, setSearchTerm] = useState<string>('');

  // Task 2: Typed Event Handlers
  // Ch. 6, p. 101: Typing event handlers
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const term = event.target.value;
    setSearchTerm(term);
    setFilteredUsers(
      users.filter((u) => u.name.toLowerCase().includes(term.toLowerCase()))
    );
  };

  // Task 2: Typed click handler
  const handleClear = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setSearchTerm('');
    setFilteredUsers(users);
  };

  return (
    <div className="searchApp">
      <h1>Lab 5.2 — User Search with Typed State & Events</h1>

      <div className="searchControls">
        <input
          type="text"
          placeholder="Search by name..."
          value={searchTerm}
          onChange={handleSearch}
          className="searchInput"
        />
        <button onClick={handleClear} className="clearButton">
          Clear
        </button>
      </div>

      {/* Task 3: Render filtered users */}
      <div className="results">
        {filteredUsers.length === 0 ? (
          <p className="noResults">No results found</p>
        ) : (
          <div className="userList">
            {filteredUsers.map((user) => (
              <UserCard key={user.email} user={user} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
