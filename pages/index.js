import { useState } from 'react';
import Layout from '../components/Layout';
import ItemList from '../components/ItemList';
import SearchBar from '../components/SearchBar';
import { Box } from '@mui/material';

export default function Home({ users }) {
  const [filteredUsers, setFilteredUsers] = useState(users);

  const handleSearch = (query) => {
    const filtered = users.filter(user =>
      user.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredUsers(filtered);
  };

  return (
    <Layout>
      <Box sx={{ mt: 4 }}>
        <SearchBar onSearch={handleSearch} />
        <ItemList items={filteredUsers} />
      </Box>
    </Layout>
  );
}

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return {
    props: {
      users,
    },
  };
}
