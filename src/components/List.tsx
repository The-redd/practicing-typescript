import React from "react";
import { IState as IProps } from "../App";
import './List.css'

const List: React.FC<IProps> = ({ people }) => {
  const renderList = (): JSX.Element[] => {
    return people.map((person) => {
      return (
        <li>
          <div className="list-container">
            <div className="list-header">
              <img
                className="list-img"
                src={person.url}
                alt=""
                width={100}
                height={100}
              />
              <h1 className="list-name">{person.name}</h1>
            </div>
            <p className="list-age">{person.age} years old</p>
            <p className="list-note">{person.note}</p>
          </div>
        </li>
      );
    });
  };

  return (
    <div>
      <ul>{renderList()}</ul>
    </div>
  );
};

export default List;
