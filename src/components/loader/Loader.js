import React, { Component } from "react"

class Loader extends Component {
  render() {
    return (
      <div id="loader">
        <div className="spinner">
          <div className="bounce1"></div>
          <div className="bounce2"></div>
          <div className="bounce3"></div>
        </div>
      </div>
    )
  }
}

export default Loader