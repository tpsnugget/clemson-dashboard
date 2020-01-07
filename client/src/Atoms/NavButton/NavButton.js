import React from "react"
import { Link } from "react-router-dom"
import PropTypes from "prop-types"
import "./NavButton.css"

const NavButton = (props) => {

   NavButton.propTypes = {
      /* Passed down from Landing Component */
      /* The text for the button face */
      label: PropTypes.string,

      /* Dynamic path info for the to="" in the Link */
      to: PropTypes.string
   }

   const { label, number, to } = props

   const classNameText = number > 0 ? "NavButton-link NavButton-red" : "NavButton-link"

   return(
      <div className="NavButton">
         <Link to={to} className={classNameText}>{label}{" "}{number}</Link>
      </div>
   )
}

export default NavButton