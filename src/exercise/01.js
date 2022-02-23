// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

/*******************************************************************************
 * Exercise
 ******************************************************************************/
// function countReducer(state, newState) {
//   return newState
// }

// function Counter({initialCount = 0, step = 1}) {
//   // 🐨 replace React.useState with React.useReducer.
//   // 💰 React.useReducer(countReducer, initialCount)
//   const [count, setCount] = React.useReducer(countReducer, initialCount)

//   // 💰 you can write the countReducer function so you don't have to make any
//   // changes to the next two lines of code! Remember:
//   // The 1st argument is called "state" - the current value of count
//   // The 2nd argument is called "newState" - the value passed to setCount
//   const increment = () => setCount(count + step)
//   return <button onClick={increment}>{count}</button>
// }

/*******************************************************************************
 * Extra 1. 💯 accept the step as the action
 ******************************************************************************/
// function countReducer(currentCount, step) {
//   return currentCount + step
// }

// function Counter({initialCount = 0, step = 1}) {
//   const [count, changeCount] = React.useReducer(countReducer, initialCount)
//   const increment = () => changeCount(step)
//   return <button onClick={increment}>{count}</button>
// }

/*******************************************************************************
 * Extra 2. 💯 simulate setState with an object
 ******************************************************************************/
// function countReducer(state, newState) {
//   return {
//     ...state,
//     ...newState,
//   }
// }

// function Counter({initialCount = 0, step = 1}) {
//   const [state, setState] = React.useReducer(countReducer, {
//     count: initialCount,
//   })
//   const {count} = state
//   const increment = () => setState({count: count + step})
//   return <button onClick={increment}>{count}</button>
// }

/*******************************************************************************
 * Extra 3. 💯 simulate setState with an object OR function
 ******************************************************************************/
// function countReducer(state, action) {
//   return {
//     ...state,
//     ...(typeof action === 'function' ? action(state) : action),
//   }
// }

// function Counter({initialCount = 0, step = 1}) {
//   const [state, setState] = React.useReducer(countReducer, {
//     count: initialCount,
//   })
//   const {count} = state
//   const increment = () =>
//     setState(currentState => ({count: currentState.count + step}))
//   return <button onClick={increment}>{count}</button>
// }

/*******************************************************************************
 * Extra 4. 💯 traditional dispatch object with a type and switch statement
 ******************************************************************************/
function countReducer(state, action) {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + action.step,
      }

    default:
      throw new Error(`Unsupported action type "${action.type}!"`)
  }
}

function Counter({initialCount = 0, step = 1}) {
  const [state, dispatch] = React.useReducer(countReducer, {
    count: initialCount,
  })
  const {count} = state
  const increment = () => dispatch({type: 'INCREMENT', step})
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
