import React, { useState, useEffect, useMemo } from 'react'
import { fetchUsers } from './api';
import { UsersList } from './components/UsersList';
import { FilterList } from './components/FilterList';
import { NAME, LASTNAME, AGE, SEX } from './constants.js'
import { NewUserForm } from './components/NewUserForm';

const App = () => {
  const [users, setUsers] = useState([]);
  const [isErrorOccured, setIsErrorOccured] = useState(false);
  const [filterQuery, setFilterQuery] = useState({
    [NAME]: '',
    [LASTNAME]: '',
    [AGE]: '',
    [SEX]: '',
  })

  const getusersFromServer = async () => {
    try {
      const usersFromServer = await fetchUsers();
      setUsers(usersFromServer);
    } catch (error) {
      setIsErrorOccured(true);
    }
  }

  useEffect(() => {
    getusersFromServer();
  }, []);

  const handleFilterQueryChange = ({target}) => {
    const {name, value} = target;

    setFilterQuery((prevfilterQuery) => ({
      ...prevfilterQuery,
      [name]: value,
    })
      )
  }

  const clearfilterQuery = () => {
    setFilterQuery({
      [NAME]: '',
      [LASTNAME]: '',
      [AGE]: '',
      [SEX]: '',
    })
  }

  const filteredusers = useMemo(() => {
    let tempusers = [...users];

    if (filterQuery[NAME].trim().length > 0) {
      tempusers = tempusers.filter(user => 
        user[NAME].toLowerCase().includes(filterQuery[NAME].trim().toLowerCase()))
    }

    if (filterQuery[LASTNAME].trim().length > 0) {
      tempusers = tempusers.filter(user => 
        user[LASTNAME].toLowerCase().includes(filterQuery[LASTNAME].trim().toLowerCase()))
    }

    if (filterQuery[AGE].trim().length > 0) {
      tempusers = tempusers.filter(user => user[AGE] === +filterQuery[AGE].trim())
    }

    if (filterQuery[SEX].trim().length > 0) {
      tempusers = tempusers.filter(user => user[SEX] === filterQuery[SEX])
    }

    return tempusers;
  }, [filterQuery, users])

  const adduser = (newuser) => {
    setUsers((prevusers) => [...prevusers, newuser] )
  }

  return (
    <div className="container">
      <div className="row">
        <FilterList 
          handleFilterQueryChange={handleFilterQueryChange} 
          filterQuery={filterQuery} 
          clearfilterQuery={clearfilterQuery}
        />
        <NewUserForm adduser={adduser}/>
      </div>
      <div className="row">
        {!isErrorOccured
          ? <UsersList users={filteredusers} /> 
          : (
              <h2 className="text-center text-danger">
                Не удалось загрузить список пользователей
              </h2>
            )}
      </div>
    </div>
  );
}

export default App;
