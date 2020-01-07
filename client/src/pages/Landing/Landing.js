import React, { Component } from "react"
import PropTypes from "prop-types"
import NavButton from "../../Atoms/NavButton/NavButton"
import "./Landing.css"

class Landing extends Component {

   static propTypes = {
      /* Passed down from App.js
         All the student data */
      studentData: PropTypes.array
   }

   render() {

      const numStudents = this.props.studentData.length

      return (
         <div className="Landing-container">
               <h1 className="Landing-h1">General Engineering Dashboard</h1>
               <hr className="Landing-hr" />
               <div className="Landing-NavButton">
                  <NavButton label="CARE Cases: " number={numStudents} to="/CareLanding" />
                  <NavButton label="RiSE" />
                  <NavButton label="Recruiting Data" />
                  <NavButton label="Coverage" />
               </div>
         </div>
      )
   }
}

export default Landing