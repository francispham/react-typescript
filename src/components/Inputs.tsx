import React, { useState } from 'react';

export const Inputs = () => {
  const [name, setName] = useState('');
  const [age, setAge] = useState<string>('');
  const [address, setAddress] = useState<string | null>(null);

  return (
    <>
      <input value={name} onChange={e => setName(e.target.value)} />
      <input value={age} onChange={e => setAge(e.target.value)} />
      <input value={address === null ? '' : address} onChange={e => setAddress(e.target.value)} />
    </>
  )
};
