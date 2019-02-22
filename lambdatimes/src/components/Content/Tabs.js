import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Tab from './Tab';

const TabsWrapper = styled.div`
  border-bottom: 1px solid lightgrey;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  width: 100%;
  height: 47px;
  background-color: #fff;
  }
  @media (min-width: 1280px) {
    width: 1280px;
  }
`;

const TabsTopics = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
`;

const TitleSpan = styled.span`
  font-size: 12px;
  letter-spacing: 1px;
  font-weight: bold;
`;

const Tabs = ({ tabs, selectTabHandler, selectedTab }) => {
  return (
    <TabsWrapper>
      <TabsTopics>
        <TitleSpan>TRENDING TOPICS:</TitleSpan>
        {/* map over the tabs provided on your props, create a new Tab component for each one.
            give the tab component a `selectTabHandler`, the `selectedTab`, and the `tab` itself as props */
        tabs.map((tab) => (
          <Tab
            selectTabHandler={selectTabHandler}
            selectedTab={selectedTab}
            tab={tab}
            key={tab}
          />
        ))}
      </TabsTopics>
    </TabsWrapper>
  );
};

Tabs.propTypes = {
  tabs: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectTabHandler: PropTypes.func.isRequired,
  selectedTab: PropTypes.string.isRequired,
};

// Make sure to use PropTypes to validate your types!
export default Tabs;
