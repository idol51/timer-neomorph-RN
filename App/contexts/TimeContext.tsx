import React, { ReactNode, createContext, useContext, useEffect, useState } from 'react'

interface ITimeContext {
    time: Date
}

const TimeContext = createContext<ITimeContext>({
    time: new Date()
})

export function TimeContextProvider({ children }: { children: ReactNode }) {
    const [ time, setTime ] = useState<Date>(new Date());

    useEffect(() => {
        setInterval(() => {
            setTime(new Date());
        }, 1000)
    }, [])
    
  return (
    <TimeContext.Provider value={{ time }}>
      {children}
    </TimeContext.Provider>
  )
}

export const useTimeContext = () => useContext(TimeContext);
