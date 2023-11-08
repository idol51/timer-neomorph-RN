import React from 'react'
import Routes from './routes'
import { TimeContextProvider } from './contexts/TimeContext'

export default function App() {
  return (
    <TimeContextProvider>
        <Routes />
    </TimeContextProvider>
  )
}
