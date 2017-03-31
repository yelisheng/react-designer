import React, { Component } from 'react';
import Designer from '../../src/Designer';

export default class extends Component {
  state = {
    objects: [{
          blendMode:"lighten",
          fill :"rgba(0, 123, 255, 1)",
          width:91,
          height:86,
          radius:"0",
          rotate:0,
          strokeWidth:0,
          type:"rectangle",
          x:122,
          y:147
    },
    {
          blendMode:"lighten",
          fill :"rgba(0, 123, 200, 1)",
          width:150,
          height:186,
          radius:"0",
          rotate:0,
          strokeWidth:0,
          type:"rectangle",
          x:122,
          y:147
    },
    {
          closed:false,
          fill:"#e3e3e3",
          moveX:211,
          moveY:228,
          path:[{
            x:256.5,
            x1:211,
            x2:256.5,
            y:179,
            y1:228,
            y2:179},
            {
            x:256.5,
            x1:256.5,
            x2:256.5,
            y:179,
            y1:179,
            y2:179,
            }
          ],
          rotate:0,
          stroke:"gray",
          strokeWidth:1,
          type:"polygon",
          x:211,
          y:228
    },
    // {
    //       x1:0,
    //       y1:0,
    //       x2:100,
    //       y2:100,
    //       stroke:"black" ,    
    //       strokeWidth:2,
    //       type:"line",
        
    // }
    ]
  };




  handleUpdate(objects) {
    this.setState({objects});
  }

  render() {
    return (
      <Designer
        backgroundImage = {"url(http://192.168.134.88:9000/yys/wf/bj.jpg)"}
        width={432} height={760}
        objects={this.state.objects}
        onUpdate={this.handleUpdate.bind(this)}/>
    );
  }
}