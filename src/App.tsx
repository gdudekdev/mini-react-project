import "./App.css";
import { AuthGuard } from "./components/guard/authGuard";
import AuthSwitch from "./components/AuthSwitch";
import "/firebase.js";

function App() {
  return (
    <AuthGuard>
      <AuthSwitch />
    </AuthGuard>
  );
}

export default App;
