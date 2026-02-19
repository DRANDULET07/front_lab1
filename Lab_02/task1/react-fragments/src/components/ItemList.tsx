export type Item = {
  id: number;
  name: string;
};

export function ItemList({ items }: { items: Item[] }) {
  return (
    <ul className="list">
      {items.map((item) => (
        <li key={item.id} className="listItem">
          {item.name}
        </li>
      ))}
    </ul>
  );
}

