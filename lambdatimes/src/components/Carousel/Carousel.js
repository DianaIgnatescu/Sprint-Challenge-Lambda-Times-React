import React, { Component } from 'react';
import styled, { css } from 'styled-components';
import { carouselData } from '../../data'

const CarouselWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  height: 500px;
  position: relative;
  overflow: hidden;
  margin-top: 16px;
  img {
    width: 100%;
    display: none;
  }

  @media (min-width: 1200px) {
    width: 1200px;
  }
`;

const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  font-size: 40px;
  border-radius: 50%;
  position: absolute;
  width: 50px;
  height: 50px;
  cursor: pointer;
  &:hover {
    color: #333;
    background-color: #fff;
    border: 2px solid #333;
  }

  ${props => props.left && css`
    top: 50%;
    left: 25px;
    transform: translate(0, -50%);
  `}
  ${props => props.right && css`
    top: 50%;
    right: 25px;
    transform: translate(0, -50%);
  `}

`;



// Complete this Carousel 
export default class Carousel extends Component {
  constructor(props){
    super(props);
    this.state = {

    }
  }
  componentDidMount(){

  }

  leftClick = () => {

  }

  rightClick = () => {

  }

  selectedImage = () => {
    return <img src={} style={{display: 'block'}} />
  }
  
  render(){
    return (
      <CarouselWrapper>
        <Button left onClick={this.leftClick}>{"<"}</div>
        <Button right onClick={this.rightClick}>{">"}</div>
      </CarouselWrapper>
    )
  }
}