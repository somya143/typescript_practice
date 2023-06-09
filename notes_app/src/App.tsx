import Switch from "react-switch";
import { ThemeContext } from "./context/Theme";
import Home from "./page/home/Home";
import {useState} from "react"
import "./App.css";

function App() {
const [theme,setTheme] = useState("dark");
const [checked, setChecked] = useState(true);

const handleSwitch = (check:boolean) => {
  setChecked(!checked);
  if(check){
   setTheme("dark")
  }else{
    setTheme("light")
  }
  
};
  return (
    <ThemeContext.Provider value={theme}  >
      <Switch checked={checked} onChange={handleSwitch} className="react-switch" />

   <Home></Home>
   </ThemeContext.Provider>
  )
}

export default App;
