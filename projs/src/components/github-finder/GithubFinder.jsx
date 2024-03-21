import React, { useEffect, useState } from "react";
import User from "./User";
import "./GithubFinder.css";

const GithubFinder = () => {
  const [userName, setUserName] = useState("codeyg12");
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleGithubSearch = () => {
    fetchGithubProfile(userName);
  };

  const fetchGithubProfile = async (userName) => {
    setLoading(true);
    const res = await fetch(`https://api.github.com/users/${userName}`);
    const data = await res.json();
    setUserData(data);
    setLoading(false);
    setUserName("");
  };

  useEffect(() => {
    fetchGithubProfile(userName);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          name="search-bu-username"
          type="text"
          placeholder="Enter GitHub profile name..."
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
        />
        <button onClick={handleGithubSearch}>Search</button>
      </div>
      {userData !== null ? <User user={userData} /> : null}
    </div>
  );
};

export default GithubFinder;
