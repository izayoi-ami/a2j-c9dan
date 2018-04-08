/*
export const someMutation = (state) => {}
 */

export const updateInjury = (state, msg) => {
  console.log('Hello', msg)
  state.parts[msg.part] = msg.level
}

export const toggleLeg = (state) => {
  state.legSelected = !state.legSelected
}
