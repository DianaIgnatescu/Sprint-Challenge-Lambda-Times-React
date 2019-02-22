import React from 'react';

const authenticate = Content => Login => class extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  componentDidMount() {
    const username = localStorage.getItem('username');
    if (username) {
      this.setState({ loggedIn: true });
    } else {
      this.setState({ loggedIn: false });
    }
  }

  render() {
    const { loggedIn } = this.state;
    if (loggedIn) {
      return <Content />;
    }
    return (
      <Login />
    );
  }
};

export default authenticate;

