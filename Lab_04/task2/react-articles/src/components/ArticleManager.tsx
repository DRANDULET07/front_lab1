import { useState } from 'react';
import { AddArticle } from './AddArticle';
import { ArticleList } from './ArticleList';

/**
 * Lab 4.2: Refactoring — ArticleList, ArticleItem, AddArticle
 *
 * This component demonstrates refactoring from monolithic to reusable components
 * following Ch. 5 patterns:
 * 1. Extract JSX into separate components (AddArticle, ArticleList, ArticleItem)
 * 2. Pass data and event handlers as props
 * 3. Move local state (like article expansion) into child components
 */

type Article = {
  id: number;
  title: string;
  summary: string;
};

export function ArticleManager() {
  // Task 1: State for articles array
  const [articles, setArticles] = useState<Article[]>([]);

  // Task 1: State for form inputs
  const [title, setTitle] = useState<string>('');
  const [summary, setSummary] = useState<string>('');

  // Task 1: Function to add new article
  const onClickAdd = () => {
    if (!title.trim() || !summary.trim()) {
      return;
    }
    const newArticle: Article = {
      id: Date.now(), // Simple ID generation
      title: title.trim(),
      summary: summary.trim(),
    };
    setArticles([...articles, newArticle]);
    setTitle('');
    setSummary('');
  };

  // Task 1: Function to remove article by id
  const onClickRemove = (id: number) => {
    setArticles(articles.filter((article) => article.id !== id));
  };

  return (
    <div className="articleManager">
      {/* Task 2: Use AddArticle component instead of inline form JSX */}
      <AddArticle
        name="Articles"
        title={title}
        summary={summary}
        onChangeTitle={(e) => setTitle(e.target.value)}
        onChangeSummary={(e) => setSummary(e.target.value)}
        onClickAdd={onClickAdd}
      />

      {/* Task 3: Use ArticleList component */}
      <ArticleList articles={articles} onClickRemove={onClickRemove} />
    </div>
  );
}
