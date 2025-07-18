import { useState } from "react";
import { useAuth } from "./guard/authGuard";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setIsRegistering, setIsLogged } = useAuth();
  const login = async (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredentials) => {
        const user = userCredentials.user;
        if (user) {
            localStorage.setItem('access_token', user.accessToken);
          setIsLogged(true);
        }
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.meesage;
      });
  };
  console.log("rendu de login");
  return (
    <div className="flex flex-col gap-4">
      <h2>Connexion</h2>
      <form
        onSubmit={login}
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
        <input type="submit" />
      </form>
      <button onClick={() => setIsRegistering((prev) => !prev)}>
        Pas de compte ? S'inscrire
      </button>
    </div>
  );
}
