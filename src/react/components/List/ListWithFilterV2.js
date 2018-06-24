import React, { Component } from "react";
import PropTypes from "prop-types";
import CreatableSelect from "react-select/lib/Creatable";

const components = {
  DropdownIndicator: null
};

const createOption = label => {
  let groups = label.match(/(^\w+:)?(.*)/);
  console.log(groups);
  return {
    label: groups[0],
    key: groups[1] ? groups[1].slice(0, -1) : undefined,
    value: groups[2]
  };
};

const placeholders = [
  "Try 'list docker containers'",
  "Try 'install npm package'",
  "Try 'remove npm package'",
  "Try 'program:drush'",
  "Try 'program:free'",
  "Try 'program:du'",
  "Try 'show all processes'",
  "Try 'change user permissions'",
  "Try 'show free memory'",
  "Try 'program:git commit'",
  "Try 'program:git reset'",
  "Try 'git delete files'",
  "Try 'available disk space'",
  "Try 'find all old files'",
  "Try 'program:npm'",
  "Try 'platform:linux'",
  "Try 'restore mysql databases'",
  "Try 'compile java'",
  "Try 'compress files'",
  "Try 'program:rsync'",
  "Try 'program:ssh'",
  "Try 'platform:windows'",
  "Try 'platform:macos'",
  "Try 'program:git'",
  "Try 'Add ssh keys'",
  "Try 'program:wget'",
  "Try 'program:curl'",
  "Try 'Delete all files in directory'",
  "Try 'Uncompress and extract archive'",
  "Try 'show current hostname'"
];

class ListWithFilterV2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
      value: []
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  handleChange(value, actionMeta) {
    this.setState({ value });
  }

  handleInputChange(inputValue) {
    this.setState({ inputValue });
  }

  handleKeyDown(event) {
    const { inputValue, value } = this.state;
    if (!inputValue) return;
    switch (event.key) {
      case "Enter":
      case "Tab":
        this.setState({
          inputValue: "",
          value: [...value, createOption(inputValue)]
        });
        event.preventDefault();
    }
  }
  render() {
    const { inputValue, value } = this.state;
    return (
      <div className="list-with-filter">
        <CreatableSelect
          components={components}
          inputValue={inputValue}
          isClearable
          isMulti
          menuIsOpen={false}
          onChange={this.handleChange}
          onInputChange={this.handleInputChange}
          onKeyDown={this.handleKeyDown}
          placeholder={
            placeholders[Math.round(Math.random() * placeholders.length)]
          }
          value={value}
        />
        {this.props.render(value)}
      </div>
    );
  }
}

ListWithFilterV2.propTypes = {
  query: PropTypes.string,
  filterPlaceholder: PropTypes.string
};

ListWithFilterV2.defaultProps = {
  query: ""
};
export default ListWithFilterV2;
