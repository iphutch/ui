import React, { Component } from "react";
import PropTypes from "prop-types";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faSearch from "@fortawesome/fontawesome-free-solid/faSearch";
import { Label, Input } from "reactstrap";

class InputSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: this.props.value
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const query = e.target.value;
    this.props.onChange(query);
    this.setState({ query });
  }

  render() {
    const { placeholder } = this.props;
    const { query } = this.state;
    return (
      <div className="container-search-input">
        <Label for="searchInput">
          <FontAwesomeIcon icon={faSearch} className="header-nav-button-icon" />{" "}
        </Label>
        <Input
          type="text"
          className="search-input"
          id="searchInput"
          value={query}
          placeholder={placeholder}
          onChange={this.onChange}
        />
      </div>
    );
  }
}

InputSearch.propTypes = {
  query: PropTypes.string,
  placeholder: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  classNames: PropTypes.array
};

InputSearch.defaultProps = {
  placeholder: "Search...",
  query: ""
};

export default InputSearch;
