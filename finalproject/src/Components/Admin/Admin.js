import { Link } from "react-router-dom";
import Users from "../User/User";

const Admin = () => {
  return (
    <section>
      <h1>Admins Page</h1>
      <br />
      <Users />
      <br />
      <div className="flexgrow">
        <Link to="">Home</Link>
      </div>
    </section>
  );
};
