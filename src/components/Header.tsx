import React from 'react'

type Props = {
  title: string;      // Required
  isActive?: boolean; // Optional Props
}

export const Header = ({ title, isActive = false }: Props) => {
  return (
    <div>
      <h1>{title}</h1>
      {isActive && <h3>Active</h3>}
    </div>
  )
}
