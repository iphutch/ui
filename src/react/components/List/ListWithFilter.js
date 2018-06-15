import React, { Component } from "react";
import PropTypes from "prop-types";
import { InputSearch } from "../Form";

class ListWithFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(query) {
    this.setState({ query });
  }

  render() {
    const { query } = this.state;
    const { filterPlaceholder } = this.props;
    return (
      <div className="list-with-filter">
        <InputSearch
          placeholder={filterPlaceholder}
          value={query}
          onChange={this.onChange}
        />
        {this.props.render(this.state.query)}
      </div>
    );
  }
}

ListWithFilter.propTypes = {
  query: PropTypes.string,
  filterPlaceholder: PropTypes.string
};

ListWithFilter.defaultProps = {
  query: ""
};
export default ListWithFilter;
