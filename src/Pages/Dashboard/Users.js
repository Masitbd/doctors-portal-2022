import React from "react";
import { useQuery } from "react-query";

const Users = () => {
  const { data: users, isLoading } = useQuery("users", () =>
    fetch(`http://localhost:5000/users`).then((res) => res.json(), {
      method: "GET",
      headres: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
  );

  if (isLoading) {
    return "Loading ... ...";
  }

  const makeAdmin = (user) => {
    console.log(user);
    fetch(`http://localhost:5000/user/admin/${user.email}`, {
      method: "PUT",
      headers: {
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
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
                    <td>
                      <button
                        onClick={() => makeAdmin(user)}
                        class="btn btn-xs"
                      >
                        Make Admin
                      </button>
                    </td>
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
