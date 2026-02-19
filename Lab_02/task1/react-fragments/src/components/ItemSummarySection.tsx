import { ItemList, type Item } from './ItemList';

const items: Item[] = [
  { id: 1, name: 'Apple' },
  { id: 2, name: 'Banana' },
  { id: 3, name: 'Cherry' },
];

export function ItemSummarySection() {
  return (
    <>
      <h2>Mapped list</h2>
      <ItemList items={items} />
      {/* Summary uses items.length per the assignment requirement. */}
      <p className="summary">Total: {items.length} items</p>
    </>
  );
}

