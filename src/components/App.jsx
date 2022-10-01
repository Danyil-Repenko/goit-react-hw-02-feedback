import React, { Component } from 'react';
import { LeaveFeadback } from 'components/LeaveFeadback/LeaveFeadback';
import { Statistics } from './Statistics/Statistics';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // handleBtnClick = e => {
  //   this.setState((state) => {
  //     return ()
  //   });
  // };
  render() {
    return (
      <div>
        <LeaveFeadback />
        <Statistics />
      </div>
    );
  }
}
