import React, { createContext, useContext, ReactNode } from 'react'
import { LogSnagContextValue, LogSnagEvent, LogSnagInsight, LogSnagProviderProps } from './types'

import { LogSnag } from 'logsnag'

const LogSnagContext = createContext<LogSnagContextValue | undefined>(undefined)

export const useLogSnag = () => {
  const context = useContext(LogSnagContext)
  if (!context) {
    throw new Error('useLogSnag must be used within a LogSnagProvider')
  }
  return context
}

export const LogSnagProvider: React.FC<LogSnagProviderProps> = ({ token, project, children }) => {
  const logsnag = new LogSnag({
    token,
    project,
  })

  const logEvent = async (eventData: LogSnagEvent) => {
    await logsnag.publish(eventData)
  }

  const logInsight = async (insightData: LogSnagInsight) => {
    await logsnag.insight(insightData)
  }

  return <LogSnagContext.Provider value={{ logEvent, logInsight }}>{children}</LogSnagContext.Provider>
}
