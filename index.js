import App from './components/App';
import ReactDOM from 'react-dom';
import React from 'react';

const renderReactWidget = element => {
  ReactDOM.render(<App/>, element);
}

module.exports = renderReactWidget;