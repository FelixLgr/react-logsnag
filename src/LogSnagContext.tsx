import React, { createContext, useContext, ReactNode } from 'react';

import { LogSnag } from 'logsnag'

interface LogSnagContextValue {
  logEvent: (eventData: LogSnagEvent) => Promise<void>
  logInsight: (insightData: LogSnagInsight) => Promise<void>
}

interface LogSnagEvent {
  channel: string
  event: string
  description: string
  icon: string
  tags: {
    [key: string]: string
  }
  notify: boolean
}

interface LogSnagInsight {
  title: string
  value: string
  icon: string
}

const LogSnagContext = createContext<LogSnagContextValue | undefined>(undefined)

export const useLogSnag = () => {
  const context = useContext(LogSnagContext)
  if (!context) {
    throw new Error('useLogSnag must be used within a LogSnagProvider')
  }
  return context
}

interface LogSnagProviderProps {
  token: string
  project: string
  children: ReactNode
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
