import { useState, useRef } from "react";

export const Inputs = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState<string>("");
  const [address, setAddress] = useState<string | null>(null);

  const ref = useRef<HTMLInputElement>(null!); // null! is read only!
  /* Same as above but not commonly used!
    const ref = useRef<HTMLInputElement | null>(null);     
  */

  console.log("ref:", ref?.current?.value);

  return (
    <>
      <input ref={ref} value={name} onChange={(e) => setName(e.target.value)} />
      <input value={age} onChange={(e) => setAge(e.target.value)} />
      <input
        value={address === null ? "" : address}
        onChange={(e) => setAddress(e.target.value)}
      />
    </>
  );
};
