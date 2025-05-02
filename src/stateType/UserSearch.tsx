import React, { useState, useRef, useEffect } from "react";
import { users } from "../constants";

const UserSearch: React.FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null); // Every Important to Remember!!!
  const [name, setName] = useState<string>("");
  const [user, setUser] = useState<{ name: string; age: number | undefined }>(); // Type Unions

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log("ChangeEvent:", event);
    setName(event.target.value);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("MouseEvent:", event);
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) =>
    console.log("DragEvent:", event);

  return (
    <section className="p-3 pl-0">
      <div className="w-fit" draggable onDragStart={handleDragStart}>
        Drag ME!
      </div>
      <h3 className="font-bold pt-3">User Search Functional Component</h3>
      <div className="flex justify-center">
        <div className="flex items-center m-2 w-md rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
          <input
            type="text"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            ref={inputRef}
            value={name}
            onChange={handleChange}
          />
        </div>
        <button
          className="flex items-center bg-blue-500 px-4 py-3 m-2 rounded-md text-white hover:bg-blue-400"
          onClick={handleClick}
        >
          Find User
        </button>
      </div>
      {user && (
        <div>
          <span>
            Name: {user.name} - Age: {user.age}
          </span>
        </div>
      )}
    </section>
  );
};

export default UserSearch;
