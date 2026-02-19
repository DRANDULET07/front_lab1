import { useState } from 'react';

/**
 * Task 3: Extract ArticleItem Component
 * Following Ch. 5, "Implementing an article item component"
 *
 * ArticleItem manages its own expansion state (useState for isOpened)
 * instead of using parent's display prop. This improves performance
 * as each item controls its own state independently.
 */

type Article = {
  id: number;
  title: string;
  summary: string;
};

type ArticleItemProps = {
  article: Article;
  onClickRemove: (id: number) => void;
};

export function ArticleItem({ article, onClickRemove }: ArticleItemProps) {
  // Task 3: Use useState for local isOpened state (instead of article.display from parent)
  const [isOpened, setIsOpened] = useState<boolean>(false);

  // Task 3: Move toggle logic into ArticleItem
  const onClickToggle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    setIsOpened((prev) => !prev);
  };

  return (
    <li className="articleItem">
      <div className="articleHeader">
        <a
          href={`#${article.id}`}
          title="Toggle Summary"
          onClick={onClickToggle}
          className="articleTitle"
        >
          {article.title}
        </a>
        <button
          onClick={() => onClickRemove(article.id)}
          className="removeButton"
        >
          ×
        </button>
      </div>
      <p
        style={{ display: isOpened ? 'block' : 'none' }}
        className="articleSummary"
      >
        {article.summary}
      </p>
    </li>
  );
}
