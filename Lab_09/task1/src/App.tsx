import { Dashboard } from "./components/Dashboard";
import { ParentComponent } from "./components/Button";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <Dashboard />
      <hr />
      <ParentComponent />
    </div>
  );
}

export default App;