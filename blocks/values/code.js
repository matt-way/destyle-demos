export const run = state => {
  state.progressValue = 50
}

export const update = state => {
  state.progressValue = Math.round((Math.sin(performance.now() * 0.003) + 1) * 50)
}
