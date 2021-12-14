import { createContext, useContext, useState } from "react";

export const AppContext = createContext()

export const useGraph = () => useContext(AppContext);

export const AppContextProvider = (props) => {
  const [period, setPeriod] = useState('1d')

  const updatePeriod = (value) => {
    setPeriod(value)
  }

  return (
    <AppContext.Provider
      value={{
        data: {
          period,
        },
        updatePeriod,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );};