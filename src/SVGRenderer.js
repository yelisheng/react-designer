import React, {Component} from 'react';
import Radium from 'radium';

class SVGRenderer extends Component {
  static defaultProps = {
    onMouseOver() {}
  };

  getObjectComponent(type) {
    let {objectTypes} = this.props;
    return objectTypes[type];
  }

  renderObject(object, index) {
    let {objectRefs, onMouseOver} = this.props;
    let Renderer = this.getObjectComponent(object.type);
    return (
      <Renderer onRender={(ref) => objectRefs[index] = ref}
        onMouseOver={onMouseOver.bind(this, index)}
        object={object}  key={index} index={index} />
      );
  }

  render() {
    let {backgroundImage, objects, svgStyle, canvas, 
         onMouseDown, onRender} = this.props;
    let {width, height, canvasOffsetX, canvasOffsetY} = canvas;

    let style = [
      styles.canvas, 
      backgroundImage ? {
        backgroundImage: backgroundImage,
        backgroundSize: "auto"
      }: styles.grid, 
      {
        ...svgStyle,
        marginTop: canvasOffsetY,
        marginLeft: canvasOffsetX
      }
    ];

    return (
      <svg onMouseDown={onMouseDown}
         ref={onRender}
         width={width} 
         height={height}
         style={style}>
        {objects.map(this.renderObject.bind(this))}
      </svg>
    );
  }
}

export const styles = {
  canvas: {
    backgroundSize: 400
  },
  grid: {
    //backgroundImage: 'url(http://localhost:9000/yys/wf/bj.jpg)',
    backgroundSize: "auto"
  }
};

export default Radium(SVGRenderer);