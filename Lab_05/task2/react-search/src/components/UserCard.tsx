import type { User } from '../types';

/**
 * Lab 5.2: Reuse UserCard component from Lab 5.1 (simplified version)
 */

interface UserCardProps {
  user: User;
}

export const UserCard = ({ user }: UserCardProps) => {
  return (
    <div className="userCard">
      <h3>{user.name}</h3>
      <p>{user.email}</p>
      <p>Age: {user.age}</p>
    </div>
  );
};
