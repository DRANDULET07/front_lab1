/**
 * Lab 5.1: Task 1 - Interface Definitions
 * Reference: Ch. 6, "Interfaces and type aliases" (p. 96-97)
 */

// Interface for user data (Ch. 6, p. 96)
// Use interface for object shapes
export interface User {
  name: string;
  email: string;
  age: number;
}

// Union type alias for skill level (Ch. 6, p. 97)
// Use type alias for unions, intersections, tuples, and primitives
export type SkillLevel = 'Beginner' | 'Intermediate' | 'Expert';

// Interface for skill data
export interface Skill {
  id: number;
  name: string;
  level: SkillLevel;
}
