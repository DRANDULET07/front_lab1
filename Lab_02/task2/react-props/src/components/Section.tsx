import type { ReactNode } from 'react';

type SectionProps = {
  title: string;
  children: ReactNode;
};

export function Section({ title, children }: SectionProps) {
  return (
    <>
      {/* Fragment wrapper avoids an extra <div> in the DOM. */}
      <h2 className="sectionTitle">{title}</h2>
      {children}
    </>
  );
}

