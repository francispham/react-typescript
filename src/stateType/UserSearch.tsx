import React, { useState } from 'react'

export const users = [
  { name: 'Francis', age: 20 },
  { name: 'Kate', age: 19 },
  { name: 'Phong', age: 21 }
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [user, setUser] = useState<{name: string, age: number | undefined}>();  // Type Unions

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log('event:', event);
    setName(event.target.value)
  };
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log('event:', event);
    const foundUser = users.find(user => {
      return user.name === name;
    });
    setUser(foundUser);
  };

  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => console.log('event:', event);

  return (
    <div>
      <div draggable onDragStart={handleDragStart}>Drag ME!</div>
      <h3>User Search</h3>
      <input value={name} onChange={handleChange} />
      <button onClick={handleClick}>Find User</button>
      <div>Name: {user?.name}</div>
      <div>Age: {user?.age}</div>
    </div>
  )
}

export default UserSearch
