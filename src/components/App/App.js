import React, { Component } from 'react';
import LeftPanel from '../LeftPanel/LeftPanel';
import RightPanel from '../RightPanel/RightPanel';

import './app.scss';

export default class App extends Component {
  render() {
    return (
      <div className="app-container">
        <LeftPanel />
        <RightPanel />
      </div>
    )
  }
}