import { createContext, useContext, useState, useEffect } from "react";
import {
  ref,
  getDatabase,
  get,
  child,
  set,
  remove,
  update,
} from "firebase/database";

export const SnippetContext = createContext({
  loading: true,
  snippets: [],
  addSnippet: () => {},
  deleteSnippet: () => {},
  updateSnippet: () => {},
  isEditing: null,
  getSnippetById: () => {},
  setIsEditing: () => {},
});

export function SnippetProvider({ children }) {
  const [snippets, setSnippets] = useState([]);
  const [isEditing, setIsEditing] = useState(null);
  const [loading, setLoading] = useState(false);
  const db = getDatabase();

  const loadSnippets = async () => {
    setLoading(true);
    const snapshot = await get(child(ref(db), "snippets"));
    if (snapshot.exists()) {
      const dataObj = snapshot.val();
      const data = Object.values(dataObj);
      if (data) {
        const snippetArray = data.map((snippet) => ({
          ...snippet,
        }));
        setSnippets(snippetArray);
        setLoading(true);
      } else {
        setSnippets([]);
        setLoading(true);
      }
    }
  };

  useEffect(() => {
    loadSnippets();
  }, []);

  const addSnippet = async (snippetData) => {
    const newId = Date.now();
    const newSnippet = {
      id: newId,
      title: snippetData.title.trim(),
      language: snippetData.language.trim(),
      content: snippetData.content,
      createdAt: new Date().toISOString(),
    };
    const db = getDatabase();
    const snippetRef = ref(db, "snippets/" + newSnippet.id);

    set(snippetRef, newSnippet);
    setSnippets((prev) => [...prev, newSnippet]);
  };

  const deleteSnippet = async (snippetId) => {
    try {
      await remove(ref(db, `/snippets/${snippetId}`));
      setSnippets((prev) => prev.filter((s) => s.id !== snippetId));
    } catch (error) {
      console.log("Erreur lors de la suppression du snippet", error);
    }
  };

  const updateSnippet = async (snippetId, snippetData) => {
    const updatedAt = new Date().toISOString();
    try {
      await update(ref(db, `snippets/${snippetId}`), {
        ...snippetData,
        updatedAt,
      });
      setSnippets((prev) =>
        prev.map((s) =>
          s.id === snippetId ? { ...s, ...snippetData, updatedAt } : s
        )
      );
    } catch (error) {
      console.log("Erreur lors de la mise à jour du snippet", error);
    }
  };

  const getSnippetById = (id) => snippets.find((s) => s.id === id);

  const contextValue = {
    snippets,
    loading,
    isEditing,
    setIsEditing,
    addSnippet,
    deleteSnippet,
    updateSnippet,
    getSnippetById,
  };

  return (
    <SnippetContext.Provider value={contextValue}>
      {children}
    </SnippetContext.Provider>
  );
}

export function useSnippets() {
  const context = useContext(SnippetContext);
  if (!context) {
    throw new Error("useSnippets doit être utilisé dans un SnippetProvider");
  }
  return context;
}
