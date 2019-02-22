import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Card from './Card';

const CardsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: none;
  flex-direction: row;
  width: 100%;
  margin-top: 16px;
  flex-wrap: wrap;
  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

const Cards = ({ cards }) => {
  return (
    <CardsContainer>
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
    </CardsContainer>
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