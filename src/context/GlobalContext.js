import React from "react";
import themeDefaultConfig from "./themeDefaultConfig"
export const themeDefault = themeDefaultConfig;
const GlobalContext = React.createContext();

const GlobalProvider = ({children}) =>{
  const [theme , setTheme] = React.useState(themeDefault);
  const [activeSection , setActiveSection] = React.useState("home");

  const changeTheme = (themeConfig = themeDefault) => {
    setTheme({
      ...theme,
      ...themeConfig,
    });
  };
  const handleActiveSection = (active) =>{
    setActiveSection(active);
  }
  // console.log(GlobalThemeContext);
  return (<GlobalContext.Provider value={{theme,changeTheme,activeSection,handleActiveSection}}>
    {children}
  </GlobalContext.Provider>)
}


export default GlobalContext;
export { GlobalProvider };