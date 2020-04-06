import React, { Component } from "react";
import PropTypes from "prop-types";
class Search extends Component {
  constructor(props) {
    super(props);

    this.state = {
      search: "",
    };
  }
  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({ search: e.target.value });
  };
  render() {
    const { handleSearch } = this.props;
    const { search } = this.state;
    return (
      <div className="search-container">
        <input
          value={search}
          onChange={this.handleChange}
          type="text"
          className="search-input"
        />
        <button className="search-btn" onClick={() => handleSearch(search)}>
          Search
        </button>
      </div>
    );
  }
}
Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
};

export default Search;