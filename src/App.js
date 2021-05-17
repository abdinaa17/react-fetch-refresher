import "./styles.css";
import { useEffect, useState } from "react";

export default function App() {
  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);

  async function fetchData() {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    const data = await response.json();
    setPosts(data);
    setLoading(false);
  }

  useEffect(() => {
    setTimeout(fetchData, 3000);
  }, []);

  return (
    <div className="App">
      {loading && <p>Loading....</p>}
      {posts.map((post) => {
        const { id, title, body } = post;
        return (
          <div key={id}>
            <h3>{title}</h3>
            <p>{body}</p>
          </div>
        );
      })}
    </div>
  );
}
