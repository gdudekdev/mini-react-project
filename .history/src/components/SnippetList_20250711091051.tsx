import { use, useState } from "react";
import Snippet from "./Snippet";

export default function SnippetList() {
  const [snippets, setSnippets] = useState<any[]>([]);
 use
  return (
    <ul>
      {snippets.map((snippet, index) => {
        return (
          <li key={index}>
            <Snippet snippet={snippet} />
          </li>
        );
      })}
    </ul>
  );
}
