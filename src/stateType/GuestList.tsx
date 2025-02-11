import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [guests, setGuests] = useState<string[]>([]); // Type Inference

  // https://stackoverflow.com/questions/42081549/typescript-react-event-types
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("event:", event);
    setName("");
    setGuests([...guests, name]);
  };
  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
      <input value={name} onChange={handleChange} />
      <button onClick={handleClick}>Add Guest</button>
    </div>
  );
};

export default GuestList;
