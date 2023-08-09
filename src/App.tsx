import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Text, Logo, Title, Card, ReadTheDocs, Button, Root } from './App.styles'


function App() {
  const [count, setCount] = useState(0)

  return (
    <Root>
      <div>
        <Text href="https://vitejs.dev" target="_blank">
          <Logo src={viteLogo} alt="Vite logo" />
        </Text>
        <Text href="https://react.dev" target="_blank">
          <Logo src={reactLogo} alt="React logo" />
        </Text>
      </div>
      <Title>Vite + React</Title>
      <Card>
        <Button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </Card>
      <ReadTheDocs>
        Click on the Vite and React logos to learn more
      </ReadTheDocs>
    </Root>
  )
}

export default App
