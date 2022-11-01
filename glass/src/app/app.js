import React, { Component } from 'react';
import './app.css';

import CardBody from '../card_body';
import BodyComment from '../comment_body';
import ListFooter from '../footer_body';
import HeaderBody from '../header_body';
import BodyGreen from '../logos_body';
import AppPhoto from '../photo_body';
import Shoper from '../price_body';

export default class App extends Component {
  render() {
    return (
      <div>
        <Shoper />
        <HeaderBody />
        <CardBody />
        <BodyGreen />
        <BodyComment />
        <AppPhoto />
        <ListFooter />
      </div>
    );
  }
};
