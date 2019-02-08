import React, { Component } from 'react';

class Matrix extends Component {
  constructor(props) {
    super(props);
    this.canvasRef = React.createRef();
  }

  componentDidMount() {
    const canvas = this.canvasRef.current;
    const ctx = canvas.getContext('2d');
  }

  render() {
    return (
      <div>
        <canvas ref={this.canvasRef} width={window.innerWidth} height={window.innerHeight}/>
      </div>
    );
  }
}

export default Matrix;