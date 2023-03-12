
<h1 align="center"><img width = "50px" src = "https://matthewgferrari.github.io/react-heart/example/heart.png"/>React-Heart</h1>

<div align="center">

<h4 align = "center">An SVG based, animated and customizable heart button</h4>

[![MIT license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/matthewgferrari/react-heart/blob/main/LICENSE)
[![npm version](https://img.shields.io/npm/v/react-heart)](https://www.npmjs.com/package/react-heart)
[![npm size](https://img.shields.io/bundlephobia/min/react-heart)](https://github.com/matthewgferrari/react-heart/blob/main/src)
</div>
 <div align = "center"><img src = "https://matthewgferrari.github.io/react-heart/example/demo.gif"/></div>

## Demo
[Live demo and sandbox](https://matthewgferrari.github.io/react-heart/example/build/)

## Installation
React-Heart is available as an [npm package](https://www.npmjs.com/package/react-heart).

```sh
// with npm
npm install react-heart
```
## Usage
```sh
import React, { useState } from "react"
import Heart from "react-heart"

function App() {
	const [active, setActive] = useState(false)
	return (
		<div style={{ width: "2rem" }}>
			<Heart isActive={active} onClick={() => setActive(!active)}/>
		</div>
	);
}
```
## Props
Name | Type | Required? | Default | Description 
-----|------|---------|---------|---------
isActive | bool| required| N/A | Current heart status
onClick| function| required| N/A| Heart was clicked callback
animationTrigger | 'none' \| 'click' \| 'hover' \| 'both' | optional | 'click'| Action that triggers animation
animationScale| number|optional|1.05|Scale of animation 
animationDuration| number|optional|0.05|Length of animation
inactiveColor | string|optional|'black'|Color of inactive heart
activeColor|string|optional |'red'| Color of active heart
className |string |optional | N/A| Class name to apply custom CSS
style|object|optional |N/A| Style object

## Example
```sh
import React, { useState } from "react"
import Heart from "react-heart"

function App() {
	const [active, setActive] = useState(false)
	return (
		<div style={{ width: "2rem" }}>
			<Heart isActive={active} onClick={() => setActive(!active)} animationTrigger = "both" inactiveColor = "rgba(255,125,125,.75)" activeColor = "#e019ae" style = {{marginTop:'1rem'}} animationDuration = {0.1}/>
		</div>
	);
}
```
