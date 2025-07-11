import { useState } from "react";
import Snippet from "./Snippet";

export default function SnippetList() {
  const [snippets, setSnippets] = useState<any[]>([]);

  return (
    <ul>
      {snippets.map((snippet) => {
        return (
          <li key={index}>
            <Snippet snippet={snippet}/>
          </li>
        );
      })}
    </ul>
  );
}
