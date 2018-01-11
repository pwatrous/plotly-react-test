import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles';
import { grey, amber, red } from 'material-ui/colors';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import './App.css';
import { toggleGraph } from './actions';
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
});

const mapStateToProps = (state) => {
  return {
    json: state.json,
    selectedData: state.selectedData
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    toggleGraph: toggleGraph,
  }, dispatch)
}

class App extends Component {

  render() {

    const data = this.props.json.data;

    return (
      <MuiThemeProvider theme={muiTheme}>
        <div className="app">
          <div className="dropdown">
            <Paper>
              <MenuList>
                {
                  data.map(item => (
                    <MenuItem key={item.key} onClick={() => this.props.toggleGraph(item.key)}>
                      <ListItemText primary={item.name}/>
                    </MenuItem>))
                }
            </MenuList>
          </Paper>
        </div>
          <div className="plot">
            <ScatterPlot json={this.props.json} selectedData={this.props.selectedData}/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)