import React, { useEffect, useState } from "react";
import Suggestion from "./Suggestion";

const Autocomplete = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [filteredUsers, setFilteredUsers] = useState([]);

  const handleSearchChange = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchTerm(query);
    if (query.length > 1) {
      const filterData = users?.length
        ? users.filter((item) => item.toLowerCase().includes(query))
        : [];
      setFilteredUsers(filterData);
      setShowDropdown(true);
    } else {
      setShowDropdown(false);
    }
  };

  const fetchListOfUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      if (data?.users?.length)
        setUsers(data.users.map((item) => item.firstName));
    } catch (err) {
      console.error(err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const handleClick = (e) => {
    setSearchTerm(e.target.textContent);
    setShowDropdown(false);
    setFilteredUsers([]);
  };

  useEffect(() => {
    fetchListOfUsers();
  }, []);

  if (loading) return <div>Loading...</div>;

  if (error) return <div>Error: {error}</div>;

  return (
    <div className="autocomplete-container">
      <input
        value={searchTerm}
        type="text"
        name="search-users"
        placeholder="Search users here..."
        onChange={handleSearchChange}
      />
      {showDropdown && (
        <Suggestion handleClick={handleClick} data={filteredUsers} />
      )}
    </div>
  );
};

export default Autocomplete;
