import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

const Cards = ({ cards }) => {
  console.log(cards);
  return (
    <div className="cards-container">
      { /* Using the cards prop, map over the list creating a 
          new Card component for each passing the card as the only prop */}
      {cards.map(card => (
        <Card
          card={card}
          key={`${card.author}-${card.headline}`}
          tab={card.tab}
          img={card.img}
          author={card.author}
          headline={card.headline}
        />
      ))}
    </div>
  );
};

// Make sure you include prop types for all of your incoming props

Cards.propTypes = {
  cards: PropTypes.arrayOf(PropTypes.shape({
    headline: PropTypes.string.isRequired,
    tab: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  })).isRequired,
};

export default Cards;