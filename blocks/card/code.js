import React from "react"
import ReactDOM from "react-dom"
import { destyle, setStyles } from "destyle"
import { css } from 'emotion'

const UserCard = ({ styles }) => (
  <div className={styles.container}>
    <img
      className={styles.avatar}
      src="https://image.ibb.co/cXRUZe/image.png"
    />
    <div className={styles.content}>
      <div className={styles.name}>
        Disco
      </div>
      <div className={styles.details}>
        I'm having a wonderful time!!!
      </div>
    </div>
  </div>
)

const StyledUserCard = destyle(UserCard, 'UserCard')

/** Elsewhere **/

setStyles('UserCard', {
  container: props => css`
    font-family: 'Arial';
    background-color: ${props.active 
  		? "#d2c7ff" 
  		: "#f5f5f5"
		};
    height: 128px;
    width: 100%;
  `,
  avatar: props => css`
    float: left;
    height: 128px;
    width: 128px;
    border-right-style: solid;
    border-right-width: 4px;
    border-right-color: ${props.active 
  		? "#D05E5E" 
  		: "#111"
		};
  `,
  content: css`
    float: left;
    padding: 15px;
  `,
  name: css`
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 800;
    margin-bottom: 10px;
		color: #000;
  `,
  details: css`
    color: #444;
  `
})

export const run = (state, { domRoot }) => {  
  const Container = state.container
  ReactDOM.render(
    <div>
      <Container>
        <StyledUserCard/>
      </Container>
      <Container>
        <StyledUserCard active={true}/>
      </Container>
    </div>
  , domRoot)  
}

