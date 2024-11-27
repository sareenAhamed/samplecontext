import { createContext, useState } from "react";
import Menu from "./components/Menu";

export const foodContext = createContext()

function App() {
  const [food, setFood] = useState("cake")
  return (
    <foodContext.Provider value={{food, setFood,}}>
      <Menu />
    </foodContext.Provider>
  );
}

export default App;
