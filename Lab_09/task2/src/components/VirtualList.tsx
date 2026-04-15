import { useState, useMemo, useCallback } from "react";
import { List } from "react-window";
import { generateItems } from "../utils/generateItems";

interface VirtualListProps {
  itemCount?: number;
  height?: number;
}

export function VirtualList({
  itemCount = 10000,
  height = 500,
}: VirtualListProps) {
  const [filter, setFilter] = useState("");

  const items = useMemo(() => generateItems(itemCount), [itemCount]);

  const filteredItems = useMemo(() => {
    if (!filter) return items;

    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(filter.toLowerCase()) ||
        item.category.toLowerCase().includes(filter.toLowerCase())
    );
  }, [items, filter]);

  const handleFilterChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setFilter(e.target.value);
    },
    []
  );

  return (
    <div>
      <h2>Virtualized List</h2>

      <input
        type="text"
        placeholder="Filter items..."
        value={filter}
        onChange={handleFilterChange}
        style={{
          marginBottom: "10px",
          padding: "8px",
          width: "300px",
        }}
      />

      <div style={{ marginBottom: "10px" }}>
        Showing {filteredItems.length} of {items.length} items
      </div>

      <div style={{ height: `${height}px` }}>
        <List
          rowCount={filteredItems.length}
          rowHeight={80}
          rowComponent={({ index, style }) => {
            const item = filteredItems[index];

            return (
              <div
                style={{
                  ...style,
                  borderBottom: "1px solid #444",
                  padding: "10px",
                  boxSizing: "border-box",
                }}
              >
                <h4>{item.title}</h4>
                <p>{item.description}</p>
                <span>{item.category}</span>
              </div>
            );
          }}
          rowProps={{}}
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
}