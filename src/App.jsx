import Home from "./pages/Home";
import { Provider } from "./Context/Contex";
function App() {
  return (
    <Provider>
      <Home />
    </Provider>
  );
}

export default App;
