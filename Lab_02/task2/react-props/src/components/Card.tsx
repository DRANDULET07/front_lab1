import type { ReactNode } from 'react';

type CardProps = {
  title: string;
  className?: string;
  children: ReactNode;
};

export function Card({ title, className, children }: CardProps) {
  const classes = ['card', className].filter(Boolean).join(' ');

  return (
    <article className={classes}>
      <h3 className="cardTitle">{title}</h3>
      <div className="cardBody">{children}</div>
    </article>
  );
}

