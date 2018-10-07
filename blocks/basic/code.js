import React from "react"
import ReactDOM from "react-dom"
import { destyle, setStyles } from "destyle"
import { css } from 'emotion'

const Simple = ({ styles, children }) => (
  <div className={styles.outside}>
    <div className={styles.text}>{children}</div>
  </div>
)

const StyledSimple = destyle(Simple, 'Simple')

/** Elsewhere **/

setStyles('Simple', {
  outside: css`
    background-color: #096a98;
		text-align: center;
		padding: 20px;
	`,  
  text: css`
		font-size: 20px;
		font-weight: 600;
		color: #fff;
	`
})

export const run = (state, { domRoot }) => {  
  const Container = state.container
  ReactDOM.render(
    <Container>
      <StyledSimple>Hello BrisJS</StyledSimple>
  	</Container>
  , domRoot)  
}
