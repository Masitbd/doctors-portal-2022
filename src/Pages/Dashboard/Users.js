import React from "react";
import { useQuery } from "react-query";

const Users = () => {
  const { data: users, isLoading } = useQuery("users", () =>
    fetch(`http://localhost:5000/users`).then((res) => res.json())
  );

  if (isLoading) {
    return "Loading ... ...";
  }
  return (
    <div>
      <div class="overflow-x-auto">
        <table class="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => {
              return (
                <>
                  <tr>
                    <th>{user._id}</th>
                    <td>{user.email}</td>
                    <td>Quality Control Specialist</td>
                    <td>Blue</td>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
