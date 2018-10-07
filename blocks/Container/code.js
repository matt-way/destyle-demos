import React from "react"

const styles = {
  backgroundColor: '#666',
  padding: '30px 15px',  
}

const Container = ({ children }) => (
  <div style={styles}>
    {children}
  </div>
)

export const run = (state, { domRoot }) => {
  state.container = Container
}

