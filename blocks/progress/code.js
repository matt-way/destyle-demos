import React from "react"
import { destyle } from 'destyle'

const Progress = ({ styles }) => (
  <div className={styles.root}>
  	<div className={styles.bar}/>
  </div>
)

const StyledProgress = destyle(Progress, 'Progress')

export const run = (state, { domRoot }) => {
  state.progress = StyledProgress
}
