import { useState, useEffect } from "react";
import { CommentData } from "../types"

export default function getPostComments(url: string) {
  const [comments, setComments] = useState<CommentData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`Status ${res.status}`);
        setComments(await res.json());
        setError(null);
      } catch (e: any) {
        setError(e.message);
        setComments([]);
      } finally {
        setLoading(false);
      }
    })();
  }, [url]);

  return { comments, loading, error };
}
