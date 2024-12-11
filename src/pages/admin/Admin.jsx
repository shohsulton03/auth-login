import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../redux/slices/user-slice";

const Admin = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.user.value);

  const handleDelete = (user) => {
    if (window.confirm(`Are you sure you want to delete ${user.name}?`)) {
      dispatch(deleteUser(user));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-600 via-blue-500 to-green-400 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-white text-center mb-10">
          User Management
        </h2>

        {users?.length ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {users.map((user) => (
              <div
                key={user.id}
                className="bg-white rounded-lg shadow-lg p-6 transform transition-transform hover:scale-105"
              >
                <h3 className="text-lg font-semibold text-gray-800">
                  {user.name}
                </h3>
                <p className="text-gray-600">Email: {user.email}</p>
                <div className="mt-4 flex justify-end">
                  <button
                    onClick={() => handleDelete(user)}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-white text-lg">No users found.</p>
        )}
      </div>
    </div>
  );
};

export default Admin;
