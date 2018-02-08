import { Conversation } from 'chat-template';
import App from './components/App';
import ReactDOM from 'react-dom';
import React from 'react';

const showChatTemplate = (messages, element, delay = 1, height = 300) => {
  ReactDOM.render(<Conversation delay={delay} height={height} messages={messages} />,
    element);
};

// const showChatTemplate = element => {
//   ReactDOM.render(<App/>, element);
// }

module.exports = showChatTemplate;