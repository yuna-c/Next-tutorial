"use client";
import styles from "./detail.module.scss";
import clsx from "clsx";
import { useState, useEffect } from "react";

export default function PostDetail({ params }) {
  const { id } = params;
  const [PostEl, setPostEl] = useState(null);

  useEffect(() => {
    fetch(`/api/requestPost/${id}`)
      .then((data) => data.json())
      .then((json) => {
        console.log(json);
        setPostEl(json.result);
      });
  }, [id]);

  return (
    <section className={clsx(styles.detail)}>
      <article>
        <h2>{PostEl?.title}</h2>
        <p>{PostEl?.content}</p>
        <strong>{id}번째 게시글 상세페이지</strong>
      </article>
    </section>
  );
}
