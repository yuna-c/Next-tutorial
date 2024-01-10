async function fetchPresident() {
  const data = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const resultData = await data.json();
  return resultData;
}

//해당 컴포넌트는 서버 컴포넌트이기 떄문에 기본적으로
//클라이언트에서만 동작하는 리액트 내장훅 (useState, useRef, useEffect) 사용불가
//해당 비동기 데이터는 서버쪽에서 페이지가 빌드될때 한번 만들어지고 클라이언트에서 요청이 들어올때 미리 빌드된 페이지를 보내줌으로써 브라우저가 불필요한 비동기 데이터통신을 안함
export default async function President() {
  const data = await fetchPresident();
  console.log(data);
  return (
    <div className="president">
      <h3>President</h3>
    </div>
  );
}
