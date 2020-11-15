import React from 'react';
import Register from './Register';

export default function Registers({ registers }) {
  console.log('registers:', registers[0]);
  return (
    <div>
      {registers.map((item) => (
        <Register key={item._id} item={item}></Register>
      ))}
    </div>
  );
}
