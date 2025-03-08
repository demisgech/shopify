import { useState } from "react";
import "./App.css";

function App() {
  const [on, setOn] = useState(false);
  return (
    <div className="grid grid-rows-[60px_1fr] grid-cols-[250px_1fr] gap-5 md:grid-cols-[250px_1fr]">
      <nav className="navbar bg-purple-400 col-span-full text-primary-content justify-between">
        <div className="flex-1 px-2">
          <span className="text-lf font-bold">Navigation</span>
        </div>
        <div className="flex-none md:hidden">
          <button onClick={() => setOn(!on)} className="btn btn-primary btn-sm">
            ☰ toggle
          </button>
        </div>
      </nav>
      <aside
        className={`p-4 bg-gray-200 w-[250px] h-full fixed top-0 left-0 transition-transform duration-300 ${
          on ? "translate-x-0" : "-translate-x-full"
        } md:relative md:translate-x-0`}
      >
        <h2 className="text-lg font-bold">Categories</h2>
        <ul className="menu p-2 rounded-box">
          <li>
            <a>All Products</a>
          </li>
          <li>
            <a>Smartphones</a>
          </li>
          <li>
            <a>Laptops</a>
          </li>
          <li>
            <a>Fragrances</a>
          </li>
          <li>
            <a>Skincare</a>
          </li>
          <li>
            <a>Groceries</a>
          </li>
        </ul>
      </aside>
      <main className="p-2">
        <h2 className="text-2xl font-bold">Products</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          mai
        </div>
      </main>
    </div>
  );
}

export default App;
