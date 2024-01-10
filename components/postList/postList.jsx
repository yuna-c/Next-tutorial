"use client";
import { useEffect, useState } from "react";

export default function PostList() {
  const [Posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async (url) => {
      const data = await fetch(url);
      const result = await data.json();
      console.log(result);
      setPosts(result);
    };

    fetchPosts("https://jsonplaceholder.typicode.com/posts");
  }, []);

  return (
    <ul>
      {Posts.map((post, idx) => {
        if (idx >= 10) return null;
        return <li key={post.id}>{post.title}</li>;
      })}
    </ul>
  );
}
