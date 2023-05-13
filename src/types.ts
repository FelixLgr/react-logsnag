import { ReactNode } from 'react'

export interface LogSnagContextValue {
  logEvent: (eventData: LogSnagEvent) => Promise<void>
  logInsight: (insightData: LogSnagInsight) => Promise<void>
}

export interface LogSnagEvent {
  channel: string
  event: string
  description: string
  icon: string
  tags: {
    [key: string]: string
  }
  notify: boolean
}

export interface LogSnagInsight {
  title: string
  value: string
  icon: string
}

export interface LogSnagProviderProps {
  token: string
  project: string
  children: ReactNode
}
