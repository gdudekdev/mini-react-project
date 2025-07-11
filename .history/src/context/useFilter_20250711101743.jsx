import { createContext, useContext, useState, useEffect } from "react";

export const FilterContext = createContext({
  keyword: "",
  setKeyword: (prev) => {},
});

export function FilterProvider({ children }) {
  const [keyword, setKeyword] = useState("");

  const contextValue = {
    keyword,
    setKeyword,
  };

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error("useFilter doit être utilisé dans un SnippetProvider");
  }

  return context;
}
