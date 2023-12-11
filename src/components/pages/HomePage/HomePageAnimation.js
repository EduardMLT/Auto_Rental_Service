import React from 'react';
import MovingComponent from 'react-moving-text';
import { DivTitle } from './HomePage.styled';

const AnimationsForChaining = ['popIn'];

const AnimationChain = () => {
  return (
    <DivTitle>
      <MovingComponent
        type={AnimationsForChaining}
        duration="3000ms"
        delay="0s"
        direction="normal"
        timing="ease"
        iteration="1"
        fillMode="none"
      >
        Welcome <br /> Auto Rental Service
      </MovingComponent>
    </DivTitle>
  );
};
export default AnimationChain;
