/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

const Tab = ({ tab, selectedTab, selectTabHandler }) => {
  /* Using your props, determine if the `tab` prop matches the `selectedTab` prop,
      if they match, the className should be: 'tab active-tab',
      if it is not it should just be 'tab' */

  if (tab === selectedTab) {
    return <div className="tab active-tab" onClick={() => selectTabHandler(tab)}>{tab.toUpperCase()}</div>;
  }
  return <div className="tab">{tab.toUpperCase()}</div>;

  // return (
  //   <div
  //     className=""
  //     onClick={() => {
  //       /* Replace this dummy click handler function with your selectTabHandler function from props
  //        you'll need to pass the `tab` in as an argument to this handler. */
  //     }}
  //   >
  //     {tab.toUpperCase()}
  //   </div>
  // );
};

// Make sure you include PropTypes on your props.

Tab.propTypes = {
  tab: PropTypes.string.isRequired,
  selectedTab: PropTypes.string.isRequired,
  selectTabHandler: PropTypes.func.isRequired,
};

export default Tab;
