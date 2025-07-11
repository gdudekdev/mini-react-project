import { useState } from "react";

export default function Snippet({ snippetInput }: { snippet: any }) {
  const [snippet, setSnippet] = useState<any[]>([]);

  return (
    <ul>
      {snippets.map((snippet) => {
        return <li></li>;
      })}
    </ul>
  );
}
