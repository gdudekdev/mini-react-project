import { useAuth } from "./guard/authGuard";
import Main from "./Main";
import Register from "./Register";
import Login from "./Login";

export default function AuthSwitch() {
  const { isLogged, isRegistering } = useAuth();

  return (
    <>
      {isLogged ? <Main /> : isRegistering ? <Register /> : <Login />}
    </>
  );
}
