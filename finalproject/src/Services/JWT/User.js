import { useState, useEffect } from "react";
import Api from "../API/Api";
const User = () => {
  const [users, setUser] = useState();

  useEffect(() => {
    let isMounted = true;
    const controller = new AbortController();

    const getUser = async () => {
      try {
        const response = await Api.get(`/users`, { signal: controller.signal });
        console.log(response.data);
        isMounted && setUser(response.data);
      } catch (err) {
        console.log(err);
      }
    };
  }, []);
  return (
    <article>
      <h2>Users List</h2>
      {users?.length ? (
        <ul>
          {users.map((user, i) => (
            <li key={i}>{user?.username}</li>
          ))}
        </ul>
      ) : (
        <p>No user to be display</p>
      )}
    </article>
  );
};
export default User;
