import { Component } from "react";
import NewsCard from "./NewsCard";

const axios = require("axios");
export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      page: 1,
      query: "All",
      tpages: 0,
      active: "TopHeadlines",
      activeUrl: "top-headlines",
    };
  }

  async componentDidMount() {
    console.log("cdm");
    let url = `https://newsapi.org/v2/${this.state.activeUrl}?language=en&page=1&apiKey=29213e0a795b4d6887bcb61ce2dd9bcf&pageSize=30`;
    console.log(url);

    let data = await axios.get(url);

    let parsed = data.data;
    this.setState({
      articles: parsed.articles,
      tpages: parsed.totalResults,
    });
    console.log("tpages", this.state.tpages);
  }
  //----------------Handle Next Buttons------------------
  handlNext = async () => {
    let url = `https://newsapi.org/v2/${this.state.activeUrl}?language=en&q=${
      this.state.query
    }&page=${
      this.state.page + 1
    }&apiKey=29213e0a795b4d6887bcb61ce2dd9bcf&pageSize=30`;

    let data = await axios.get(url);
    console.log("page", this.state.page);

    let parsed = data.data;
    console.log("page", this.state.page);
    this.setState({
      articles: parsed.articles,
      tpages: parsed.totalResults,
      page: this.state.page + 1,
    });
  };

  //------------Handle Prev Button---------------
  handlPrev = async () => {
    let url = `https://newsapi.org/v2/${this.state.activeUrl}?language=en&q=${
      this.state.query
    }&page=${
      this.state.page - 1
    }&apiKey=29213e0a795b4d6887bcb61ce2dd9bcf&pageSize=30`;

    let data = await axios.get(url);

    let parsed = data.data;
    this.setState({
      articles: parsed.articles,
      tpages: parsed.totalResults,
      page: this.state.page - 1,
    });
    console.log("tpages", this.state.tpages);
  };
  //--------------Handle Input---------------------
  handleInput = (e) => {
    this.setState({
      query: e.target.value,
    });
  };
  //-------Search--------------------------
  search = async (e) => {
    e.preventDefault();
    console.log(this.state.query);
    let url = `https://newsapi.org/v2/${this.state.activeUrl}?language=en&q=${this.state.query}&page=1&apiKey=29213e0a795b4d6887bcb61ce2dd9bcf&pageSize=30`;
    console.log(url);
    let data = await axios.get(url);

    let parsed = data.data;

    this.setState({
      articles: parsed.articles,
      tpages: parsed.totalResults,
      page: 1,
    });
    console.log("tpages", this.state.tpages);
  };

  //Top-Headlines-------------------------
  TopHeadlines = async (e) => {
    let url = `https://newsapi.org/v2/top-headlines?language=en&q=${this.state.query}&page=1&apiKey=29213e0a795b4d6887bcb61ce2dd9bcf&pageSize=30`;
    let data = await axios.get(url);

    let parsed = data.data;

    this.setState({
      articles: parsed.articles,
      tpages: parsed.totalResults,
      active: "TopHeadlines",
      activeUrl: "top-headlines",
      page: 1,
    });
  };
  //-----------Everything---------------
  Everything = async (e) => {
    let url = `https://newsapi.org/v2/everything?language=en&q=${this.state.query}&page=1&apiKey=29213e0a795b4d6887bcb61ce2dd9bcf&pageSize=30`;
    let data = await axios.get(url);

    let parsed = data.data;

    this.setState({
      articles: parsed.articles,
      tpages: parsed.totalResults,
      active: "Everything",
      activeUrl: "everything",
      page: 1,
    });
  };

  //-----------------------------------------(RENDER)-----------------------------------
  render() {
    console.log(
      "page-no",
      this.state.page,
      "and search term",
      this.state.query,
      "tpages",
      this.state.tpages
    );
    return (
      <>
        <div className="w-full bg-gray-600 sticky opacity-90 top-0 z-10">
          <div className="navigation w-full 2xl:container mx-auto flex flex-col sm:flex-row gap-4 justify-between bg-gray-600  py-4 text-white px-4">
            <form className="flex justify-center">
              <input
                type="text"
                value={this.state.query}
                onChange={this.handleInput}
                className="text-black rounded-md px-1"
                placeholder="Search"
              />
              <button
                type="submit"
                onClick={this.search}
                onSubmit={this.search}
                className="bg-gray-900 p-1 mx-3 rounded-md shadow-blue-400 shadow-md active:shadow-none"
              >
                Search
              </button>
            </form>
            <div className="flex flex-1 justify-around">
              <button
                className="p-1 bg-black text-white rounded-md shadow-sm shadow-blue-300 disabled:border-b-4 border-b-blue-500"
                onClick={this.TopHeadlines}
                disabled={this.state.active === "TopHeadlines"}
              >
                Top-Headlines
              </button>
              <button
                className="p-1 bg-black text-white rounded-md shadow-sm shadow-blue-300 disabled:border-b-4 border-b-blue-500"
                onClick={this.Everything}
                disabled={this.state.active === "Everything"}
              >
                Everything
              </button>
            </div>
            <div className="buttons  flex flex-row items-center gap-4 px-4 w-full sm:w-fit justify-between">
              <button
                className="bg-black text-white p-2 rounded-sm disabled:bg-gray-400"
                onClick={this.handlPrev}
                disabled={this.state.page <= 1}
              >
                <i className="bx bx-left-arrow-alt"></i>Previous
              </button>
              <button
                className="bg-black text-white p-2 rounded-sm disabled:bg-gray-300"
                onClick={this.handlNext}
                disabled={this.state.page > Math.floor(this.state.tpages / 30)}
              >
                Next <i className="bx bx-right-arrow-alt"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="flex gap-4 flex-wrap justify-evenly items-center px-4">
          {this.state.articles.map((ele) => {
            return (
              ele.url &&
              ele.urlToImage &&
              ele.description &&
              ele.title && (
                <NewsCard
                  key={ele.url}
                  urlImage={ele.urlToImage}
                  headline={ele.title}
                  desc={ele.description.slice(0, 80) + "..."}
                  url={ele.url}
                />
              )
            );
          })}
        </div>
      </>
    );
  }
}
