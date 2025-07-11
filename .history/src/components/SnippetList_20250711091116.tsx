import { use, useEffect, useState } from "react";
import Snippet from "./Snippet";

export default function SnippetList() {
  const [snippets, setSnippets] = useState<any[]>([]);
 useEffect(()=>{
      const saved =  window.localStorage.getItem
 })
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
