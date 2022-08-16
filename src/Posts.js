import { VscBellDot } from "react-icons/vsc";

export const Posts = () => {
  return (
    <button
      onClick={() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
          .then((response) => response.json())
          .then((json) => {
            console.log(json);
          })
          .catch((error) => {
            console.log(error);
          });
      }}
    >
        <VscBellDot/>
      traer datos
    </button>
  );
};
