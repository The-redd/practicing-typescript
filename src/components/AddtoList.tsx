import React, { useState } from "react";
import "../App.css";
import { IState as Props } from "../App";

interface IProps {
  people: Props["people"];
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>;
}

const AddtoList: React.FC<IProps> = ({ people, setPeople }) => {
  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    img: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const handleClick = (): void => {
    if (!input.name || !input.age || !input.img || !input.note) {
      return;
    }

    setPeople([...people, {
      name: input.name,
      age: parseInt(input.age),
      url: input.img,
      note: input.note
    }])
  }

  return (
    <div className="input-container">
      <input
        type="text"
        placeholder="name"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="age"
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        placeholder="imageUrl"
        value={input.img}
        onChange={handleChange}
        name="img"
      />
      <textarea
        placeholder="notes"
        value={input.note}
        onChange={handleChange}
        name="note"
      />
      <button onClick={handleClick}>Add to list</button>
    </div>
  );
};

export default AddtoList;
