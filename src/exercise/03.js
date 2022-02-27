// useContext: simple Counter
// http://localhost:3000/isolated/exercise/03.js

import * as React from 'react'

/*******************************************************************************
 * Exercise
 ******************************************************************************/
// const CountContext = React.createContext()

// function CountDisplay() {
//   const [count] = React.useContext(CountContext)
//   return <div>{`The current count is ${count}`}</div>
// }

// function Counter() {
//   const [, setCount] = React.useContext(CountContext)
//   const increment = () => setCount(c => c + 1)
//   return <button onClick={increment}>Increment count</button>
// }

// function App() {
//   const [count, setCount] = React.useState(0)
//   return (
//     <div>
//       <CountContext.Provider value={[count, setCount]}>
//         <CountDisplay />
//         <Counter />
//       </CountContext.Provider>
//     </div>
//   )
// }

/*******************************************************************************
 * Extra 1. 💯 create a consumer hook
 ******************************************************************************/
const CountContext = React.createContext()

function CountProvider(props) {
  const [count, setCount] = React.useState(0)
  return <CountContext.Provider value={[count, setCount]} {...props} />
}

function useCount() {
  const context = React.useContext(CountContext)
  if (!context) {
    throw new Error('`useCount` must be used within the `CountProvider`')
  }
  return context
}

function CountDisplay() {
  const [count] = useCount()
  return <div>{`The current count is ${count}`}</div>
}

function Counter() {
  const [, setCount] = useCount()
  const increment = () => setCount(c => c + 1)
  return <button onClick={increment}>Increment count</button>
}

function App() {
  return (
    <div>
      <CountProvider>
        <CountDisplay />
        <Counter />
      </CountProvider>
    </div>
  )
}

export default App
