import React from "react"
import ReactDOM from "react-dom"
import { destyle, setStyles } from "destyle"
import { css } from 'emotion'

setStyles('ProgressAnt', {
  root: css`
    background-color: #f5f5f5;
		height: 8px;
    width: 100%;
    position: relative;
		border-radius: 100px;
	`,  
  bar: ({ percent, status }) => css`
		background-color: ${status === 'exception' 
  		? '#f5222d' 
  		: '#52c41a'
		};
		width: 100%;
    position: absolute;
    left: 0;
    bottom: 0;
    top: 0;
    transition: transform 0.02s linear;
    transform-origin: left;
		transform: scaleX(${percent / 100});
		border-radius: 100px;
	`
})

export const run = (state, { domRoot }) => {
  const StyledProgress = state.progress
  const Container = state.container
  ReactDOM.render(<Container>
    <StyledProgress destyleNames="ProgressAnt" percent={state.percent} status="exception"/>
  </Container>, domRoot)  
}
