import React from 'react';
import Img from 'next/image';

const pets = () => {
  return (
    <>
      {['1', '2', '3', '4', '5'].map((path) => {
        return (
          <>
            <div key={path}>
              <Img src={`/${path}.jpg`} alt="beauty" width="280" height="420" />
            </div>
          </>
        );
      })}
    </>
  );
};
export default pets;
