import React from 'react';
import Game from './game'; // Import the Game component
import { AnimatedBackground } from 'animated-backgrounds';

function App() {
  return (
    <div className="App">
      <Game />
      <AnimatedBackground animationName="auroraBorealis" />
    </div>
  );
}

export default App;
