import React, { Component } from 'react';
// import logo from './logo.svg';
import styles from './index.css';

// var a = require('webpack-react');
// console.log(a);

import webpackReact, {AutoComplete, LazyLoad, Box, ListView} from 'webpack-react';
// var ac = new AutoComplete();


console.log(webpackReact, LazyLoad, AutoComplete);


export default class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        <div className={styles.autocomplete}>
          <h2>Welcome to Webpack + React!!</h2>
        </div>
        <p className={styles.content}>
          To get started, edit <code>src/App.js</code> and save to reload!
        </p>

        <AutoComplete/>

        <LazyLoad/>

        <Box>
          <ListView/>
        </Box>
      </div>
    );
  }
}