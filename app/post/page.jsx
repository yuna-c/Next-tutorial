"use client";

import clsx from "clsx";
import styles from "./post.module.scss";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Post() {
  const [Post, setPost] = useState([]);

  //순서4- 목록페이지에서 삭제된 게시글도 갱신된 정보값으로 목록 데이터 다시 출력
  useEffect(() => {
    fetch("/api/requestPost")
      .then((data) => data.json())
      .then((json) => setPost(json.result));
  }, []);

  return (
    <section className={clsx(styles.post)}>
      <h1>Post List</h1>
      <nav>
        <button>
          <Link href="/post/write">Write Post</Link>
        </button>
      </nav>
      {Post.map((post) => {
        return (
          <article key={post.id}>
            <h2>
              <Link href={`/post/${post.id}`}>{post.title}</Link>
            </h2>
          </article>
        );
      })}
    </section>
  );
}
