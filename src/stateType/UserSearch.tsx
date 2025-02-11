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
    console.log("event:", event);
    setName(event.target.value);
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("event:", event);
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) =>
    console.log("event:", event);

  return (
    <div>
      <div draggable onDragStart={handleDragStart}>
        Drag ME!
      </div>
      <h3>User Search</h3>
      <input ref={inputRef} value={name} onChange={handleChange} />
      <button onClick={handleClick}>Find User</button>
      <div>Name: {user?.name}</div>
      <div>Age: {user?.age}</div>
    </div>
  );
};

export default UserSearch;
