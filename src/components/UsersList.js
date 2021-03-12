import React from 'react';
import { User } from './User';

export const UsersList = ({ users }) => {

  return (
    <div className="col">
      <h1 className='text-center'>Список пользователей</h1> 
      {users.length 
      ? (<ul className="list-group">
        {users.map(user => (
          <li 
            key={+ new Date() + user.name}
            className="list-group-item"
          >
            <User user={user}/>
          </li>
        ))}
      </ul>)
      : (<h2 className="text-center text-danger ">
          Нет людей соответствующих введенным фильтрам
        </h2>
        )}
    </div>
    );
};

