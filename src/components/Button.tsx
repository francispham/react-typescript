import React from 'react'

type Props = {
  // onClick(): string;                 // Method returns String
  onMouseUp(): void;                    // Method returns Nothing
  onMouseDown(text: string):  void;     // Method with Params
  onMouseOut: () => void;               // Function return Nothing
  onMouseOver: (text: string) => void;  // Function with Params 
}
export const Button = ({ 
  onMouseOver, onMouseDown, onMouseUp, onMouseOut 
}: Props) => {
  return <button 
          onMouseUp={() => onMouseUp()}
          onMouseDown={() => onMouseDown('Mouse Down')}
          onMouseOut={() => onMouseOut()}
          onMouseOver={() => onMouseOver('Mouse Over')}
        >Submit</button>;
};
