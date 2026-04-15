import { useMemo } from "react";

interface Props {
  items: string[];
}

function calculateAnalytics(items: string[]): number {
  console.log("Calculating analytics...");

  let result = 0;
  for (let i = 0; i < 10000000; i++) {
    result += Math.sqrt(i);
  }

  return result + items.length;
}

export function AnalyticsChart({ items }: Props) {
  const analytics = useMemo(() => calculateAnalytics(items), [items]);

  console.log("AnalyticsChart render");

  return (
    <div style={{ border: "1px solid blue", padding: "10px" }}>
      <h3>Analytics</h3>
      <p>Value: {analytics}</p>
    </div>
  );
}