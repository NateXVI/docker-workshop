import React, { useEffect, useState } from "react";

export function PageViews() {
  const [views, setViews] = useState<number | null>(null);

  async function fetchViews() {
    const response = await fetch("/api/view");
    if (!response.ok) {
      console.error("Failed to fetch views");
      return;
    }
    const data = await response.json();
    setViews(data.count);
  }

  useEffect(() => {
    fetchViews();
  }, []);

  return (
    <div className="p-4">
      <p>views: {views === null ? "" : views}</p>
    </div>
  );
}
