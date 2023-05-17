import React from 'react';
import Users from '../Users/Users';

function Main({users}) {
    return (
        <div>
           <Users users={users}/>  
        </div>
    );
}

export default Main;