import { useEffect, useState } from "react";
import axios from 'axios'
import useSWR from "swr";
import Layout from '../../components/layout';

function UserProfilePage({ username }) {
  const [users, setUsers] = useState([]);

  // TO DO: Create a database in Firebase to fetch users data
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  
  const { data, error } = useSWR("https://jsonplaceholder.typicode.com/users", fetcher);

  useEffect(() => {
    if (data) {
      const transformedData = [];
      for (const key in data) {
        transformedData.push({
          id: key,
          username: data[key].username,
          email: data[key].email,
        });
      }
      setUsers(transformedData);
      console.log('transformed data', transformedData)
    }
  }, [data]);

  if (error) {
    return (
      <Layout>
        <p>Failed to load.</p>
      </Layout>
    );
  }
  if (!users || !data) {
    return <Layout><p>Loading...</p></Layout>;
  }
  if (!data) {
    return <Layout><p>No data!</p></Layout>;
  }


  return <Layout>
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.username} - {user.email}</li>
      ))}
    </ul>
  </Layout>;
}

export default UserProfilePage;
