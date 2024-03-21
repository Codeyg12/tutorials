import React from "react";
import useFetch from "./useFetch";

const TestFetch = () => {
  const { data, error, loading } = useFetch(
    "https://jsonplaceholder.typicode.com/posts"
  );

  return (
    <div>
      <h1>useFecth</h1>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error.message}</div>}
      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
};

export default TestFetch;
