import React from "react";

const User = ({ user }) => {
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    url,
    name,
    login,
    created_at,
  } = user;

  const createdDate = new Date(created_at);
  const formatDate = (date) => {
    return `${date.getDate()} ${date.toLocaleString("en-us", {
      month: "short",
    })} ${date.getFullYear()}`;
  };

  return (
    <div className="user">
      <div>
        <img src={avatar_url} alt="User" className="avatar" />
      </div>
      <div>
        <a href={`https://github.com/${login}`}>{name || login}</a>
        <p>User joined on {formatDate(createdDate)}</p>
      </div>
      <div>
        <div>
          <p>Public Repos:</p>
          <p>{public_repos}</p>
        </div>
        <div>
          <p>Followers:</p>
          <p>{followers}</p>
        </div>
        <div>
          <p>Following:</p>
          <p>{following}</p>
        </div>
      </div>
    </div>
  );
};

export default User;
