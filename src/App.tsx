import { useState } from "react";
import ProductPage from "./Pages/ProductPage";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  const [isOpne, setOpen] = useState(false);
  const onOPen = () => {
    setOpen(!isOpne);
  };
  return (
    <div className="grid grid-rows-[60px_1fr] grid-cols-1 lg:grid-cols-[250px_1fr] gap-4">
      <Navbar onOpen={onOPen} />
      <ProductPage isOpen={isOpne} />
    </div>
  );
}

export default App;
