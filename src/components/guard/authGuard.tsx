import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../../../firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
export const AuthContext = createContext({
  isLogged: false,
  setIsLogged: (prev) => {},
  isRegistering: false,
  setIsRegistering: (prev) => {},
  disconnect: () => {},
});

export function AuthGuard({ children }) {
  const [isLogged, setIsLogged] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const disconnect = () => {
    signOut(auth);
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogged(true);
      } else {
        setIsLogged(false);
      }
    });

    return () => unsubscribe();
  }, []);

  const contextValue = {
    isLogged,
    setIsLogged,
    setIsRegistering,
    isRegistering,
    disconnect,
  };
  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth doit être utilisé dans un AuthGuard");
  }

  return context;
}
