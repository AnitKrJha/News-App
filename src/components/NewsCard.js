import { Component } from "react";

export default class NewsCard extends Component {
  render() {
    let { headline, desc, urlImage, url } = this.props;

    return (
      <>
        <a href={url} target="_">
          <div className="w-96 bg-gray-200 rounded-2xl  flex flex-col gap-4 shadow-xl shadow-gray-400 scale-95 hover:scale-100 active:shadow-none transition-all cursor-pointer">
            <img src={urlImage} alt="" className="aspect-video rounded-t-2xl" />
            <div className="content w-full px-4">
              <h1 className="headline text-2xl font-semibold my-2">
                {headline}
              </h1>
              <p
                className="desc"
                dangerouslySetInnerHTML={{ __html: desc }}
              ></p>
            </div>
            <div className="extras flex flex-row justify-between px-3 my-4">
              <span className="date text-sm text-gray-500">10-07-2022</span>
              <span className="Readmore font-bold text-blue-500  scale-105 hover:scale-110 transition-all hover:cursor-pointer">
                Read More <i className="bx bx-right-arrow-alt"></i>
              </span>
            </div>
          </div>
        </a>
      </>
    );
  }
}
