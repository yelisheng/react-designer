import React, {Component} from 'react';
import {modes} from '../constants';
import Icon from '../Icon';
import _ from 'lodash';

import Vector from './Vector';

export default class Line extends Vector {
  static meta = {
    icon: <Icon icon={'rectangle'} size={30} />,
    initial: {
      width: 5,
      height: 5,
      strokeWidth: 0,
      fill: "blue",
      radius: 0,
      blendMode: "normal",
      rotate: 0
    }
  };

  render() {
    let {object, index} = this.props;
    return (
      <line style={this.getStyle()}
         {...this.getObjectAttributes()}
         />
    );
  }
}