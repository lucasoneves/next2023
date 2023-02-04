import { useEffect, useState } from "react";
import useSWR from "swr";
import Layout from '../../components/layout';

function UserProfilePage({ username }) {
  const [user, setUsers] = useState([]);

  // TO DO: Create a database in Firebase to fetch users data
  const { data, error } = useSWR("url");

  useEffect(() => {
    if (data) {
      const transformedData = [];
      for (const key in data) {
        transformedData.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setUsers(transformedData);
    }
  }, [data]);

  if (error) {
    return (
      <Layout>
        <p>Failed to load.</p>
      </Layout>
    );
  }
  if (!data) {
    return <Layout><p>No data!</p></Layout>;
  }

  if (!users || !data) {
    return <Layout><p>Loading...</p></Layout>;
  }

  return <Layout><h1>username: {username}</h1></Layout>;
}

export default UserProfilePage;
