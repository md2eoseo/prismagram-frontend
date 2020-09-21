import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Text = styled.span`
  font-weight: 600;
  font-size: 15px;
  user-select: none;
`;

const LikesNumText = ({ text }) => <Text>{text}</Text>;

LikesNumText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default LikesNumText;
