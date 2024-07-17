import { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import './App.css';
import { IUser } from './types/types';
import UserList from './components/UserList';

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers: IUser[] = useMemo(() => {
    if (!searchQuery) {
      return users;
    }
    return [...users].filter(user => 
      user.name.firstname.toLowerCase().includes(searchQuery.toLowerCase()) || 
      user.email.toLowerCase().includes(searchQuery.toLowerCase()) || 
      user.phone.includes(searchQuery)
    );
  }, [searchQuery, users]);

  async function fetchUsers() {
    try {
      const response = await axios.get<IUser[]>('https://fakestoreapi.com/users?limit=9');
      setUsers(response.data);
    } catch(e) {
      console.log(e);
    }
  }

  return (
    <div className="App">
      <h1>Users</h1>
      <input placeholder='Search...' value={searchQuery} onChange={e => setSearchQuery(e.target.value)}/>
      <UserList users={filteredUsers} />
    </div>
  );
}

export default App;
