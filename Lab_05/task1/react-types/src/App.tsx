import { UserCard } from './components/UserCard';
import { SkillList } from './components/SkillList';
import type { User, Skill } from './types';

/**
 * Lab 5.1: App component rendering UserCard and SkillList with sample data
 */

function App() {
  // Sample user data
  const sampleUser: User = {
    name: 'Alice Johnson',
    email: 'alice@example.com',
    age: 28,
  };

  // Sample skills data
  const sampleSkills: Skill[] = [
    { id: 1, name: 'React', level: 'Expert' },
    { id: 2, name: 'TypeScript', level: 'Intermediate' },
    { id: 3, name: 'Node.js', level: 'Beginner' },
    { id: 4, name: 'CSS', level: 'Expert' },
  ];

  return (
    <div className="app">
      <h1>Lab 5.1 — Typed Components & Props Validation</h1>

      <UserCard user={sampleUser} isActive={true}>
        <div className="bio">
          <p>
            <strong>Bio:</strong> Full-stack developer passionate about React and
            TypeScript.
          </p>
        </div>
      </UserCard>

      <UserCard user={sampleUser} isActive={false}>
        <div className="status">
          <p>
            <strong>Status:</strong> Currently inactive (opacity: 0.5)
          </p>
        </div>
      </UserCard>

      <div className="skillsSection">
        <h2>Skills</h2>
        <SkillList skills={sampleSkills} />
      </div>
    </div>
  );
}

export default App;
