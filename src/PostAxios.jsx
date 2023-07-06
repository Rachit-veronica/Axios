import axios from "axios";
import React from "react";

const PostAxios = () => {
  axios
    .post("https://jsonplaceholder.typicode.com/posts", "helloGupta")
    .then((res) => {
      console.log(res);
    });
  return <div>PostAxios</div>;
};

export default PostAxios;
