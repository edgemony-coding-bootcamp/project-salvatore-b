import { createContext, useState } from "react";
 
export const MyContext = createContext('');

export const MyContextProvider = ({children}) => {
    const [tokenForAll, setTokenForAll] = useState('ciaone');
    const [idUser, setIdUser] = useState("User id");

    return(
        <MyContext.Provider value={{tokenForAll, setTokenForAll, idUser, setIdUser}} >{children} </MyContext.Provider>
    )
}