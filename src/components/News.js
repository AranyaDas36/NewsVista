import React, { Component } from 'react';
import Newsitem from './Newsitem';
import PropTypes from 'prop-types';

class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1
    };
  }

  async componentDidMount() {
    this.fetchData(1);
  }

  async fetchData(page) {
    try {
      this.setState({ loading: true });
      const url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=ec014c93bb00463a978a0ab72216cb01&page=${page}`;
      const data = await fetch(url);
      const parsedData = await data.json();
      this.setState({
        articles: parsedData.articles,
        loading: false,
        page: page
      });
    } catch (error) {
      console.error('Error fetching data:', error);
      this.setState({ loading: false });
    }
  }
  

  handlePrevClick = () => {
    const { page } = this.state;
    this.fetchData(page - 1);
  };

  handleNextClick = () => {
    const { page } = this.state;
    this.fetchData(page + 1);
    // Scroll to the top of the page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  render() {
    const { articles, loading, page } = this.state;

    return (
      <div className='container' my-4="true">
        <h2 className='my-4 '>NewsVista - Top Headlines</h2>
        <div className="row">
          {articles.map((element) => (
            <div className="col-md-3" key={element.url}>
              <Newsitem
                title={element.title}
                description={element.description}
                imageurl={element.urlToImage}
                newsurl={element.url}
              />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={page <= 1 || loading}
            onClick={this.handlePrevClick}
            className="btn btn-dark"
          >
            &larr; Previous
          </button>
          <button
            disabled={loading}
            onClick={this.handleNextClick}
            className="btn btn-dark"
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

News.propTypes = {
  // Add prop types for the Newsitem component if needed
};

export default News;

