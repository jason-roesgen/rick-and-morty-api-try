import "./Home.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchData();
    console.log("posts:", posts);
  }, []);
  
  const fetchData = async () => {
    const { data } = await axios.get("https://jsonplaceholder.typicode.com/posts");
    setPosts(data);
  };

  return (
    <div className="list">
      {posts.map((post) => (
        <div key={post.id}>
          <h5>{post.title}</h5>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
