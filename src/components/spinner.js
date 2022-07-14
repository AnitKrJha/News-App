import { Component } from "react";
import spinner from "./Glass spheres.gif";
export default class Spinner extends Component {
  render() {
    return (
      <>
        <div className="flex justify-center m-auto">
          <img src={spinner} alt="" />
        </div>
      </>
    );
  }
}
