import React from 'react';
import { UserContext } from '../contexts/UserContext';
import { isUserPermitted } from '../utils/permissions';
import { CREATE_USER } from '../utils/permissionsTypes';


function Homepage () {
    const { userPermissions } = React.useContext(UserContext);


    // const createUser = () => {
    //     if(isUserPermitted(userPermissions, CREATE_USER)) {
    //         alert('You are pemitted to create a user')
    //     } else {
    //         alert('access denied')
    //     }
    // }
    
    return (
        <div>
            {isUserPermitted(userPermissions, CREATE_USER) &&
                <button>Create USER</button>
            }
        </div>
    )
}

export default Homepage;