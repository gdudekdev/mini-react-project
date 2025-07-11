import { createContext, useContext, useState, useEffect } from "react";

const snippetCtx = createContext({
  loading: true,
  snippets: [],
  addSnippets: () => {},
  deleteSnippets: () => {},
  updateSnippets: () => {},
});



export function SnippetProvider({ children }) {
  const [snippets, setSnippets] = useState([]);
  const [loading, setLoading] = useState(true);

  // Charger les utilisateurs depuis localStorage au montage
  useEffect(() => {
    try {
      const storedUsers = localStorage.getItem("snippets");
      if (storedUsers) {
        const parsedUsers = JSON.parse(storedUsers);
        setSnippets(Array.isArray(parsedUsers) ? parsedUsers : []);
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
      id: users.length > 0 ? users[users.length - 1].id + 1 : 1,
      name: snippetData.name.trim(),
      phoneNumber: snippetData.phoneNumber?.trim() || "",
      country: snippetData.country || "",
      createdAt: new Date().toISOString(),
    };
    const updatedUsers = [...users, newSnippet];
    setSnippets(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  // Fonction pour supprimer un utilisateur
  const deleteSnippet = (snippetId) => {
    setSnippets((prevUsers) => prevUsers.filter((user) => user.id !== snippetId));
  };

  // Fonction pour mettre à jour un utilisateur
  const updateUser = (snippetId, snippetData) => {
    const updatedUsers = users.map((user) =>
      user.id === snippetId
        ? {
            ...user,
            ...snippetData,
            updatedAt: new Date().toISOString(),
          }
        : user
    );
    setSnippets(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const clearUsers = () => {
    setSnippets([]);
  };

  const contextValue = {
    snippets,
    loading,
    addUser,
    deleteUser,
    updateUser,
    clearsnippets,
    userCount: snippets.length,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
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
