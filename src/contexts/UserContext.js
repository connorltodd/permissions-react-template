import React from 'react';

const currentUserPermissions = [
    "create user",
    "delete user",
]

export const UserContext = React.createContext();

const UserContextProvider = (props) => {
    const [userPermissions, handleUserPermissions] = React.useState(currentUserPermissions);

    return  (
        <UserContext.Provider value={{ userPermissions }}>
            {props.children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;