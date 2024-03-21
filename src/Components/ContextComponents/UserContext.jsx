import { createContext, useState , useContext } from "react";

const UserContext = createContext(undefined);

export const UserProvider = ({children}) => {
    const [user] = useState({
        name:"John",
        email:"john@example.com",
        dob:"02/05/2001"
    });
    
    return <UserContext.Provider value={{ user }} >{children}</UserContext.Provider>;
}

export const useUser = () => useContext(UserContext);

