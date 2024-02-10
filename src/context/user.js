import React, { useState } from "react";

//create the context
const UserContext = React.createContext()

//create the provider component
function UserProvider ({children}) {
    {/*
    the value prop of our provider will be our context data
    this value will be available to the child components of this provider 
    */}
    const [user, setUser] = useState(null)
    // const newUser = {
    //     name: 'Dushane Hill',
    //     interests: ['Gangbanging, 'Banging Shelly', 'words ending in "ing"']
    // }
    return <UserContext.Provider value={{user, setUser}}>
        {children}
    </UserContext.Provider>
}

export {UserContext, UserProvider}