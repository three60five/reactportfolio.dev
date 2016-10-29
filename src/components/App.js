import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';

import '../../public/css/tachyons.min.css';
import '../../public/css/extras.css';


class App extends Component {
  getTheme() {
    const page = this.props.location.pathname;
    let themeColor = "caramel";

    switch(page) {
      case '/work':
        themeColor = 'creamsicle';
        break;
      case '/play':
        themeColor = 'sanjuanislands';
        break;
      case '/contact':
        themeColor = 'limeade';
        break;
      default:
        themeColor = 'caramel';
    }
    return themeColor
  }

  render() {
    return (
      <div className="App">
        <Header theme={this.getTheme()} />
        <div className="content">
          {this.props.children}
        </div>
        <Footer theme={this.getTheme()} />
      </div>
    )
  }
}

export default App;
