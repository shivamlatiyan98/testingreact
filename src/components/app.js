import React, { Component } from 'react';

import Componentbox from './commment_box';

import Commentlist from './commentlist';

import {createstore} from 'react-redux';



export default class App extends Component {
  render() {
    return (
      <div>React simple starter
        <Componentbox>
        </Componentbox>

        <Commentlist>
        </Commentlist>


      </div>
    );
  }
}
