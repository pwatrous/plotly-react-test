/* global Plotly:true */

import React, { Component } from 'react';
import createPlotlyComponent from 'react-plotly.js/factory'

const Plot = createPlotlyComponent(Plotly);

class ScatterPlot extends Component {
  render() {
    const selectedChart = [this.props.json.data[this.props.selectedData]];

    return (
      <div className="plot">
        <Plot
          data={selectedChart}
          layout={this.props.json.layout}
        />
      </div>
    );
  }
}

export default ScatterPlot;