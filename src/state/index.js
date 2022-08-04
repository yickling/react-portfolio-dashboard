import { createContext, useContext, useState } from "react";

export const AppContext = createContext()

export const useApp = () => useContext(AppContext);

export const AppContextProvider = (props) => {
  const [period, setPeriod] = useState('1d')
  const [darkMode, setDarkMode] = useState(false)

  const updatePeriod = (value) => {
    setPeriod(value)
  }

  const updateDarkMode = (value) => {
    setDarkMode(value)
  }

  return (
    <AppContext.Provider
      value={{
        data: {
          period,
          darkMode,
        },
        updatePeriod,
        updateDarkMode,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );};