import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import ReactDOMServer from 'react-dom/server';
import {Rect, Vector, Text} from '../src/objects';
import classes from './App.module'

import MondrianExample from './components/Mondrian';



export default class App extends Component {
  render() {
    return (
      <div className={classes.container}>       
        <MondrianExample />
      </div>
    );
  }
}
