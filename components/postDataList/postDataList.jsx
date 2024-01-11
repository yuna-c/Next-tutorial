"use client";

import { useState, useEffect } from "react";

export default function PostDataList() {
  const [Post, setPost] = useState([]);
  console.log(Post);

  useEffect(() => {
    const fetchPost = async (url) => {
      const data = await fetch(url, { method: "GET" });
      const json = await data.json();
      console.log(json.result);
      setPost(json.result);
    };
    fetchPost("/api/post");
  }, []);

  return (
    <div className="postDataList">
      {Post.map((post) => {
        return (
          <article key={post.name}>
            <h2>{post.name}</h2>
          </article>
        );
      })}
    </div>
  );
}
