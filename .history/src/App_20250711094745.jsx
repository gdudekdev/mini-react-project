import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import SnippetList from "./components/SnippetList";
import { SnippetProvider } from "./context/useSnippets";

function App() {
  return (
    <SnippetProvider>
      <div className="w-full flex flex-col items-center">
        <Form />
        <SnippetList />
      </div>
    </SnippetProvider>
  );
}

export default App;
