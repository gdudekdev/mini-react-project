import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import SnippetList from "./components/SnippetList";

function App() {
  return (
    <>
      <Form />
      <SnippetList />
    </>
  );
}

export default App;
