import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles'
import { grey, amber, red } from 'material-ui/colors'

import './App.css';
import ScatterPlot from './ScatterPlot';
import { MenuList, MenuItem } from 'material-ui/Menu';
import { ListItemText } from 'material-ui/List';
import Paper from 'material-ui/Paper';


const muiTheme = createMuiTheme({
  palette: {
    primary: grey,
    accent: amber,
    error: red,
    type: 'dark'
  }
})

class App extends Component {

  constructor() {
    super()
      const json = {
        data: [{
          x: [3, 1, 4, 1, 5, 9],
          y: [1, 4, 7, 2, 6, 2],
          type: "bar",
          marker: {
            color: "#BADA55"
          },
          name: "graph1",
          key: 0
        }, {
          x: [0, 1, 4, 5, 7, 8],
          y: [2, 7, 1, 8, 2, 8],
          type: "line",
          marker: {
            color: "#D942F4"
          },
          name: "graph2",
          key: 1
        }],

        layout: {
          xaxis: {
            range: [0, 10]
          },
          yaxis: {
            range: [0, 10]
          },
          title: "Test Graph"
        }
      };

    this.state = {
      json: json,
      selectedData: 0
    };
  }

  render() {

    const data = this.state.json.data;

    return (
      <MuiThemeProvider theme={muiTheme}>
        <div className="app">
          <div className="dropdown">
            <Paper>
              <MenuList>
                {
                  data.map(item => (
                    <MenuItem key={item.key} onClick={() => this.setState({selectedData: item.key })}>
                      <ListItemText primary={item.name}/>
                    </MenuItem>))
                }
            </MenuList>
          </Paper>
        </div>
          <div className="plot">
            <ScatterPlot json={this.state.json} selectedData={this.state.selectedData}/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
