import Layout from "./components/Layout";
import {GlobalProvider} from "./context/GlobalContext"
import "./App.css";

function App() {

  return (
    <GlobalProvider>

      <Layout />
    </GlobalProvider>
  );
}

export default App;