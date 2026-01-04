import React, { useState } from "react";

export default function UserData() {
  // hardcoded credentials
  const VALID_USERNAME = "admin";
  const VALID_PASSWORD = "123admin4";

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [authorized, setAuthorized] = useState(false);

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // fake API call (replace with real API)
  const fetchUserData = async () => {
    try {
      setLoading(true);
      setError("");

      // example API call
      const res = await fetch("https://reddybookbackend.onrender.com/auth/all");
      const result = await res.json();

      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }

      setData(result.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  // credential check
  const handleLogin = () => {
    if (username === VALID_USERNAME && password === VALID_PASSWORD) {
      setAuthorized(true);
      fetchUserData();
    } else {
      setError("Invalid username or password");
    }
  };

  /* ===================== LOGIN VIEW ===================== */
  if (!authorized) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded shadow-md w-96">
          <h2 className="text-xl font-bold mb-4 text-center">
            Verify Access
          </h2>

          {error && (
            <div className="bg-red-100 text-red-700 p-2 rounded mb-3 text-sm">
              {error}
            </div>
          )}

          <input
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border p-2 rounded mb-3"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border p-2 rounded mb-4"
          />

          <button
            onClick={handleLogin}
            className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </div>
    );
  }

  /* ===================== TABLE VIEW ===================== */
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">User Data</h2>

        <button
          onClick={fetchUserData}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
        >
          Refresh
        </button>
      </div>

      {loading && <p className="text-gray-600">Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}

      {!loading && data.length === 0 && (
        <p className="text-gray-500">No data found</p>
      )}

      {data.length > 0 && (
        <div className="overflow-x-auto">
          <table className="w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-3 py-2">#</th>
                <th className="border px-3 py-2">Username</th>
                <th className="border px-3 py-2">Password</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, index) => (
                <tr key={index} className="text-center">
                  <td className="border px-3 py-2">{index + 1}</td>
                  <td className="border px-3 py-2">{item.emailOrNumber}</td>
                  <td className="border px-3 py-2">{item.password}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
