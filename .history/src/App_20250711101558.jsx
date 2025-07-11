import "./App.css";
import Form from "./components/Form";
import SnippetList from "./components/SnippetList";
import Search from "./components/Search";
import { SnippetProvider } from "./context/useSnippets";
import { FilterProvider } from "./context/useFilter";

function App() {
  return (
    <SnippetProvider>
      <FilterProvider >
        
      </FilterProvider>
      <div className="w-full flex flex-col items-center">
        <Search />
        <Form />
        <SnippetList />
      </div>
    </SnippetProvider>
  );
}

export default App;
