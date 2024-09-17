import React from "react";
import Header from "./Components/Header";
import "./style.css";
import Card from "./Components/Card";
import data from "./data.js";
import Counter from "./Components/Counter.js";
import Time from "./Components/Time.js";
import Form from "./Components/Form.js";

function App() {
  console.log("app loaded");

  return (
    <div className="App">
      <Header />

      <Form />

      {/* <Counter /> */}
      {/* {<Time />} */}

      {/* <main>
        <h1>Hello world this is rohan from earth</h1>
        <p>earth is not a green planet anymore</p>
      </main> */}

      {/* <div className="cards">
        {data.map((dataObj, index) => {
          return (
            <Card
              title={dataObj.title}
              name={dataObj.name}
              url={dataObj.url}
              key={index}
            />
          );
        })}
      </div> */}
    </div>
  );
}

export default App;
