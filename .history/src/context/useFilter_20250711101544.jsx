import { createContext, useContext, useState, useEffect } from "react";

export const FilterContext = createContext({
  keyword: string,
  setKeyword: (prev) => {},
});

export function FilterProvider({ children }) {
  const [keyword, setKeyword] = useState("");

  const contextValue = {
    keyword,
    setKeyword,
  };

  return (
    <SnippetContext.Provider value={contextValue}>
      {children}
    </SnippetContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useFilter doit être utilisé dans un SnippetProvider");
  }

  return context;
}

