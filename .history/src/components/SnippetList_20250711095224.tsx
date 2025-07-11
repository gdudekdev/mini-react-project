import { useEffect, useState } from "react";
import Snippet from "./Snippet";
import { useSnippets } from "../context/useSnippets";

export default function SnippetList() {
  const {snippets} = useSnippets();
  return (
    <div className="w-[800px]">
      <div className="h-[2px] border-1 border-white w-full mt-4"></div>
      <ul className="flex flex-col gap-6 mt-4">
        {snippets.map((snippet, index) => {
          return (
            <li key={index}>
              <Snippet snippet={snippet} />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
