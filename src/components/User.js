import React from 'react';
import Card from './Card';

const User = ({users,setUsers}) => {
    return (
        <>
            {users.map((user) => (
             <Card key={user.id}
             user={user}
                    users={users}
                    setUsers={setUsers}
         />
            ))}
        </>
    );
}

export default User;
