import { useState } from "react";
import ProductPage from "./Pages/ProductPage";
import "./App.css";

function App() {
  const [isOpne, setOpen] = useState(false);
  return (
    <div className="grid grid-rows-[60px_1fr] grid-cols-1 lg:grid-cols-[250px_1fr] gap-4">
      <nav className="navbar bg-purple-400 col-span-full text-primary-content justify-between">
        <div className="flex-1 px-2">
          <span className="text-lf font-bold">Navigation</span>
        </div>
        <div className="flex-none lg:hidden">
          <button
            onClick={() => setOpen(!isOpne)}
            className="btn btn-primary btn-sm"
          >
            ☰ toggle
          </button>
        </div>
      </nav>
      <ProductPage isOpen={isOpne} />
    </div>
  );
}

export default App;
