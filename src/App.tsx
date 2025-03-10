import ProductPage from "./Pages/ProductPage";
import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  return (
    <div className="grid grid-rows-[60px_1fr] grid-cols-1 lg:grid-cols-[250px_1fr] gap-4">
      <Navbar />
      <ProductPage />
    </div>
  );
}

export default App;
