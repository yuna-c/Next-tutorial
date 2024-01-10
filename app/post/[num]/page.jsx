"use client";
import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function PostDetail() {
  const { num } = useParams();
  const [Post, setPost] = useState(0);

  useEffect(() => {
    const fetchPostById = async (url) => {
      const data = await fetch(url);
      const result = await data.json();
      console.log(result);
      setPost(result);
    };

    fetchPostById(`https://jsonplaceholder.typicode.com/posts/${num}`);
  }, [num]);

  return (
    <div>
      <h2>{Post.title}</h2>
      <p>{Post.body}</p>
    </div>
  );
}
