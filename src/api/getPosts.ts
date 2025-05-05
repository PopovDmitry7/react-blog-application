import { useState, useEffect } from "react";
import { Post } from "../types";

export function getPosts(url: string) {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Status ${res.status}`);

        // wrap the JSON parse in a 1s timeout:
        const delayedData = await new Promise<Post[]>((resolve) => {
          setTimeout(async () => {
            const data = await res.json();
            resolve(data);
          }, 1000);
        });

        setPosts(delayedData);
        setError(null);
      } catch (e: any) {
        setError(e.message);
        setPosts([]);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { posts, loading, error };
}
