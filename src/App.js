import { useState, useEffect } from "react";
import "./App.css";

// https://api.github.com/users/123MwanjeMike

function App({ login }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setData);
  }, []);

  if (data) {
    return (
      <div>
        <h1>{data.name}</h1>
        <p>Location: {data.location}</p>
        <p>Company: {data.company}</p>
        <img src={data.avatar_url} alt={data.login} height='200' />
      </div>
    );
  }
  return <>User not available</>;
}

export default App;
