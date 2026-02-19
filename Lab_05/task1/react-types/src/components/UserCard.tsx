import React from 'react';
import type { User } from '../types';

/**
 * Lab 5.1: Task 2 - Typed UserCard Component
 * Reference: Ch. 6, "Type-checking props" (p. 98-100)
 */

interface UserCardProps {
  user: User;
  isActive?: boolean; // optional prop (Ch. 6, p. 99)
  children: React.ReactNode; // any renderable content (Ch. 6, p. 99)
}

export const UserCard = ({
  user,
  isActive = true, // default value
  children,
}: UserCardProps) => {
  return (
    <div className="userCard" style={{ opacity: isActive ? 1 : 0.5 }}>
      <h2>{user.name}</h2>
      <p>
        {user.email} | Age: {user.age}
      </p>
      {children}
    </div>
  );
};
