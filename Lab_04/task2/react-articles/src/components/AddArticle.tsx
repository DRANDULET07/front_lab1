/**
 * Task 2: Extract AddArticle Component
 * Following Ch. 5, "Implementing an AddArticle component"
 */

type AddArticleProps = {
  name: string;
  title: string;
  summary: string;
  onChangeTitle: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSummary: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClickAdd: () => void;
};

export function AddArticle({
  name,
  title,
  summary,
  onChangeTitle,
  onChangeSummary,
  onClickAdd,
}: AddArticleProps) {
  return (
    <section className="addArticleSection">
      <h1>{name}</h1>
      <div className="formInputs">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={onChangeTitle}
          className="inputField"
        />
        <input
          type="text"
          placeholder="Summary"
          value={summary}
          onChange={onChangeSummary}
          className="inputField"
        />
        <button onClick={onClickAdd} className="addButton">
          Add
        </button>
      </div>
    </section>
  );
}
