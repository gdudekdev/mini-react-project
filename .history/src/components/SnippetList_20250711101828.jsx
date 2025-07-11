import Snippet from "./Snippet";
import { useSnippets } from "../context/useSnippets";
import { useFilter } from "../context/useFilter";

export default function SnippetList() {
  const { snippets } = useSnippets();
  const { keyword } = useFilter();
  const filteredSnippet = snippets.filter(
    (snippet) =>
      snippet.title.toLowerCase().contains(keyword.toLowerCase()) ||
      snippet.language.toLowerCase().contains(keyword.toLowerCase())
  );
  return (
    <div className="w-[800px]">
      <div className="h-[2px] border-1 border-white w-full mt-4"></div>
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
