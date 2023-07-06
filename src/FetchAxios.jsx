import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(0);
  const [getinfo, setGetinfo] = useState([]);

  const datarec = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then((res) => {
      console.log("response", res.data); // handle success here
      setGetinfo(res.data);
    });
  };

  useEffect(() => {
    datarec();
  }, []);

  return (
    <>
      {getinfo.map((data) => {
        return (
          <>
            <h1>{data.id}</h1>
          </>
        );
      })}
    </>
  );
}

export default App;
