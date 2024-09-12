import React from "react";
import Header from "./Components/Header";
import "./style.css";
import Card from "./Components/Card";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <h1>Hello world this is rohan from earth</h1>
        <p>earth is not a green planet anymore</p>
      </main>

      <div className="cards">
        <Card
          name="rohan sharma"
          title="Developer"
          url="https://www.postergully.com/cdn/shop/products/63767e36be69e2204043233365c0b89f_f9c432f9-f0f9-49f1-8b0d-30b5ebc70dc8.jpg?v=1578647532"
        />
        <Card
          name="Himanshu beniwal"
          title="Student"
          url="https://www.postergully.com/cdn/shop/products/d5723026363e2cb8074b7e13547b24e6.jpg?v=1578647900"
        />
        <Card
          name="Himanshu beniwal"
          title="Student"
          url="https://www.postergully.com/cdn/shop/products/d5723026363e2cb8074b7e13547b24e6.jpg?v=1578647900"
        />
        <Card
          name="Himanshu beniwal"
          title="Student"
          url="https://www.postergully.com/cdn/shop/products/d5723026363e2cb8074b7e13547b24e6.jpg?v=1578647900"
        />
      </div>
    </div>
  );
}

export default App;
