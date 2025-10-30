import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timeoutId = setTimeout(() => {
      fetchData(query);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [query]);

  const fetchData = async (searchTerm) => {
    setLoading(true);
    try {
      const res = await fetch(
        `https://api.github.com/search/users?q=${searchTerm}`
      );
      const data = await res.json();
      setResults(data.items || []);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App" style={{ padding: "20px" }}>
      <h2>GitHub User Search (Debounced 500ms)</h2>
      <input
        type="text"
        placeholder="Search GitHub users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{
          padding: "10px",
          width: "300px",
          borderRadius: "5px",
          border: "1px solid gray",
        }}
      />

      {loading && <p>Loading...</p>}

      <ul>
        {results.map((user) => (
          <li key={user.id}>
            <img
              src={user.avatar_url}
              alt={user.login}
              width="30"
              style={{ borderRadius: "50%", marginRight: "10px" }}
            />
            {user.login}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
