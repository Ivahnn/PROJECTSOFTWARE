import React from 'react';
import './Cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Destinations!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="images/article1.jpg"
              text="What is Medicine?"
              label="Luxury"
              external={true}
              path="https://www.who.int/europe/emergencies/situations/covid-19"
            />

            <CardItem
              src="images/article2.jpg"
              text="What is Modern Medicine?"
              label="Luxury"
              external={true}
              path="https://www.medicalnewstoday.com/articles/323538?fbclid=IwAR01LhmYwYZdUywJ4f7yVv8uG84HlIYCeWdqLpo8HMd3hPjb47-URQ3cW8c#infectious-diseases"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/kongz3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              label="Mystery"
              external={true}
              target="_blank"
              path="//google.com"
            />
            <CardItem
              src="images/kongz4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              label="Adventure"
              external={true}
              target="_blank"
              path="//google.com"
            />
            <CardItem
              src="images/kongz5.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              external={true}
              path="//google.com"
            />
            <CardItem
              src="images/kongz5.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              label="Adrenaline"
              external={true}
              path="//google.com"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;