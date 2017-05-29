import React from 'react';
import Slider from './react-materialize/Slider';
import Slide from './react-materialize/Slide';

const App = () => {
  const data = {
    one: null,
    two: null
  }
  return (
    <div>
      <Slider>
        <Slide
          src="http://lorempixel.com/580/250/nature/1"
          title="This is our big Tagline!">
          Here's our small slogan.
        </Slide>
        <Slide
          src="http://lorempixel.com/580/250/nature/2"
          title="Left aligned Caption"
          placement="left">
          Here's our small slogan.
        </Slide>
        <Slide
          src="http://lorempixel.com/580/250/nature/3"
          title="Right aligned Caption"
          placement="right">
          Here's our small slogan.
        </Slide>
      </Slider>
    </div>
  )
};

export default App;
