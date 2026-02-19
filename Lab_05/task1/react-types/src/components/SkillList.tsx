import type { Skill } from '../types';

/**
 * Lab 5.1: Task 3 - Typed SkillList Component
 * Reference: Ch. 6, "Type-checking props" (p. 98)
 */

interface SkillListProps {
  skills: Skill[]; // Array type (Ch. 6, p. 93)
}

const getLevelColor = (level: Skill['level']): string => {
  switch (level) {
    case 'Beginner':
      return '#ff9999';
    case 'Intermediate':
      return '#ffcc99';
    case 'Expert':
      return '#99ff99';
    default:
      return '#cccccc';
  }
};

export const SkillList = ({ skills }: SkillListProps) => {
  return (
    <ul className="skillList">
      {skills.map((skill) => (
        <li key={skill.id} className="skillItem">
          <span className="skillName">{skill.name}</span>
          <span
            className="skillLevel"
            style={{ color: getLevelColor(skill.level) }}
          >
            {' '}
            - {skill.level}
          </span>
        </li>
      ))}
    </ul>
  );
};
