import React from "react";
import "./App.css";

function App() {
  // let arr=["Suman", "Saurav", "Suman Saurav", "Suman"];
  // const [data, setData]=React.useState([...new Set(arr)])

  // let arr = [
  //   { id: 1, name: "Suman" },
  //   { id: 2, name: "Saurav" },
  //   { id: 3, name: "Suman Saurav" },
  //   { id: 4, name: "Suman" }
  // ];

  const [data, setData] = React.useState([
    { id: 1, name: "Suman" },
    { id: 2, name: "Saurav" },
    { id: 3, name: "Suman Saurav" },
    { id: 4, name: "Suman" },
  ]);
  console.log(data);

  const handleDelete = (id) => {
    let data2 = data.filter((item) => {
      return item.id !== id;
    });
    setData(data2);
  };

  let unique = new Set();
  let uniquedata = data.filter((el) => {
    if (!unique.has(el.name)) {
      unique.add(el.name);
      return true;
    }
    return false;
  });
  console.log("uniquedata", uniquedata);

  return (
    <div>
      {uniquedata.map((item) => (
        <div key={item.id} onClick={() => handleDelete(item.id)}>
          {item.name}
        </div>
      ))}
    </div>
  );
}

export default App;


