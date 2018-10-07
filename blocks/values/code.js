export const init = state => {
  state.progressValue = 50
}

export const run = state => {
  state.progressValue = Math.round((Math.sin(performance.now() * 0.003) + 1) * 50)
}
