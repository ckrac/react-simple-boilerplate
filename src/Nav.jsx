import React, {Component} from 'react';

class Nav extends Component {
  render() {
    return (
      <nav className="navbar">
        <a href="/" className="navbar-brand">Chatty</a>
        <span className="navbar-brand-countuser">{this.props.totalClients} Users Online</span>
      </nav>
    );
  }
}

export default Nav;