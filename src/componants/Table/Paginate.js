import React, { Component } from "react";
import ReactDOM from "react-dom";
import DropDown from "../CommanCompo/DropDown";
import _ from "lodash";

export default class PaginatedItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: 1,
      dropPage: 5,
    };
  }

  handlePageChange(pageNumber) {
    console.log(`active page is ${pageNumber}`);
    this.setState({ activePage: pageNumber });
  }

  render() {
    return (
      <div className="box-wrappwer">
        {_.range(this.state.dropPage - 5, this.state.dropPage).map((d) => {
          return (
            <span className="box-page btn btn-secondary hover-page">{d}</span>
          );
        })}

        <span className=" last-box">
          <DropDown
            list={[5, 10, 15, 20, 25, 30]}
            onPage={(data) => {
              console.log("1111111", data);
              this.setState({ dropPage: data });
            }}
            className="hover-page"
            style={{
              width: " 50px",
              textAlign: "center",
            }}
          >
            {this.state.dropPage}
          </DropDown>
        </span>
        {/* <span className="box-page">4</span>
        <span className="box-page">5</span> */}
      </div>
    );
  }
}
