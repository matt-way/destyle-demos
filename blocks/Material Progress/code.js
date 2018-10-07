import React from "react"
import ReactDOM from "react-dom"
import { destyle, setStyles } from "destyle"
import { css } from 'emotion'

setStyles('ProgressMaterial', {
  root: css`
		height: 5px;
    background-color: #c1e1fb;
		width: 100%;
		position: relative;
	`,
  bar: ({ value }) => css`
		background-color: #2196f3;
		width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    transition: transform 0.2s linear;
    transform-origin: left;
		transform: scaleX(${value / 100});
	`
})

export const run = (state, { domRoot }) => {
  const StyledProgress = state.progress
  const Container = state.container
  ReactDOM.render(<Container>
    <StyledProgress destyleNames="ProgressMaterial" value={state.value}/>
  </Container>, domRoot)  
}
