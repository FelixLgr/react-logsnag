<div align="center">
  <a href="https://logsnag.com/?utm_source=github/felixlgr-react-logsnag&utm_medium=logo" target="_blank">
    <img src="https://logsnag.com/_next/static/media/logo-text.c9e33f2c.svg" alt="LogSnag" width="280" height="84">
  </a>
</div>

# Unofficial LogSnag React

[![Package status](https://img.shields.io/npm/v/react-logsnag.svg)](https://www.npmjs.com/package/react-logsnag)
[![License](https://img.shields.io/npm/l/react-logsnag.svg)](https://opensource.org/licenses/MIT)


## Getting started

### Install

```bash
yarn add react-logsnag
```

### Usage

#### LogSnag Provider
First, wrap your application with the LogSnagProvider at the top level of your application, similar to other context providers. The provider requires token and project props.

```tsx
import React from 'react'
import { LogSnagProvider } from 'react-logsnag'

const App: React.FC = () => (
  <LogSnagProvider token="your_token" project="your_project">
    {/* Your app code here */}
  </LogSnagProvider>
)
```

#### useLogSnag Hook

The useLogSnag hook provides access to two functions: logEvent and logInsight.

```tsx
import React from 'react'
import { useLogSnag } from 'react-logsnag'

const YourComponent: React.FC = () => {
  const { logEvent, logInsight } = useLogSnag()

  const yourFunction = async () => {
    await logEvent({
      channel: 'your_channel',
      event: 'your_event',
      description: 'your_description',
      icon: 'your_icon',
      tags: {
        key: 'your_value',
      },
      notify: true,
    })

    await logInsight({
      title: 'your_title',
      value: 'your_value',
      icon: 'your_icon',
    })
  }

  return (
    // Your component code here
  )
}

```

#### Notes
The useLogSnag hook must be used within a component that is a child of the LogSnagProvider component. If you attempt to use it outside of this context, an error will be thrown.

## Official documentation

- [Logsnag](https://docs.logsnag.com)
