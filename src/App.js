import React from 'react'
import ContextProvider from './Context'
import Router from './Router'
import './App.css'

function App() {
  return (
    <ContextProvider>
      <Router />
    </ContextProvider>
  )
}

export default App
