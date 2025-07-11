import { useEffect, useState } from "react";
import Snippet from "./Snippet";

export default function SnippetList() {
  const [snippets, setSnippets] = useState<any>([]);
  useEffect(() => {
    const saved = window.localStorage.getItem("snippets") ?? "";
    if (saved != "") {
      console.log(saved);
      setSnippets(JSON.parse(saved));
    }
  }, []);
  console.log(snippets);
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
