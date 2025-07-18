import { FilterProvider } from "../context/useFilter";
import { HighlightProvider } from "../context/useHighlight";
import { SnippetProvider } from "../context/useSnippets";
import DisconnectBtn from "./DisconnectBtn";
import Form from "./Form";
import Highlighter from "./Highlighter";
import Search from "./Search";
import SnippetList from "./SnippetList";

export default function Main() {
  return (
    <SnippetProvider>
      <FilterProvider>
        <HighlightProvider>
          <Highlighter />
          <div className="w-full flex flex-col items-center">
            <DisconnectBtn />
            <Search />
            <Form />
            <SnippetList />
          </div>
        </HighlightProvider>
      </FilterProvider>
    </SnippetProvider>
  );
}
