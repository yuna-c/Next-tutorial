"use client";
import styles from "./detail.module.scss";
import clsx from "clsx";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";

export default function PostDetail({ params }) {
  const { id } = params;
  const router = useRouter(); //next/navigation (14ver)

  const [PostEl, setPostEl] = useState(null);

  //순서1 - 삭제할 글번호를 인수로 받아서
  //delelete메서드 방식으로 서버쪽에 요청 보내는 함수 정의
  const handleDelete = (id) => {
    if (!window.confirm("정말 글을 삭제하겠습니까?")) return;

    fetch(`/api/requestPost/${id}`, { method: "DELETE" })
      .then((res) => {
        if (res.ok) {
          alert("글삭제 성공");
          router.push("/post");
        } else {
          alert("글삭제 실패");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
      </article>

      <nav>
        <button>Edit</button>
        {/* 순서2- 삭제버튼 클릭시 params로 전달받은 글 고유번호룰 hadleDelete에 인수로 전달해서 호출 */}
        <button onClick={() => handleDelete(id)}>Delete</button>
      </nav>
    </section>
  );
}
