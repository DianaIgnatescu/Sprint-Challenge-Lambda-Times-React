/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const TabWrapper = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  color: #fff;
  background-color: #333;
  margin: 0 5px;
  padding: 2px 10px;
  font-size: 12px;
  letter-spacing: 2px;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    text-decoration: underline;
  }
  ${props => props.activeTab && css`
    background-color: #fff;
    color: #333;
    border: 2px solid #333;
  `}

`;

const Tab = ({ tab, selectedTab, selectTabHandler }) => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop,
      if they match, the className should be: 'tab active-tab',
      if it is not it should just be 'tab' */

  if (tab === selectedTab) {
    return <TabWrapper activeTab onClick={() => selectTabHandler(tab)}>{tab.toUpperCase()}</TabWrapper>;
  }
  return <TabWrapper onClick={() => selectTabHandler(tab)}>{tab.toUpperCase()}</TabWrapper>;
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
};

export default Tab;
