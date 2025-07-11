import Snippet from "./Snippet";
import { useSnippets } from "../context/useSnippets";
import { useFilter } from "../context/useFilter";

export default function SnippetList() {
  const { snippets } = useSnippets();
  const { keyword } = useFilter();
  const filteredSnippet = snippets.filter(
    (snippet) =>
      snippet.title.toLowerCase().includes(keyword.toLowerCase()) ||
      snippet.language.toLowerCase().includes(keyword.toLowerCase())
  );

  return (
    <div className="w-[800px] mt-4">
      <hr></hr>
      {filteredSnippet.length} / {snippets.length}
      <ul className="flex flex-col gap-6 mt-4">
        {filteredSnippet.map((snippet, index) => {
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