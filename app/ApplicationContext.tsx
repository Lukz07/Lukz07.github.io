"use client"
import {createContext, ReactNode, useContext, useState} from "react";

interface ApplicationContext {
  touchEnabled : boolean | null,
  setTouchEnabled : React.Dispatch<React.SetStateAction<boolean>>;
}

const AppContext = createContext({} as ApplicationContext);

type Props = {
  children: ReactNode
}

export const ApplicationProvider = ({children}: Props) => {
  const [touchEnabled, setTouchEnabled] = useState(false);
  return(
    <AppContext.Provider value={{
      touchEnabled,
      setTouchEnabled
    }}>
      {children}
    </AppContext.Provider>
  )
}

export const useApplicationContext = () => useContext(AppContext);
