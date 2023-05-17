import React from 'react';

function Card({user}) {
    return (
      <div className="card" key={user.id}>
      <div className="row">
        <div className="col-12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text" >
              <span className="card-title">{user.name}</span>
              <p>username: {user.username}</p>
              <p>email: {user.email}</p>
              <p>phone: {user.phone}</p>
            </div>        
          </div>
        </div>
      </div>
    </div>
    );
}

export default Card;