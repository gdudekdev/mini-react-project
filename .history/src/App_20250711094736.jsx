import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import SnippetList from "./components/SnippetList";

function App() {
  return (
    <
    <div className="w-full flex flex-col items-center">
      <Form />
      <SnippetList />
    </div>
  );
}

export default App;
