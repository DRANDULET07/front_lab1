import { useMemo } from "react";
import { generateItems } from "../utils/generateItems";

interface RegularListProps {
  itemCount?: number;
}

export function RegularList({ itemCount = 10000 }: RegularListProps) {
  const items = useMemo(() => generateItems(itemCount), [itemCount]);

  return (
    <div>
      <h2>Regular List</h2>
      <p>Rendering all {items.length} items</p>

      <div
        style={{
          height: "500px",
          overflowY: "scroll",
          border: "1px solid gray",
          padding: "10px",
        }}
      >
        {items.map((item) => (
          <div
            key={item.id}
            style={{
              borderBottom: "1px solid #444",
              padding: "10px 0",
            }}
          >
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <span>{item.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
}