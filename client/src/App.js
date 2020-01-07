import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom"
import studentData from "./data/data.json"
import Landing from "./pages/Landing/Landing"
import CareLanding from "./pages/Care/CareLanding/CareLanding"
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
        studentData: studentData
    }
  }

  render() {

    // const studentDataToFilter = this.state.studentData.filter( (person, i) => person.hawaiian === "Y" )
    // const studentDataToPrint = studentDataToFilter.map( person => <p>{person.CID}{" - "}{person.lastName}{", "}{person.firstName}</p>)

    return (
      <div className="App">
        {/* <strong><p>Total Number of Students in Cohort: {this.state.studentData.length}</p></strong>
        <strong><p>Number returned: {studentDataToPrint.length}</p></strong>
        <strong><p>Percentage: {studentDataToPrint.length / this.state.studentData.length * 100}{"%"}</p></strong>
        <p>{studentDataToPrint}</p> */}
        <Switch>
          <Route exact path="/">
            <Landing studentData={this.state.studentData}/>
          </Route>
          <Route exact path="/CareLanding">
            <CareLanding />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
