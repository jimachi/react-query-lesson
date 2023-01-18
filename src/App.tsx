import { FC } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ClassicalFetchA } from './components/ClassicalFetchA'
import { ClassicalFetchB } from './components/ClassicalFetchB'
import { StateProvider } from './context/StateProvider'
import { Layout } from './components/Layout'

const App: FC = () => {
  return (
    <BrowserRouter>
      <StateProvider>
        <Layout>
          <Routes>
            <Route path="/fetch-a" element={<ClassicalFetchA />} />
            <Route path="/fetch-b" element={<ClassicalFetchB />} />
          </Routes>
        </Layout>
      </StateProvider>
    </BrowserRouter>
  )
}

export default App
