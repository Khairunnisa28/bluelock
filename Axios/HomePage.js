import React from "react";
import Axios from "axios";

class Homepage extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [], // Corrected the state property name
    };
  }

  componentDidMount() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    Axios.get(url)
      .then((response) => {
        this.setState({ users: response.data }); // Update the state with fetched data
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }

  render() {
    const { users } = this.state;
    return (
        <div>
        <h1>User List</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              {/* Add more table headers for other user properties */}
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                {/* Add more table cells for other user properties */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Homepage;
