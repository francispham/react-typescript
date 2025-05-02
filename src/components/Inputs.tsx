import { useState, useRef } from "react";

export const Inputs = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<string>("");
  const [address, setAddress] = useState<string | null>(null);

  const ref = useRef<HTMLInputElement>(null!); // null! is read only!
  /* Same as above but not commonly used!
    const ref = useRef<HTMLInputElement | null>(null);     
  */

  console.log("HTMLInputElement: ", ref?.current?.value);

  return (
    <section className="p-3 pl-0" ref={ref}>
      <div className="flex items-center m-2 w-md rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
        <input
          type="text"
          className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          placeholder="Name with ref"
          ref={ref}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="flex items-center m-2 w-md rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
        <input
          type="text"
          className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className="flex items-center m-2 w-md rounded-md bg-white pl-3 outline-1 -outline-offset-1 outline-gray-300 focus-within:outline-2 focus-within:-outline-offset-2 focus-within:outline-indigo-600">
        <input
          type="text"
          className="block min-w-0 grow py-1.5 pr-3 pl-1 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none sm:text-sm/6"
          placeholder="Address"
          value={address === null ? "" : address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </div>
    </section>
  );
};
