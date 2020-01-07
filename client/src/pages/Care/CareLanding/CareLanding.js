import React from "react"
import NavButton from "../../../Atoms/NavButton/NavButton"
import "./CareLanding.css"

const CareLanding = () => {

   return (
      <div className="CareLanding-container">
         <h1>CareLanding is up Man!</h1>
            <div className="CareLanding-NavButton">
               <NavButton label="Add CARE Report" />
               <NavButton label="Update CARE Report" />
               <NavButton label="Archive CARE Report" />
            </div>
      </div>
   )
}

export default CareLanding