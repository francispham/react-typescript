import { useState } from "react";

const GuestList: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [guests, setGuests] = useState<string[]>([]); // Type Inference

  // https://stackoverflow.com/questions/42081549/typescript-react-event-types
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setName(event.target.value);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    console.log("MouseEvent:", event);
    setName("");
    setGuests([...guests, name]);
  };
  return (
    <section className="p-3 pl-0">
      <h3 className="font-bold">Guest List</h3>
      <ul>
        {guests.map((guest) => (
          <li key={guest}>{guest}</li>
        ))}
      </ul>
      <div className="flex justify-center">
        <div className="flex items-center m-2 w-md rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
          <input
            type="text"
            className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
            value={name}
            onChange={handleChange}
          />
        </div>
        <button
          className="flex items-center bg-blue-500 px-4 py-3 m-2 rounded-md text-white hover:bg-blue-400"
          onClick={handleClick}
        >
          Add Guest
        </button>
      </div>
    </section>
  );
};

export default GuestList;
