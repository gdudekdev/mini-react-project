import { createContext, useContext, useState, useEffect } from "react";

export const snippetCtx = createContext({
  loading: true,
  snippets: [],
  addSnippets: () => {},
  deleteSnippets: () => {},
  updateSnippets: () => {},
});



export function SnippetProvider({ children }) {
  const [snippets, setSnippets] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    try {
      const storedSnippets = localStorage.getItem("snippets");
      if (storedSnippets) {
        const parsedSnippets = JSON.parse(storedSnippets);
        setSnippets(Array.isArray(parsedSnippets) ? parsedSnippets : []);
      }
    } catch (error) {
      console.error("Erreur lors du chargement des utilisateurs:", error);
      setSnippets([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!loading) {
      try {
        localStorage.setItem("snippets", JSON.stringify(snippets));
      } catch (error) {
        console.error("Erreur lors de la sauvegarde:", error);
      }
    }
  }, [snippets, loading]);

  const addSnippet = (snippetData) => {
    const newSnippet = {
      id: snippets.length > 0 ? snippets[snippets.length - 1].id + 1 : 1,
      name: snippetData.name.trim(),
      phoneNumber: snippetData.phoneNumber?.trim() || "",
      country: snippetData.country || "",
      createdAt: new Date().toISOString(),
    };
    const updatedSnippets = [...snippets, newSnippet];
    setSnippets(updatedSnippets);
    localStorage.setItem("snippets", JSON.stringify(updatedSnippets));
  };

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
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("useSnippets doit être utilisé dans un SnippetProvider");
  }

  return context;
}

export function useSnippet(snippetId) {
  const { snippets } = useContext(UserContext);
  if (!snippets) {
    throw new Error("useSnippet must be used within a SnippetProvider");
  }
  return {
    snippetFind: snippets.find((snippet) => snippet.id === snippetId) || {},
    snippetId,
  };
}
