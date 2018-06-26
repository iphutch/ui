import React from "react";
import PropTypes from "prop-types";
import Label from "./Label";
import FontAwesomeIcon from "@fortawesome/react-fontawesome";
import faUser from "@fortawesome/fontawesome-free-solid/faUser";

const LabelUser = ({ user }) => {
  return (
    <Label
      icon={<FontAwesomeIcon icon={faUser} />}
      text={`@${user.username}`}
      title={`Authored by @${user.username}`}
    />
  );
};

LabelUser.propTypes = {
  user: PropTypes.object
};

export default LabelUser;
