import { Component } from "react";

export default class Header extends Component {
  render() {
    let { company } = this.props;

    return (
      <>
        <div className="w-full bg-gray-400 py-2 lg:py-3">
          <div className="lg:container mx-auto px-3 py-1 lg:px-2 flex flex-row justify-center sm:justify-between items-center uppercase ">
            <h1 className="text-2xl font-bold">{company}</h1>

            <div className="socials sm:flex gap-4 hidden">
              <i className="bx bxl-facebook-square  scale-150 cursor-pointer hover:scale-125"></i>
              <i className="bx bxl-instagram scale-150 cursor-pointer hover:scale-125"></i>
              <i className="bx bxl-twitter scale-150 cursor-pointer hover:scale-125"></i>
            </div>
          </div>
        </div>

        <div className="w-full bg-gray-200 py-2">
          <div className="lg:container mx-auto px-3 py-1 lg:px-2 flex flex-col sm:flex-row justify-between items-center gap-5 sm:gap-0">
            <ul className="links flex sm:gap-5 flex-1 justify-evenly sm:justify-start flex-wrap self-stretch sm:items-center">
              <a href="/">
                <li className="link cursor-pointer hover:underline ">Home</li>
              </a>
              <a href="/">
                <li className="link cursor-pointer hover:underline ">About</li>
              </a>
              <a href="/">
                <li className="link cursor-pointer hover:underline ">
                  Our Service
                </li>
              </a>
              <a href="/">
                <li className="link cursor-pointer hover:underline ">
                  Contact Us
                </li>
              </a>
            </ul>
            <div className="search hidden sm:flex items-center gap-3">
              <input
                type="text"
                placeholder="search.."
                className="rounded-md p-1"
              />
              <i className="bx bx-search scale-150"></i>
            </div>
            <div className="socials flex gap-4 sm:hidden">
              <i className="bx bxl-facebook-square  scale-150 cursor-pointer hover:scale-125"></i>
              <i className="bx bxl-instagram scale-150 cursor-pointer hover:scale-125"></i>
              <i className="bx bxl-twitter scale-150 cursor-pointer hover:scale-125"></i>
            </div>
          </div>
        </div>
      </>
    );
  }
}
