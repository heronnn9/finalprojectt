"use strict";

import React from "react";
import styled from 'styled-components';
import PropTypes from 'prop-types';
export default function Heart({
  isActive,
  onClick,
  animationTrigger = "click",
  animationScale = 1.05,
  animationDuration = 0.05,
  inactiveColor = "black",
  activeColor = "red",
  className,
  style
}) {
  return /*#__PURE__*/React.createElement(Svg, {
    onClick: () => onClick(),
    viewBox: "0 0 17 17",
    className: className,
    animationTrigger: animationTrigger,
    animationDuration: animationDuration,
    animationScale: animationScale,
    style: {
      fill: isActive ? activeColor : "transparent",
      stroke: isActive ? "transparent" : inactiveColor,
      strokeWidth: "1px",
      ...style
    },
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React.createElement("path", {
    fillRule: "evenodd",
    d: "M8.5,2.3C12.9-2.2,24,5.7,8.5,16C-7,5.7,4.1-2.2,8.5,2.3z"
  }));
}
const Svg = styled.svg`cursor: pointer;${props => {
  if (props.animationTrigger === "hover") return `transition: transform ${props.animationDuration}s; &:hover { transform: scale(${props.animationScale});}`;else if (props.animationTrigger === "click") return `transition: transform ${props.animationDuration}s; &:active { transform: scale(${props.animationScale});}`;else if (props.animationTrigger === "both") return `transition: transform ${props.animationDuration}s; &:hover { transform: scale(${props.animationScale});} &:active { transform: scale(${Math.pow(props.animationScale, 2)});}`;
}});}`;
Heart.propTypes = {
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  animationTrigger: PropTypes.oneOf(["click", "hover", "none", "both"]),
  animationScale: PropTypes.number,
  animationDuration: PropTypes.number,
  inactiveColor: PropTypes.string,
  activeColor: PropTypes.string,
  className: PropTypes.string,
  style: PropTypes.object
};