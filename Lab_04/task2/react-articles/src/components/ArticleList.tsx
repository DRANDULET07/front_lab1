import { ArticleItem } from './ArticleItem';

/**
 * Task 3: Extract ArticleList Component
 * Following Ch. 5, "Implementing an article list component"
 */

type Article = {
  id: number;
  title: string;
  summary: string;
};

type ArticleListProps = {
  articles: Article[];
  onClickRemove: (id: number) => void;
};

export function ArticleList({ articles, onClickRemove }: ArticleListProps) {
  return (
    <ul className="articleList">
      {articles.map((article) => (
        <ArticleItem
          key={article.id}
          article={article}
          onClickRemove={onClickRemove}
        />
      ))}
    </ul>
  );
}
