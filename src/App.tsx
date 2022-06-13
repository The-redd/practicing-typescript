import React, { useState } from "react";
import "./App.css";
import AddtoList from "./components/AddtoList";
import List from "./components/List";

 export interface IState {
  people: { name: string; age: number; url: string; note?: string }[];
}

function App() {
  const [people, setPeople] = useState<IState["people"]>([
    {
      name: "Freddy",
      url: "https://cdn.pixabay.com/photo/2018/07/16/15/31/dog-3542195_1280.png",
      age: 33,
      note: "He is an awesome person"
    },
  ]);

  return (
    <div className="App">
      <h1>People invited to my party</h1>
      <List people={people} />
      <AddtoList people={people} setPeople={setPeople}  />
    </div>
  );
}

export default App;
