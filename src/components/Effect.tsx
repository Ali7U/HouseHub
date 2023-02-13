import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

console.log(axios.isCancel("something ..."));
// bfvc

function Effect() {
  const [data, setData] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("https://63e2114c109336b6cbfecc6b.mockapi.io/login")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }, []);

  const deleteItem = (id: string) => {
    axios.delete(`https://63e2114c109336b6cbfecc6b.mockapi.io/login/${id}`);
  };
  return (
    <div>
      <h1>Read</h1>
      <button
        onClick={() => {
          navigate("/login");
        }}
      >
        Post
      </button>
      <ul>
        {data.map((item: any) => (
          <div className="info" key={item.id}>
            {/* <p>{item.firstName}</p>
            <p>{item.lastName}</p>
            <p>{item.email}</p>
            <p>{item.phone}</p> */}
            <button onClick={() => deleteItem(item.id)}>Delete</button>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default Effect;
