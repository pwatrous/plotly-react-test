/* global Plotly:true */

import React, { Component } from 'react';
import createPlotlyComponent from 'react-plotly.js/factory'

const Plot = createPlotlyComponent(Plotly);

class ScatterPlot extends Component {
  render() {

    const { json, selectedData } = this.props;

    return (
      <div className="plot">
        <Plot
          data={[json.data[selectedData]]}
          layout={json.layout}
        />
      </div>
    );
  }
}

export default ScatterPlot;