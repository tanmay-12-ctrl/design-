import React from 'react';
import './Home.css';
import Card from './Card';
import Banner from './Banner';

function Home() {
  return (
    <div className="home">
      <Banner /> {/* The Banner component */}
      
      <div className="home__section">
        {/* Adding 10 cards */}
        <Card
          src="zashion.png"
          title="Fashion Design 1"
          description="This is a creative design by a user."
        />
        <Card
          src="zashion.png"
          title="Fashion Design 2"
          description="A new fashionable outfit created by a designer."
        />
        <Card
          src="zashion.png"
          title="Fashion Design 3"
          description="Stylish designs for the upcoming season."
        />
        <Card
          src="zashion.png"
          title="Fashion Design 4"
          description="A creative combination of textures and styles."
        />
        <Card
          src="zashion.png"
          title="Fashion Design 5"
          description="Elegant and modern style designed by a talented artist."
        />
        <Card
          src="zashion.png"
          title="Fashion Design 6"
          description="A fusion of classic and contemporary design."
        />
        <Card
          src="zashion.png"
          title="Fashion Design 7"
          description="A bold statement piece for fashion-forward individuals."
        />
        <Card
          src="zashion.png"
          title="Fashion Design 8"
          description="Comfort and style merged into one design."
        />
        <Card
          src="zashion.png"
          title="Fashion Design 9"
          description="A vibrant design to brighten up your wardrobe."
        />
        <Card
          src="zashion.png"
          title="Fashion Design 10"
          description="Minimalist yet impactful design for any occasion."
        />
      </div>
    </div>
  );
}

export default Home;
