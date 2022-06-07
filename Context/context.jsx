import { createContext, useState } from "react";
 
export const MyContext = createContext('');

export const MyContextProvider = ({children}) => {
    const [tokenForAll, setTokenForAll] = useState('ciaone');

    return(
        <MyContext.Provider value={{tokenForAll, setTokenForAll}} >{children} </MyContext.Provider>
    )
}