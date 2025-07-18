import { useAuth } from "./guard/authGuard";

export default function DisconnectBtn() {
  const { disconnect } = useAuth();
  return <button onClick={disconnect}>Se déconnecter</button>;
}
