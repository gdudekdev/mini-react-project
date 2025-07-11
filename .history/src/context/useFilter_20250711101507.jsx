import { createContext, useContext, useState, useEffect } from "react";

export const FilterContext = createContext({
  keyword : string,
  setKeyword : (prev)=>{}
});


export function FilterProvider({ children }) {
  const [keyword, setKeyword] = useState("");


  const deleteSnippet = (snippetId) => {
    setSnippets((prevSnippets) => prevSnippets.filter((snippet) => snippet.id !== snippetId));
  };

  const updateSnippet = (snippetId, snippetData) => {
    const updatedSnippets = snippets.map((snippet) =>
      snippet.id === snippetId
        ? {
            ...snippet,
            ...snippetData,
            updatedAt: new Date().toISOString(),
          }
        : snippet
    );
    setSnippets(updatedSnippets);
    localStorage.setItem("snippets", JSON.stringify(updatedSnippets));
  };


  const contextValue = {
    snippets,
    loading,
    addSnippet,
    deleteSnippet,
    updateSnippet,
  };

  return (
    <SnippetContext.Provider value={contextValue}>{children}</SnippetContext.Provider>
  );
}

export function useSnippets() {
  const context = useContext(SnippetContext);

  if (!context) {
    throw new Error("useSnippets doit être utilisé dans un SnippetProvider");
  }

  return context;
}

export function useSnippet(snippetId) {
  const { snippets } = useContext(SnippetContext);
  if (!snippets) {
    throw new Error("useSnippet must be used within a SnippetProvider");
  }
  return {
    snippetFind: snippets.find((snippet) => snippet.id === snippetId) || {},
    snippetId,
  };
}
