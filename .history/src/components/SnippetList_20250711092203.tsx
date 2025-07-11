import { useEffect, useState } from "react";
import Snippet from "./Snippet";

export default function SnippetList() {
  const [snippets, setSnippets] = useState<any>([]);
  useEffect(() => {
    const saved = window.localStorage.getItem("snippets") ?? "";
    if (saved != "") {
      setSnippets(JSON.parse(saved));
    }
  }, []);
  return (
    <ul>
      <li>adaa</li>
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
