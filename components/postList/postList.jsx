"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function PostList() {
  const [Posts, setPosts] = useState([]);

  //미션 - 해당 컴포넌트의 li를 링크로 변경해서
  //해당 링크 클릭시 상세 페이지 컴포넌트가 열리면서 클릭한 목록에 대한 데이터가 출력되는 상세페이지 출력
  //필요한 기술 : dynamic routing, next/link, useParams
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
        return (
          <li key={post.id}>
            <Link href={`/post/${post.id}`}>{post.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
