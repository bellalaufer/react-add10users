import React from 'react';
import Card from '../Card/Card';

function Users({users}) {
    return (
        <div className="users">
 {users.map((user) => {
  return (
    <Card user={user}/>    
 );
 })}
  
</div>
    );
}

export default Users;