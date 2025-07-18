import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { auth } from "../../firebase";
import { useAuth } from "./guard/authGuard";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsRegistering } = useAuth();

  const register = async (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        if (user) {
          set;
        }
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.meesage;
      });
  };
  console.log("rendu de Register");
  return (
    <div className="flex flex-col gap-4">
      <h2>Inscription</h2>
      <form
        onSubmit={register}
        className="flex flex-col gap-2 [&>input]:border [&>input]:p-2 [&>input]:rounded-sm"
      >
        <input
          type="email"
          id="email"
          value={email}
          placeholder="john.doe@example.com"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          id="password"
          value={password}
          placeholder="*******"
          onChange={(e) => setPassword(e.target.value)}
        />
        <input type="submit" defaultValue="Connexion" />
      </form>
      <button onClick={() => setIsRegistering((prev) => !prev)}>
        Déjà un compte ? Se connecter
      </button>
    </div>
  );
}
